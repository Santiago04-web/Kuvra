/**
 * KUVRA CLOTHING - SCRIPT PRINCIPAL
 * Funcionalidades interactivas: Catálogo, Modal de Producto, Carrito de Compras,
 * Integración directa con WhatsApp (+57 319 899 5822) y validación de formulario de contacto.
 */

// BASE DE DATOS DE PRODUCTOS EXCLUSIVOS KUVRA
const KUVRA_PRODUCTS = [
  {
    id: 'kuvra-01',
    name: 'Camiseta Heavyweight Oversize Negro Ónix',
    category: 'camisetas',
    categoryName: 'Camisetas Premium',
    price: 129000,
    badge: 'Heavyweight 260g',
    image: 'assets/images/prod-1-tshirt-black.jpg',
    description: 'Camiseta premium de silueta boxy oversize confeccionada en algodón peinado de 260 GSM. Cuello acanalado de 3 cm reforzado, textura densa con caída impecable y teñido reactivo que mantiene el tono negro profundo lavado tras lavado.',
    features: [
      '100% Algodón peinado de alto gramaje (260 g/m²)',
      'Cuello reforzado indeformable de alta densidad',
      'Corte boxy contemporáneo con hombro caído',
      'Teñido con fijación de color de larga duración',
      'Confección 100% nacional en Cali, Colombia'
    ],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 'kuvra-02',
    name: 'Camiseta Minimalist Clean Cut Blanco Titanio',
    category: 'camisetas',
    categoryName: 'Camisetas Premium',
    price: 129000,
    badge: 'Algodón Supima',
    image: 'assets/images/prod-2-tshirt-white.jpg',
    description: 'Pieza angular del armario minimalista. Fabricada con fibras de algodón prémium de fibra larga, ofrece una suavidad excepcional, cero transparencias y un blanco puro impoluto diseñado para lucir sofisticado tanto de día como de noche.',
    features: [
      'Algodón de fibra larga de tacto ultrasuave (240 g/m²)',
      'Estructura de tejido tupido sin transparencias',
      'Costuras planas de precisión para máxima comodidad',
      'Pre-encogido para conservar sus medidas exactas',
      'Hecho en Colombia bajo estándares de calidad Kuvra'
    ],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 'kuvra-03',
    name: 'Hoodie French Terry Grafito Signature',
    category: 'hoodies',
    categoryName: 'Buzos & Hoodies',
    price: 249000,
    badge: 'French Terry 400g',
    image: 'assets/images/prod-3-hoodie-graphite.jpg',
    description: 'Buzo con capota de alto gramaje confeccionado en French Terry de 400 GSM sin felpar en tono gris grafito. Capota doblemente forrada que se sostiene erguida, bolsillo frontal tipo canguro estructurado y puños elásticos ajustados.',
    features: [
      'French Terry 100% algodón de 400 gramos',
      'Capota doble capa estructurada de postura firme',
      'Bolsillo canguro con remates reforzados en costuras',
      'Puños y pretina de punto acanalado grueso',
      'Garantía directa de costura y confección'
    ],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 'kuvra-04',
    name: 'Hoodie Boxy Relaxed Deep Black',
    category: 'hoodies',
    categoryName: 'Buzos & Hoodies',
    price: 249000,
    badge: 'Edición Limitada',
    image: 'assets/images/prod-4-hoodie-black.jpg',
    description: 'Sudadera minimalista de silueta relajada en negro puro. Diseñada sin cordones para una estética ultra limpia y moderna. Ideal para climas frescos y uso diario en la ciudad con un balance térmico óptimo.',
    features: [
      'Algodón fleece perchado de máxima suavidad interior',
      'Estética clean sin cordones para look minimalista',
      'Hombros caídos con caída estructurada contemporánea',
      'Resistente al pilling y al desgaste continuo',
      'Fabricado con orgullo en Cali, Valle del Cauca'
    ],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 'kuvra-05',
    name: 'Chaqueta Bomber Técnica Shell Negro Mate',
    category: 'chaquetas',
    categoryName: 'Chaquetas',
    price: 320000,
    badge: 'Impermeable Ligero',
    image: 'assets/images/prod-5-jacket-bomber.jpg',
    description: 'Chaqueta técnica bomber inspirada en el diseño militar y urbano contemporáneo. Exterior en tejido de microfibra mate con acabado repelente al agua, forro interior satinado negro, cierre frontal metálico reforzado y bolsillos con broche.',
    features: [
      'Tejido exterior técnico con tratamiento repelente al agua',
      'Cierre metálico YKK reforzado de alta durabilidad',
      'Forro térmico transpirable y bolsillo interior de seguridad',
      'Cuello y pretina acanalada de compresión suave',
      'Diseño versátil apto para clima templado y frío'
    ],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 'kuvra-06',
    name: 'Chaqueta Denim Oversize Negro Desgastado',
    category: 'chaquetas',
    categoryName: 'Chaquetas',
    price: 289000,
    badge: 'Denim 14oz',
    image: 'assets/images/prod-6-jacket-denim.jpg',
    description: 'Chaqueta en dril de mezclilla rígida de 14 oz sometida a lavado artesanal para lograr un tono negro desgastado con matices carbón únicos. Botones metálicos de presión con acabado plateado envejecido.',
    features: [
      'Denim 100% algodón de 14 onzas de máxima durabilidad',
      'Proceso de lavado industrial que suaviza el tejido sin perder fuerza',
      'Botones y remaches de aleación inoxidable',
      'Cuatro bolsillos exteriores y dos bolsillos interiores profundos',
      'Corte amplio que permite llevar buzos debajo'
    ],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 'kuvra-07',
    name: 'Pantalón Cargo Técnico Minimalista Grafito',
    category: 'pantalones',
    categoryName: 'Pantalones',
    price: 195000,
    badge: 'Ripstop Elástico',
    image: 'assets/images/prod-7-cargo-pants.jpg',
    description: 'Pantalón cargo de corte ergonómico confeccionado en tela ripstop antidesgarro con 3% de elastano para máxima libertad de movimiento. Bolsillos de perfil bajo con cierre magnético y bota recta graduable.',
    features: [
      'Tejido Ripstop antidesgarro de alta resistencia',
      'Bolsillos laterales discretos con fuelle interno',
      'Cintura con elástico posterior y pasadores de cinturón reforzados',
      'Ajuste en tobillo mediante cordón oculto',
      'Ideal para uso diario dinámico en ciudad'
    ],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 'kuvra-08',
    name: 'Pantalón Jogger Tailored Heavy Black',
    category: 'pantalones',
    categoryName: 'Pantalones',
    price: 175000,
    badge: 'Esencial Premium',
    image: 'assets/images/prod-8-jogger-black.jpg',
    description: 'La fusión perfecta entre comodidad de sudadera y corte sastre moderno. Confeccionado en algodón de punto pesado con pinzas frontales que estructuran la silueta sin apretar, bolsillos ribeteados y cordón interno.',
    features: [
      'Punto de algodón denso de 320 g/m² con caída elegante',
      'Pinza frontal que estiliza y eleva la prenda casual',
      'Bolsillos laterales profundos con forro de algodón',
      'Pretina con cordón interno ajustable con terminales metálicos',
      'Diseñado para lucir impecable con tenis urbanos'
    ],
    sizes: ['S', 'M', 'L', 'XL']
  }
];

