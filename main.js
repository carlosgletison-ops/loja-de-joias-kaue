/* =============================================
   CRISTAL FOLHEADOS — JS
============================================= */
const WA_NUMBER = '5588998333235';

/* --- CARRINHO (SACOLA) --- */
function getCart() {
  return JSON.parse(localStorage.getItem('cristal_cart')) || [];
}
function saveCart(cart) {
  localStorage.setItem('cristal_cart', JSON.stringify(cart));
}

// Intercepta a antiga função de modal para adicionar à sacola diretamente
function openModal(name, priceStr) {
  const card = event ? event.currentTarget.closest('.product-card') || event.target.closest('.product-card') : null;
  const img = card ? card.querySelector('img').src : 'https://images.unsplash.com/photo-1605100804763-247f66126e28?q=90&w=200&h=260&auto=format&fit=crop';
  const price = parseFloat(priceStr.replace('R$','').replace('.','').replace(',','.').trim());
  
  const cart = getCart();
  const existing = cart.find(i => i.name === name);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ name, price, img, qty: 1 });
  }
  saveCart(cart);
  updateSacolaBadge();
  
  showToast('Adicionado à sacola!');
  setTimeout(() => {
    window.location.href = 'sacola.html';
  }, 500);
}

function removeCartItem(name) {
  const cart = getCart().filter(i => i.name !== name);
  saveCart(cart);
}

function changeQty(name, delta) {
  const cart = getCart();
  const item = cart.find(i => i.name === name);
  if (!item) return;
  item.qty += delta;
  if (item.qty < 1) {
    removeCartItem(name);
  } else {
    saveCart(cart);
  }
  if (window.renderCart) renderCart();
}

function handleClearCart() {
  if (confirm('Deseja esvaziar a sacola?')) {
    localStorage.removeItem('cristal_cart');
    if (window.renderCart) renderCart();
  }
}

function cartTotal() {
  return getCart().reduce((acc, item) => acc + (item.price * item.qty), 0);
}

/* ---- Sacola badge na navbar ---- */
function updateSacolaBadge() {
  const badge = document.getElementById('sacolaCount');
  if (!badge) return;
  const total = getCart().reduce((acc, i) => acc + i.qty, 0);
  badge.textContent = total;
  badge.classList.toggle('visible', total > 0);
}

function showToast(msg) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

/* --- RENDERIZAÇÃO DA SACOLA --- */
function renderCart() {
  const layout = document.getElementById('cartLayout');
  const empty  = document.getElementById('cartEmpty');
  const list   = document.getElementById('cartList');
  if (!layout || !empty || !list) return;

  const cart = getCart();
  if (!cart.length) {
    layout.style.display = 'none';
    empty.style.display  = 'block';
    return;
  }

  layout.style.display = 'grid';
  empty.style.display  = 'none';
  
  list.innerHTML = cart.map(item => {
    const sub = (item.price * item.qty).toLocaleString('pt-BR', { minimumFractionDigits: 2 });
    return `
      <div class="cart-item">
        <div class="cart-item-thumb"><img src="${item.img}" alt="${item.name}"></div>
        <div class="cart-item-info">
          <p class="cart-item-name">${item.name}</p>
          <p class="cart-item-price">R$ ${item.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })} un.</p>
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <div class="cart-qty">
              <button class="cart-qty-btn" onclick="changeQty('${item.name}', -1)">−</button>
              <span class="cart-qty-val">${item.qty}</span>
              <button class="cart-qty-btn" onclick="changeQty('${item.name}', 1)">+</button>
            </div>
            <p style="font-weight:500; font-size:0.9rem; color:var(--ink);">R$ ${sub}</p>
          </div>
        </div>
        <button class="cart-item-remove" onclick="removeCartItem('${item.name}'); renderCart();">Remover</button>
      </div>
    `;
  }).join('');
  
  updateSummary();
}

function updateSummary() {
  const cart = getCart();
  const total = cartTotal();
  const qty = cart.reduce((acc, item) => acc + item.qty, 0);
  
  document.getElementById('cartItemCount').textContent = qty;
  document.getElementById('summaryQty').textContent = qty;
  const formatTotal = 'R$ ' + total.toLocaleString('pt-BR', { minimumFractionDigits: 2 });
  document.getElementById('summarySubtotal').textContent = formatTotal;
  document.getElementById('summaryTotal').textContent = formatTotal;
  
  // Update WhatsApp Button
  let msg = `Olá! Tenho interesse nos seguintes itens:\n\n`;
  cart.forEach(i => {
    msg += `- ${i.qty}x ${i.name} (R$ ${i.price.toLocaleString('pt-BR', {minimumFractionDigits:2})})\n`;
  });
  msg += `\n*Total:* ${formatTotal}\nPodem ajudar-me com a entrega?`;
  
  const btn = document.getElementById('checkoutBtn');
  if (btn) btn.href = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
}

