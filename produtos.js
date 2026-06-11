/* =============================================
   BANCO DE DADOS DE PRODUTOS DINÂMICO
============================================= */
const PRODUCTS = [
  {
    "id": "anel_3_banho_55",
    "name": "Anel 3 Banho",
    "price": 55,
    "img": "joias catalogadas/Anel 3 Banho - 55$.jpg",
    "category": "aneis",
    "badge": ""
  },
  {
    "id": "anel_3_banho_1_55",
    "name": "Anel 3 Banho 1",
    "price": 55,
    "img": "joias catalogadas/Anel 3 Banho1 - 55$.jpg",
    "category": "aneis",
    "badge": ""
  },
  {
    "id": "anel_3_banho_2_55",
    "name": "Anel 3 Banho 2",
    "price": 55,
    "img": "joias catalogadas/Anel 3 Banho2 - 55$.jpg",
    "category": "aneis",
    "badge": ""
  },
  {
    "id": "anel_3_banho_3_55",
    "name": "Anel 3 Banho 3",
    "price": 55,
    "img": "joias catalogadas/Anel 3 Banho3 - 55$.jpg",
    "category": "aneis",
    "badge": ""
  },
  {
    "id": "anel_3_banho_4_55",
    "name": "Anel 3 Banho 4",
    "price": 55,
    "img": "joias catalogadas/Anel 3 Banho4 - 55$.jpg",
    "category": "aneis",
    "badge": ""
  },
  {
    "id": "anel_3_banho_5_55",
    "name": "Anel 3 Banho 5",
    "price": 55,
    "img": "joias catalogadas/Anel 3 banho5 - 55$.jpg",
    "category": "aneis",
    "badge": ""
  },
  {
    "id": "anel_chaveirinho_rodio_branco_120",
    "name": "Anel Chaveirinho Ródio Branco",
    "price": 120,
    "img": "joias catalogadas/Anel Chaveirinho Ródio branco - 120$.jpg",
    "category": "aneis",
    "badge": "Premium"
  },
  {
    "id": "anel_ciclone_55",
    "name": "Anel Ciclone",
    "price": 55,
    "img": "joias catalogadas/Anel ciclone - 55$.jpg",
    "category": "aneis",
    "badge": ""
  },
  {
    "id": "anel_coracao_folheado_a_ouro_95",
    "name": "Anel Coração Folheado a Ouro",
    "price": 95,
    "img": "joias catalogadas/Anel coração folheado a ouro - 95$.jpg",
    "category": "aneis",
    "badge": ""
  },
  {
    "id": "anel_folheado_a_ouro_18k_70",
    "name": "Anel Folheado a Ouro 18k",
    "price": 70,
    "img": "joias catalogadas/Anel Folheado a Ouro 18K - 70$.jpg",
    "category": "aneis",
    "badge": "Premium"
  },
  {
    "id": "brinco_180",
    "name": "Brinco",
    "price": 180,
    "img": "joias catalogadas/Brinco - 180$.jpeg",
    "category": "brincos",
    "badge": ""
  },
  {
    "id": "brinco_220201_230",
    "name": "Brinco 220201",
    "price": 230,
    "img": "joias catalogadas/Brinco 220201 valor 230$.jpeg",
    "category": "brincos",
    "badge": ""
  },
  {
    "id": "brinco_220720_211",
    "name": "Brinco 220720",
    "price": 211,
    "img": "joias catalogadas/brinco 220720 - 211$.jpeg",
    "category": "brincos",
    "badge": ""
  },
  {
    "id": "brinco_220905_88",
    "name": "Brinco 220905",
    "price": 88,
    "img": "joias catalogadas/Brinco 220905 88$.jpeg",
    "category": "brincos",
    "badge": ""
  },
  {
    "id": "brinco_argola_140",
    "name": "Brinco Argola",
    "price": 140,
    "img": "joias catalogadas/brincoa argola 140$.jpeg",
    "category": "brincos",
    "badge": ""
  },
  {
    "id": "brinco_argola_02_24",
    "name": "Brinco Argola 02",
    "price": 24,
    "img": "joias catalogadas/brinco argola 02 24$.jpeg",
    "category": "brincos",
    "badge": ""
  },
  {
    "id": "brinco_argola_05_30",
    "name": "Brinco Argola 05",
    "price": 30,
    "img": "joias catalogadas/Brinco argola 05 30$.jpeg",
    "category": "brincos",
    "badge": ""
  },
  {
    "id": "brinco_argola_cravado_221094_172",
    "name": "Brinco Argola Cravado 221094",
    "price": 172,
    "img": "joias catalogadas/brinco arg crav 221094 - 172$.jpeg",
    "category": "brincos",
    "badge": ""
  },
  {
    "id": "brinco_ba_2132_112",
    "name": "Brinco Ba 2132",
    "price": 112,
    "img": "joias catalogadas/Brinco Ba 2132 112$.jpeg",
    "category": "brincos",
    "badge": ""
  },
  {
    "id": "brinco_coracao_18",
    "name": "Brinco Coração",
    "price": 18,
    "img": "joias catalogadas/brinco coração - 18$.jpeg",
    "category": "brincos",
    "badge": ""
  },
  {
    "id": "brinco_ear_cuff_120",
    "name": "Brinco Ear Cuff",
    "price": 120,
    "img": "joias catalogadas/Brinco  ear cuff 120$.jpeg",
    "category": "brincos",
    "badge": ""
  },
  {
    "id": "brinco_esfera_vt_148",
    "name": "Brinco Esfera Vt",
    "price": 148,
    "img": "joias catalogadas/Brinco esfera VT 148$.jpeg",
    "category": "brincos",
    "badge": ""
  },
  {
    "id": "brinco_f221080_170",
    "name": "Brinco F221080",
    "price": 170,
    "img": "joias catalogadas/brinco f221080 170$.jpeg",
    "category": "brincos",
    "badge": ""
  },
  {
    "id": "brinco_flor_120",
    "name": "Brinco Flor",
    "price": 120,
    "img": "joias catalogadas/brinco flor - 120.jpeg",
    "category": "brincos",
    "badge": ""
  },
  {
    "id": "brinco_flor_fc027_105",
    "name": "Brinco Flor FC027",
    "price": 105,
    "img": "joias catalogadas/Brinco flor FC027 105$.jpeg",
    "category": "brincos",
    "badge": ""
  },
  {
    "id": "brinco_vt_002_173",
    "name": "Brinco Vt 002",
    "price": 173,
    "img": "joias catalogadas/Brinco vt 002 173$.jpeg",
    "category": "brincos",
    "badge": ""
  },
  {
    "id": "brinco_vt_201_150",
    "name": "Brinco Vt 201",
    "price": 150,
    "img": "joias catalogadas/Brinco vt 201 150$.jpeg",
    "category": "brincos",
    "badge": ""
  },
  {
    "id": "brinco_vt012_205",
    "name": "Brinco VT012",
    "price": 205,
    "img": "joias catalogadas/Brinco vt012 205$.jpeg",
    "category": "brincos",
    "badge": ""
  },
  {
    "id": "brinco_vt015_180",
    "name": "Brinco VT015",
    "price": 180,
    "img": "joias catalogadas/Brinco vt015 - 180$.jpeg",
    "category": "brincos",
    "badge": ""
  },
  {
    "id": "brinco_vt4180_159",
    "name": "Brinco VT4180",
    "price": 159,
    "img": "joias catalogadas/brinco VT4180 159$.jpeg",
    "category": "brincos",
    "badge": ""
  },
  {
    "id": "brinco_vt4378_175",
    "name": "Brinco VT4378",
    "price": 175,
    "img": "joias catalogadas/Bronco vt4378 - 175$.jpeg",
    "category": "brincos",
    "badge": ""
  },
  {
    "id": "brincos_220487_147",
    "name": "Brincos 220487",
    "price": 147,
    "img": "joias catalogadas/Brincos 220487 147$.jpeg",
    "category": "brincos",
    "badge": ""
  },
  {
    "id": "brincos_argola_24",
    "name": "Brincos Argola",
    "price": 24,
    "img": "joias catalogadas/Brincos argola - 24$.jpeg",
    "category": "brincos",
    "badge": ""
  },
  {
    "id": "brincos_div_001_115",
    "name": "Brincos Div 001",
    "price": 115,
    "img": "joias catalogadas/Brincos Div 001 - 115$.jpeg",
    "category": "brincos",
    "badge": ""
  },
  {
    "id": "brincos_ear_cuff_flor_98",
    "name": "Brincos Ear Cuff Flor",
    "price": 98,
    "img": "joias catalogadas/Brincos ear cuff flor 98$.jpeg",
    "category": "brincos",
    "badge": ""
  },
  {
    "id": "brincos_franja_66",
    "name": "Brincos Franja",
    "price": 66,
    "img": "joias catalogadas/Brincos Franja 66$.jpeg",
    "category": "brincos",
    "badge": ""
  },
  {
    "id": "brincos_r220201_cristal_230",
    "name": "Brincos R220201 Cristal",
    "price": 230,
    "img": "joias catalogadas/Brincos R220201 cristal 230$.jpeg",
    "category": "brincos",
    "badge": ""
  },
  {
    "id": "brincos_r220702_142",
    "name": "Brincos R220702",
    "price": 142,
    "img": "joias catalogadas/Brincos R220702 142$.jpeg",
    "category": "brincos",
    "badge": ""
  },
  {
    "id": "brincos_redondo_com_microzirconia_95",
    "name": "Brincos Redondo com Microzircônia",
    "price": 95,
    "img": "joias catalogadas/brincos red com microzircônia 95$.jpeg",
    "category": "brincos",
    "badge": ""
  },
  {
    "id": "brincos_vt_003_223",
    "name": "Brincos Vt 003",
    "price": 223,
    "img": "joias catalogadas/Brincos vt 003 - 223$.jpeg",
    "category": "brincos",
    "badge": ""
  },
  {
    "id": "brincos_vt_4377_198",
    "name": "Brincos Vt 4377",
    "price": 198,
    "img": "joias catalogadas/Brincos vt 4377 198$.jpeg",
    "category": "brincos",
    "badge": ""
  },
  {
    "id": "trio_brincos_retangular_150",
    "name": "Trio Brincos Retangular",
    "price": 150,
    "img": "joias catalogadas/Trio Brincos Retangular - 150$.jpeg",
    "category": "brincos",
    "badge": ""
  },
  {
    "id": "colar_92",
    "name": "Colar",
    "price": 92,
    "img": "joias catalogadas/Colar - 92$.jpg",
    "category": "colares",
    "badge": ""
  },
  {
    "id": "colar_2_488",
    "name": "Colar 2",
    "price": 488,
    "img": "joias catalogadas/colar 2 - 488$.jpg",
    "category": "colares",
    "badge": ""
  },
  {
    "id": "colar_3_180",
    "name": "Colar 3",
    "price": 180,
    "img": "joias catalogadas/colar 3 - 180.jpg",
    "category": "colares",
    "badge": ""
  },
  {
    "id": "colar_4_210",
    "name": "Colar 4",
    "price": 210,
    "img": "joias catalogadas/colar 4 - 210$.jpg",
    "category": "colares",
    "badge": ""
  },
  {
    "id": "colar_5_210",
    "name": "Colar 5",
    "price": 210,
    "img": "joias catalogadas/colar 5 - 210$.jpg",
    "category": "colares",
    "badge": ""
  },
  {
    "id": "colar_de_pedras_naturais_310",
    "name": "Colar de Pedras Naturais",
    "price": 310,
    "img": "joias catalogadas/colar de pedras naturais - 310$.jpeg",
    "category": "colares",
    "badge": ""
  },
  {
    "id": "colar_de_perolas_220",
    "name": "Colar de Pérolas",
    "price": 220,
    "img": "joias catalogadas/Colar de Pérolas - 220$.jpg",
    "category": "colares",
    "badge": ""
  },
  {
    "id": "colar_divino_espirito_santo_perola_180",
    "name": "Colar Divino Espirito Santo Pérola",
    "price": 180,
    "img": "joias catalogadas/Colar divino espirito santo perola - 180$.jpeg",
    "category": "colares",
    "badge": ""
  },
  {
    "id": "colar_fc_pingente_zirconia_465",
    "name": "Colar Fc Pingente Zircônia",
    "price": 465,
    "img": "joias catalogadas/Colar FC Pingente Zir 465$.jpeg",
    "category": "colares",
    "badge": ""
  },
  {
    "id": "colar_fita_620788_275",
    "name": "Colar Fita 620788",
    "price": 275,
    "img": "joias catalogadas/Colar fita 620788 - 275$.jpeg",
    "category": "colares",
    "badge": ""
  },
  {
    "id": "colar_gravatinha_r620201_245",
    "name": "Colar Gravatinha R620201",
    "price": 245,
    "img": "joias catalogadas/Colar gravainha R620201 - 245$.jpeg",
    "category": "colares",
    "badge": ""
  },
  {
    "id": "colar_longo_vt0010_348",
    "name": "Colar Longo VT0010",
    "price": 348,
    "img": "joias catalogadas/colar longo  VT0010 - 348$.jpeg",
    "category": "colares",
    "badge": ""
  },
  {
    "id": "colar_madreperola_385",
    "name": "Colar Madrepérola",
    "price": 385,
    "img": "joias catalogadas/colar madripérola - 385$.jpeg",
    "category": "colares",
    "badge": ""
  },
  {
    "id": "colar_r62119_180",
    "name": "Colar R62119",
    "price": 180,
    "img": "joias catalogadas/Colar R62119 - 180.jpg",
    "category": "colares",
    "badge": ""
  },
  {
    "id": "conjunto_18k_170",
    "name": "Conjunto 18k",
    "price": 170,
    "img": "joias catalogadas/Conjunto 18K - 170$.jpg",
    "category": "colares",
    "badge": ""
  },
  {
    "id": "conjunto_clover_346",
    "name": "Conjunto Clover",
    "price": 346,
    "img": "joias catalogadas/conjunto colver 346$.jpeg",
    "category": "colares",
    "badge": ""
  },
  {
    "id": "conjunto_rivera_450",
    "name": "Conjunto Rivera",
    "price": 450,
    "img": "joias catalogadas/conjunto rivera - 450$.jpeg",
    "category": "colares",
    "badge": ""
  },
  {
    "id": "conjunto_trevo_140",
    "name": "Conjunto Trevo",
    "price": 140,
    "img": "joias catalogadas/conjunto trevo - 140$.jpeg",
    "category": "colares",
    "badge": ""
  },
  {
    "id": "bracelete_160",
    "name": "Bracelete",
    "price": 160,
    "img": "joias catalogadas/bracelete - 160.jpeg",
    "category": "pulseiras",
    "badge": ""
  },
  {
    "id": "bracelete_2_160",
    "name": "Bracelete 2",
    "price": 160,
    "img": "joias catalogadas/Bracelete 2 - 160$.jpeg",
    "category": "pulseiras",
    "badge": ""
  },
  {
    "id": "bracelete_prata_elinos_298",
    "name": "Bracelete Prata Elinos",
    "price": 298,
    "img": "joias catalogadas/bracelete pl Elinos - 298$.jpeg",
    "category": "pulseiras",
    "badge": ""
  }
];