// NÚMERO Y DATOS DE LA EMPRESA (IDÉNTICOS AL REGISTRO MERCANTIL DE CALI)
const KUVRA_CONFIG = {
  phone: '+57 319 899 5822',
  whatsappRaw: '573198995822',
  email: 'soporte@kuvra.lat',
  nit: '805019172-2',
  address: 'CL 14 NORTE # 43 256 CS 56, Cali, Valle del Cauca, Colombia',
  companyName: 'Kuvra',
  website: 'https://kuvra.lat'
};

// FORMATO DE MONEDA COLOMBIANA (COP)
function formatCOP(amount) {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount);
}

// ESTADO GLOBAL DEL CARRITO
let cart = JSON.parse(localStorage.getItem('kuvra_cart')) || [];

function saveCart() {
  localStorage.setItem('kuvra_cart', JSON.stringify(cart));
  updateCartUI();
}

function updateCartUI() {
  const countBadge = document.querySelectorAll('.cart-count');
  const itemsContainer = document.getElementById('cartItemsWrapper');
  const totalDisplay = document.getElementById('cartTotalDisplay');
  const checkoutBtn = document.getElementById('cartCheckoutBtn');

  const totalCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  countBadge.forEach(b => b.textContent = totalCount);

  if (!itemsContainer) return;

  if (cart.length === 0) {
    itemsContainer.innerHTML = `
      <div class="cart-empty-message">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="margin: 0 auto 1rem; color: #71717a;">
          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <path d="M16 10a4 4 0 0 1-8 0"></path>
        </svg>
        <p style="font-weight: 600; color: #ffffff;">Tu bolsa de compras está vacía</p>
        <p style="font-size: 0.85rem; color: #a1a1aa; margin-top: 0.25rem;">Explora nuestras prendas y añade tus favoritas.</p>
      </div>
    `;
    if (totalDisplay) totalDisplay.textContent = '$0 COP';
    if (checkoutBtn) checkoutBtn.disabled = true;
    return;
  }

  if (checkoutBtn) checkoutBtn.disabled = false;

  let totalCOP = 0;
  itemsContainer.innerHTML = cart.map((item, index) => {
    const itemSubtotal = item.price * item.quantity;
    totalCOP += itemSubtotal;
    return `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}" class="cart-item-img">
        <div class="cart-item-details">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-meta">Talla: <strong>${item.size}</strong> &bull; Cantidad: <strong>${item.quantity}</strong></div>
          <div class="cart-item-price">${formatCOP(itemSubtotal)} COP</div>
        </div>
        <button class="cart-item-remove" onclick="removeCartItem(${index})" title="Eliminar">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
    `;
  }).join('');

  if (totalDisplay) totalDisplay.textContent = formatCOP(totalCOP) + ' COP';
}