/* =============================================
   EVENT LISTENERS GERAIS
============================================= */
document.addEventListener('DOMContentLoaded', () => {
  /* ---- SPLASH SCREEN ---- */
  const splash = document.getElementById('splash');
  if (splash) {
    setTimeout(() => {
      splash.classList.add('hidden');
      splash.addEventListener('transitionend', () => splash.remove(), { once: true });
    }, 2200);
  }

  // Se estiver na página de sacola, renderiza
  if (document.body.dataset.page === 'sacola') {
    renderCart();
  }

  // Atualiza badge da sacola e favoritos
  updateSacolaBadge();
  updateWishBadge();

  /* ---- FLOATING PILL NAVBAR ---- */
  const header = document.getElementById('siteHeader');
  if (header) {
    const onScroll = () => {
      header.classList.toggle('floating', window.scrollY > 30);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // run once on load
  }

  // Mobile menu
  const ham = document.getElementById('hamburger');
  const mob = document.getElementById('mobMenu');
  const mobClose = document.getElementById('mobClose');
  if (ham && mob) {
    ham.addEventListener('click', () => {
      mob.classList.add('open');
      mob.setAttribute('aria-hidden', 'false');
    });
    const closeMenu = () => {
      mob.classList.remove('open');
      mob.setAttribute('aria-hidden', 'true');
    };
    mobClose?.addEventListener('click', closeMenu);
    mob.querySelectorAll('.mob-link').forEach(a => a.addEventListener('click', closeMenu));
  }

  // Reveal on scroll (animação de entrada)
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { 
      if (e.isIntersecting) { 
        e.target.style.opacity = '1'; 
        e.target.style.transform = 'none'; 
      } 
    });
  }, { threshold: 0.1 });
  
  document.querySelectorAll('.product-card, .sobre-content, .section-header, .page-hero').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s var(--ease), transform 0.6s var(--ease)';
    io.observe(el);
  });

  /* ---- SEARCH BAR ---- */
  const btnSearch    = document.getElementById('btnSearch');
  const searchWrap   = document.getElementById('headerSearchWrap');
  const searchInput  = document.getElementById('headerSearchInput');
  const searchClear  = document.getElementById('headerSearchClear');
  const mobSearchInput = document.getElementById('mobSearchInput');

  // Filter products by query
  function filterProducts(query) {
    const q = query.trim().toLowerCase();
    document.querySelectorAll('.product-card').forEach(card => {
      const name = card.querySelector('.product-name')?.textContent.toLowerCase() || '';
      const match = !q || name.includes(q);
      card.style.display = match ? '' : 'none';
    });
  }

  // Toggle desktop search
  if (btnSearch && searchWrap && searchInput) {
    btnSearch.addEventListener('click', () => {
      const isOpen = searchWrap.classList.toggle('open');
      header?.classList.toggle('searching', isOpen);
      if (isOpen) {
        searchInput.focus();
      } else {
        searchInput.value = '';
        filterProducts('');
      }
    });

    searchInput.addEventListener('input', () => filterProducts(searchInput.value));

    searchClear?.addEventListener('click', () => {
      searchWrap.classList.remove('open');
      header?.classList.remove('searching');
      searchInput.value = '';
      filterProducts('');
    });

    // Close on Escape
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && searchWrap.classList.contains('open')) {
        searchWrap.classList.remove('open');
        header?.classList.remove('searching');
        searchInput.value = '';
        filterProducts('');
      }
    });
  }

  // Mobile search
  if (mobSearchInput) {
    mobSearchInput.addEventListener('input', () => filterProducts(mobSearchInput.value));
  }
});

/* --- FAVORITOS (WISHLIST) --- */
function getWishlist() {
  return JSON.parse(localStorage.getItem('cristal_wishlist')) || [];
}

function saveWishlist(wl) {
  localStorage.setItem('cristal_wishlist', JSON.stringify(wl));
  updateWishBadge();
}

function toggleWishlist(id) {
  let wl = getWishlist();
  const index = wl.indexOf(id);
  if (index > -1) {
    wl.splice(index, 1);
    showToast('♡ Removido dos favoritos');
  } else {
    wl.push(id);
    showToast('♥ Adicionado aos favoritos!');
  }
  saveWishlist(wl);
  
  // Se estiver na página de favoritos, re-renderiza
  if (document.body.dataset.page === 'favoritos' && typeof renderFavorites === 'function') {
    renderFavorites();
  }
  
  // Atualiza a classe visual do botão nas outras páginas
  document.querySelectorAll(`.product-card[data-id="${id}"] .btn-wishlist`).forEach(btn => {
    const active = wl.includes(id);
    btn.classList.toggle('active', active);
    btn.textContent = active ? '♥' : '♡';
  });
}

function updateWishBadge() {
  const badges = document.querySelectorAll('.wish-badge');
  const wl = getWishlist();
  badges.forEach(badge => {
    badge.textContent = wl.length;
    badge.classList.toggle('visible', wl.length > 0);
  });
}