/* --- TEMPLATE PARA RENDERIZAR CARTÃO DE PRODUTO --- */
function buildProductCard(product) {
  // Verificar se o item está nos favoritos (wishlist)
  const wl = typeof getWishlist === 'function' ? getWishlist() : [];
  const isFav = wl.includes(product.id);
  const heartIcon = isFav ? '♥' : '♡';
  const favClass = isFav ? 'active' : '';
  
  const badgeHtml = product.badge 
    ? `<span class="product-badge ${product.badge === 'Novo' ? 'new-badge' : ''}">${product.badge}</span>` 
    : '';
    
  return `
    <article class="product-card" data-id="${product.id}" onclick="openModal('${product.name.replace(/'/g, "\'")}', 'R$ ${product.price.toFixed(2).replace('.', ',')}')">
      <div class="product-thumb">
        <img src="${product.img}" alt="${product.name}" loading="lazy"/>
        ${badgeHtml}
        <button class="btn-wishlist ${favClass}" onclick="event.stopPropagation(); toggleWishlist('${product.id}')" aria-label="Favoritar">
          ${heartIcon}
        </button>
      </div>
      <div class="product-body">
        <h3 class="product-name">${product.name}</h3>
        <p class="product-price">R$ ${product.price.toFixed(2).replace('.', ',')}</p>
        <button class="btn-quero" onclick="event.stopPropagation(); openModal('${product.name.replace(/'/g, "\'")}', 'R$ ${product.price.toFixed(2).replace('.', ',')}')">Quero este</button>
      </div>
    </article>
  `;
}