function addToCart(productId, size, quantity = 1) {
  const product = KUVRA_PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const existingIndex = cart.findIndex(i => i.id === productId && i.size === size);
  if (existingIndex > -1) {
    cart[existingIndex].quantity += quantity;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      size: size,
      quantity: quantity,
      image: product.image
    });
  }

  saveCart();
  openCart();
}

function removeCartItem(index) {
  cart.splice(index, 1);
  saveCart();
}

function openCart() {
  const drawer = document.getElementById('cartDrawer');
  const overlay = document.getElementById('menuOverlay');
  if (drawer && overlay) {
    drawer.classList.add('open');
    overlay.classList.add('open');
  }
}

function closeCart() {
  const drawer = document.getElementById('cartDrawer');
  const overlay = document.getElementById('menuOverlay');
  if (drawer && overlay) {
    drawer.classList.remove('open');
    overlay.classList.remove('open');
  }
}

// PEDIDO DE CARRITO POR WHATSAPP (PAGO CONTRA ENTREGA O TRANSFERENCIA)
function checkoutCartViaWhatsApp() {
  if (cart.length === 0) return;

  let message = `*PEDIDO KUVRA TIENDA OFICIAL*\n`;
  message += `Hola, deseo concretar la compra de los siguientes artículos en Kuvra:\n\n`;

  let totalCOP = 0;
  cart.forEach((item, i) => {
    const itemSub = item.price * item.quantity;
    totalCOP += itemSub;
    message += `${i + 1}. *${item.name}*\n   - Talla: ${item.size}\n   - Cantidad: ${item.quantity}\n   - Subtotal: ${formatCOP(itemSub)} COP\n\n`;
  });

  message += `*TOTAL A PAGAR: ${formatCOP(totalCOP)} COP*\n\n`;
  message += `*DATOS PARA EL ENVÍO:*\n`;
  message += `- Nombre completo:\n`;
  message += `- Cédula / NIT:\n`;
  message += `- Dirección exacta de entrega:\n`;
  message += `- Ciudad y Departamento:\n`;
  message += `- Método de pago deseado: [Pago Contra Entrega / Transferencia Bancaria]\n\n`;
  message += `Quedo atento a la confirmación de mi despacho. ¡Muchas gracias!`;

  const url = `https://wa.me/${KUVRA_CONFIG.whatsappRaw}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

// COMPRA DIRECTA DE 1 PRODUCTO POR WHATSAPP
function orderSingleProductViaWhatsApp(productId, size = 'M') {
  const product = KUVRA_PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  let message = `*CONSULTA / PEDIDO DIRECTO KUVRA*\n`;
  message += `Hola equipo de Kuvra, deseo adquirir esta prenda:\n\n`;
  message += `*Prenda:* ${product.name}\n`;
  message += `*Precio:* ${formatCOP(product.price)} COP\n`;
  message += `*Talla seleccionada:* ${size}\n\n`;
  message += `¿Tienen disponibilidad para envío inmediato con *Pago Contra Entrega* a mi ciudad?\n`;
  message += `- Mi Nombre:\n`;
  message += `- Mi Ciudad:\n\n`;
  message += `Muchas gracias.`;

  const url = `https://wa.me/${KUVRA_CONFIG.whatsappRaw}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

// RENDERIZADO DEL CATÁLOGO
function renderProducts(filter = 'all', containerId = 'productsGrid') {
  const container = document.getElementById(containerId);
  if (!container) return;

  const filtered = filter === 'all' 
    ? KUVRA_PRODUCTS 
    : KUVRA_PRODUCTS.filter(p => p.category === filter);

  container.innerHTML = filtered.map(prod => `
    <article class="product-card" data-id="${prod.id}">
      <div class="product-media">
        <span class="badge product-badge-tag">${prod.badge}</span>
        <img src="${prod.image}" alt="${prod.name}" loading="lazy">
        <button class="btn btn-secondary btn-sm product-quick-view-btn" onclick="openProductModal('${prod.id}')">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>
          Vista Rápida
        </button>
      </div>
      <div class="product-info">
        <span class="product-category">${prod.categoryName}</span>
        <h3 class="product-title">${prod.name}</h3>
        <p class="product-desc">${prod.description}</p>
        <div class="product-price-row">
          <span class="product-price">${formatCOP(prod.price)}</span>
          <span class="product-price-currency">COP</span>
        </div>
        <div class="product-size-select-group">
          <span class="size-label">Selecciona tu talla:</span>
          <div class="size-options" id="sizes-${prod.id}">
            ${prod.sizes.map((s, idx) => `
              <button type="button" class="size-btn ${idx === 1 ? 'active' : ''}" onclick="selectCardSize('${prod.id}', '${s}', this)">
                ${s}
              </button>
            `).join('')}
          </div>
        </div>
        <div class="product-actions">
          <button class="btn btn-whatsapp btn-sm" onclick="handleCardWhatsAppBuy('${prod.id}')">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
            </svg>
            Pedir por WhatsApp
          </button>
          <button class="btn btn-secondary btn-sm" onclick="handleCardAddToCart('${prod.id}')">
            + Añadir a la Bolsa
          </button>
        </div>
      </div>
    </article>
  `).join('');
}

// MANEJO DE TALLAS EN CARD
const cardSelectedSizes = {};

function selectCardSize(productId, size, btnEl) {
  cardSelectedSizes[productId] = size;
  const parent = btnEl.parentElement;
  parent.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
  btnEl.classList.add('active');
}

function handleCardWhatsAppBuy(productId) {
  const size = cardSelectedSizes[productId] || 'M';
  orderSingleProductViaWhatsApp(productId, size);
}

function handleCardAddToCart(productId) {
  const size = cardSelectedSizes[productId] || 'M';
  addToCart(productId, size, 1);
}

// MODAL DE DETALLE DE PRODUCTO
let modalSelectedSize = 'M';

function openProductModal(productId) {
  const product = KUVRA_PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  modalSelectedSize = 'M';
  const modal = document.getElementById('productModal');
  const content = document.getElementById('productModalContent');
  if (!modal || !content) return;

  content.innerHTML = `
    <div class="modal-media">
      <img src="${product.image}" alt="${product.name}">
    </div>
    <div class="modal-body">
      <span class="badge" style="width: fit-content; margin-bottom: 0.5rem;">${product.badge}</span>
      <span class="product-category">${product.categoryName}</span>
      <h2 style="font-size: 1.5rem; color: #fff; margin-bottom: 0.5rem;">${product.name}</h2>
      <div class="product-price-row" style="margin-bottom: 1rem;">
        <span class="product-price" style="font-size: 1.5rem;">${formatCOP(product.price)}</span>
        <span class="product-price-currency">COP</span>
      </div>
      <p style="color: #a1a1aa; font-size: 0.9rem; line-height: 1.6; margin-bottom: 1.25rem;">${product.description}</p>
      
      <div style="margin-bottom: 1rem;">
        <strong style="font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.05em; color: #d4d4d8; display: block; margin-bottom: 0.5rem;">Especificaciones Técnicas:</strong>
        <ul class="modal-specs-list">
          ${product.features.map(f => `
            <li>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>${f}</span>
            </li>
          `).join('')}
        </ul>
      </div>

      <div style="margin-bottom: 1.5rem;">
        <span class="size-label">Selecciona tu talla:</span>
        <div class="size-options">
          ${product.sizes.map((s, idx) => `
            <button type="button" class="size-btn ${s === modalSelectedSize ? 'active' : ''}" onclick="selectModalSize('${s}', this)">
              ${s}
            </button>
          `).join('')}
        </div>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; margin-top: auto;">
        <button class="btn btn-whatsapp" onclick="orderSingleProductViaWhatsApp('${product.id}', modalSelectedSize)">
          Pedir por WhatsApp
        </button>
        <button class="btn btn-primary" onclick="addToCart('${product.id}', modalSelectedSize, 1); closeProductModal();">
          Añadir a la Bolsa
        </button>
      </div>
    </div>
  `;

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function selectModalSize(size, btnEl) {
  modalSelectedSize = size;
  const parent = btnEl.parentElement;
  parent.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
  btnEl.classList.add('active');
}

function closeProductModal() {
  const modal = document.getElementById('productModal');
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
}

// INICIALIZACIÓN DE EVENTOS AL CARGAR EL DOM
document.addEventListener('DOMContentLoaded', () => {
  // Inicializar productos si existe el contenedor
  renderProducts('all');

  // Filtros de categoría
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-filter') || 'all';
      renderProducts(cat);
    });
  });

  // Carrito drawer toggles
  const cartToggleBtns = document.querySelectorAll('.cart-toggle-btn');
  cartToggleBtns.forEach(b => b.addEventListener('click', openCart));

  const cartCloseBtn = document.getElementById('cartCloseBtn');
  if (cartCloseBtn) cartCloseBtn.addEventListener('click', closeCart);

  const cartCheckoutBtn = document.getElementById('cartCheckoutBtn');
  if (cartCheckoutBtn) cartCheckoutBtn.addEventListener('click', checkoutCartViaWhatsApp);

  // Menú móvil
  const mobileToggle = document.getElementById('mobileMenuToggle');
  const mobileNav = document.getElementById('mobileNav');
  const menuOverlay = document.getElementById('menuOverlay');
  const mobileNavClose = document.getElementById('mobileNavClose');

  function openMobileMenu() {
    if (mobileNav && menuOverlay) {
      mobileNav.classList.add('open');
      menuOverlay.classList.add('open');
    }
  }

  function closeMobileMenu() {
    if (mobileNav && menuOverlay) {
      mobileNav.classList.remove('open');
      menuOverlay.classList.remove('open');
    }
  }

  if (mobileToggle) mobileToggle.addEventListener('click', openMobileMenu);
  if (mobileNavClose) mobileNavClose.addEventListener('click', closeMobileMenu);
  if (menuOverlay) {
    menuOverlay.addEventListener('click', () => {
      closeMobileMenu();
      closeCart();
    });
  }

  // Cerrar modal con overlay o botón
  const modalOverlay = document.getElementById('productModal');
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeProductModal();
    });
  }

  // Formulario de contacto funcional
  const contactForm = document.getElementById('kuvraContactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const feedback = document.getElementById('formFeedback');
      const submitBtn = contactForm.querySelector('button[type="submit"]');

      const name = document.getElementById('contactName')?.value.trim();
      const email = document.getElementById('contactEmail')?.value.trim();
      const phone = document.getElementById('contactPhone')?.value.trim();
      const message = document.getElementById('contactMessage')?.value.trim();

      if (!name || !email || !message) {
        if (feedback) {
          feedback.className = 'form-feedback error';
          feedback.textContent = 'Por favor completa los campos obligatorios (Nombre, Correo y Mensaje).';
        }
        return;
      }

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = 'Enviando mensaje...';
      }

      // Simulación de envío exitoso profesional
      setTimeout(() => {
        if (feedback) {
          feedback.className = 'form-feedback success';
          feedback.innerHTML = `
            <strong>¡Mensaje recibido con éxito!</strong><br>
            Apreciado/a ${name}, el equipo de atención al cliente de <strong>Kuvra</strong> ha registrado tu consulta. 
            Te responderemos a la mayor brevedad a través de <strong>${email}</strong> o vía telefónica. 
            También puedes contactarnos de inmediato por WhatsApp al <a href="https://wa.me/${KUVRA_CONFIG.whatsappRaw}" target="_blank" style="color: #4ade80; text-decoration: underline;">${KUVRA_CONFIG.phone}</a>.
          `;
        }
        contactForm.reset();
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = 'Enviar Mensaje';
        }
      }, 700);
    });
  }

  // Actualizar UI del carrito al inicio
  updateCartUI();
});
