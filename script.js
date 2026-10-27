
const WHATSAPP_NUMBER = "5493513851538"; // REEMPLAZAR por el WhatsApp comercial real

const products = [
  {
    id: 1,
    name: "Bagués Brooklyn 50 ml",
    category: "Perfumes",
    price: 24399,
   description: "Inspirada en el estilo Creed Aventus, Brooklyn combina notas frutales y amaderadas para transmitir frescura, elegancia e intensidad. Una fragancia para hombres seguros, auténticos y con personalidad. Familia olfativa: Chipre. Notas: bergamota, manzana, limón, grosella negra, piña, pachulí, cedro, abedul y almizcle.",
tag: "DESTACADO",
image: "baguesbrooklyn.png"
  },
  {
    
  id: 2,
  name: "Torino Eau de Parfum 50 ml",
  category: "Perfumes",
  price: 24399,
  description: "Inspirada en Stronger With You, Torino combina una salida cítrica y especiada con un corazón aromático de lavanda y salvia. Su fondo de ámbar, cachemira, musgo y pachulí aporta calidez y carácter. Familia olfativa: Aromática-acuática. Notas de salida: pomelo, limón de Murcia y jengibre. Corazón: lavanda, salvia y lirio de agua. Fondo: ámbar, cachemira, musgo y pachulí.",
  tag: "OFERTA",
  image: "torino.png"
},
  
  {
    id: 3,
     name: "New York Masculino Eau de Parfum 50 ml",
     category: "Perfumes",
  price: 24399,
  description: "Inspirada en 212 Clásico Masculino, New York es una fragancia fresca, sensual y elegante, ideal para el hombre dinámico y moderno. Familia olfativa: Amaderada-floral. Notas de salida: lavanda, bergamota y geranio. Corazón: gardenia y jazmín. Fondo: sándalo y almizcle.",
  tag: "OFERTA",
  image: "newyork.png"
  },
  {
    id: 4,
  name: "Jeddah Eau de Parfum 50 ml",
  category: "Perfumes",
  price: 26559,
  description: "Inspirada en 9PM de Bagués, Jeddah es una fragancia oriental, dulce y especiada, ideal para la noche. Sus notas de manzana, canela, lavanda y bergamota se combinan con flor de azahar y muguete. El fondo de vainilla, haba tonka, ámbar y pachulí deja una estela intensa, cálida y envolvente.",
  tag: "OFERTA",
  image: "jeddah.png"
},
  {
    id: 5,
   name: "Al Hamra Eau de Parfum 50 ml",
   category: "Perfumes",
  price: 26559,
  description: "Inspirada en Angels' Share de Bagués, Al Hamra es una fragancia oriental cálida, dulce y especiada. La salida de coñac da paso a un corazón de canela, haba tonka, roble y hediona. Su fondo de vainilla, praliné, sándalo y almendras acarameladas crea una estela envolvente, elegante y cautivante.",
  tag: "OFERTA",
  image: "alhamra.png"
  },
  {
    id:6,
      name: "Granada Eau de Parfum 50ml",
    category: "Perfumes",
    price: 24399,
    description: "Fragancia oriental floral con notas de pitahaya, peonía rosa y frangipani, sobre un fondo cálido de vainilla y patchouli. Tipo La Bomba.",
    tag: "DESTACADO",
    image: "granada.png"
  },
  {
  
    id: 7,
        name: "Aromatizante Ambiental Higos del Oriente 250ml",
    category: "Hogar",
    price: 13399,
    description: "Una fragancia que transmite misterio y sensualidad. El dulzor del higo se fusiona con notas cálidas y orientales para crear espacios sofisticados, elegantes y exóticos.",
    tag: "",
    image: "aromatizantehigosoriente.png"
  },
  {
    id: 8,
    name: "Aromatizante Textil Valle de Algodón 200ml",
    category: "Hogar",
    price: 5599,
    description: "Una fragancia que deja tu ropa perfumada como recién lavada por mucho más tiempo. Su fórmula especial refresca y renueva el aroma de tus prendas entre lavados, brindando una sensación continua de limpieza y bienestar. Pulverizá sobre la ropa seca a una distancia de 30 cm. También podés usarlo en cortinas, acolchados o fundas. Evitá el contacto con superficies sensibles o telas que no puedan mojarse.",
    tag: "OFERTA",
    image: "vallealgodon.png"
  },
  {
    id: 9,
     name: "Oxford Eau de Parfum 50ml",
    category: "Perfumes",
    price: 24399.20,
    description: "Una fragancia masculina amaderada y aromática que redefine la elegancia. La frescura especiada del cardamomo y la salvia se combina con la intensidad del vetiver y la elegancia del narciso francés. Su fondo de cedro, palo santo y vainilla aporta una estela cálida, sofisticada y con carácter.",
    tag: "OFERTA",
    image: "oxford.png"
  },
  {
    id: 10,
    name: "Amsterdam Femenino Eau de Parfum 50ml",
    category: "Perfumes",
    price: 24399.20,
    description: "Una fragancia oriental provocadora, sensual y adictiva. Combina la dulzura de la vainilla y las palomitas de maíz con la frescura del nerolí y el melocotón, sobre un fondo envolvente de almizcle blanco, ámbar y coco. Ideal para mujeres que buscan una esencia intensa, sofisticada y cautivante.",
    tag: "OFERTA",
    image: "amsterdam.png"
  },
  {
    id: 11,
    name: "Prades Eau de Parfum 50ml",
    category: "Perfumes",
    price: 24399.20,
    description: "Una fragancia oriental-floral que celebra la feminidad en todas sus formas. La frescura de la mandarina y la pera se combina con un delicado bouquet de gardenia, jazmín y flor de azahar. Su fondo de cedro, haba tonka, vainilla y maltol aporta calidez y una estela suave, profunda y memorable.",
    tag: "OFERTA",
    image: "prades.png"
  },
  {
    id: 12,
    name: "Ginebra Eau de Parfum 50ml",
    category: "Perfumes",
    price: 24399.20,
    description: "Una fragancia amaderada, ambarada y gourmand que combina intensidad, sofisticación y sensualidad. Sus notas de flor de naranjo y azafrán dan paso a un corazón de jazmín, cedro, anís y cassis. El fondo de ámbar gris, musk, caramelo y notas amaderadas deja una estela cálida, elegante y cautivante. Ideal para mujeres que buscan destacar con una esencia magnética.",
    tag: "OFERTA",
    image: "ginebra.png"
  },
  {
    id: 13,
    name: "Serum Facial con Hymagic e Hialubot",
    category: "Cosmética",
    price: 17999,
    description: "Hidratá profundamente tu piel y ayudá a combatir los signos del envejecimiento. Su fórmula con Hymagic 4D, Hialubot, aminoácidos y extracto de Camellia Sinensis refuerza la barrera cutánea, retiene la humedad y mejora la elasticidad, dejando el rostro suave, nutrido y protegido. Ideal para todo tipo de piel.",
    tag: "OFERTA",
    image: "serum2.png"
  },
  {
    id: 14,
    name: "Serum Facial Patagonia 17ml",
    category: "Cosmética",
    price: 24899,
    description: "Biotecnología al servicio de tu piel. Con Hydraskin™, rosa mosqueta y arándanos para ayudar a hidratar la piel, combatir los signos de la edad y protegerla del daño ambiental. Aplicá unas gotas sobre el rostro limpio y seco antes de la crema facial. Distribuí con suaves toques hasta su total absorción. Usar por la mañana y/o por la noche.",
    tag: "OFERTA",
    image: "serumfacial.png"
  },
  {
    id: 15,
    name: "Máscara de Pestañas Waterproof",
    category: "Cosmética",
    price: 23299,
    description: "Realzá tu mirada con una máscara de pestañas de larga duración, diseñada para resistir el agua y la humedad durante toda la jornada sin perder intensidad. Define las pestañas y aporta una mirada más expresiva.",
    tag: "OFERTA",
    image: "mascarapestañas.png"
  },
  {
    id: 16,
    name: "Paleta de Rubor e Iluminador",
    category: "Cosmética",
    price: 29299,
    description: "Aporta frescura y un toque natural de color para lograr un aspecto saludable y radiante. Su aplicación uniforme ofrece un acabado natural y luminoso, ideal para realzar las facciones y conseguir un efecto buena cara.",
    tag: "DESTACADO",
    image: "paleta.png"
  },
  {
    id: 17,
     name: "Crema de Enebro 60g",
    category: "Cuidado personal",
    price: 12899.40,
    description: "Alivio corporal con activos naturales. Su fórmula a base de enebro, harpagofito, árnica y sauce ayuda a relajar los músculos, aliviar tensiones y mitigar calambres. Ideal para después del ejercicio o en momentos de sobrecarga física.",
    tag: "OFERTA",
    image: "cremaenebro.png"
  },
  {
       name: "Espuma Facial de Limpieza 150ml",
    category: "Cuidado personal",
    price: 9649,
    description: "Espuma facial de limpieza profunda que combina la hidratación avanzada de Hydraskin con las propiedades calmantes del Aloe Vera. Elimina impurezas y restos de maquillaje, hidrata y suaviza la piel. Su textura ligera facilita la aplicación y el enjuague. Apta para piel seca o sensible.",
    tag: "OFERTA",
    image: "espumafacial.png"
  },
  {
    id: 19,
   name: "Crema Facial Humectante 60ml",
    category: "Cuidado personal",
    price: 11199,
    description: "Nutre, humecta y mejora la elasticidad del rostro con argán, oliva y almendras. Ideal para piel seca. Aplicá sobre el rostro limpio y seco, por la mañana y/o por la noche, masajeando con movimientos ascendentes hasta su total absorción.",
    tag: "OFERTA",
    image: "cremafacialhumect.png"
  },
  {
    id: 20,
    name: "Blend Corporal AntiStress 10ml",
    category: "Cuidado personal",
    price: 19799,
    description: "Óleo corporal elaborado con una combinación de aceites esenciales puros que ayuda a relajar cuerpo y mente, disminuyendo el impacto del estrés cotidiano. Apto vegano. Aplicá unas gotas sobre la piel limpia, preferentemente en la nuca, el cuello o las muñecas. Distribuí suavemente hasta su total absorción. Uso externo exclusivamente.",
    tag: "OFERTA",
    image: "blendanti.png"
  },
  {
    id: 21,
    name: "Aromatizante Textil AMR Party 200ml",
    category: "Hogar",
    price: 7599,
    description: "Notas florales y frutales se fusionan en una fragancia irresistible que acompaña tus prendas en los momentos más especiales. Ideal para perfumar la ropa antes de una salida o dejar una estela encantadora en el guardarropa. Rocíá directamente sobre prendas secas a una distancia mínima de 30 cm. También podés usarlo en sábanas, toallas y mantitas. Evitá aplicarlo sobre tejidos delicados o prendas que puedan mancharse. No aplicar sobre prendas infantiles sin verificar las indicaciones del producto.",
    tag: "OFERTA",
    image: "amrparty.png"
  },
  {
    id: 22,
      name: "Aromatizante Textil AMR Men 200ml",
    category: "Hogar",
    price: 7599,
    description: "Una fragancia diseñada especialmente para quienes cuidan cada detalle. Su aroma masculino y elegante perfuma la ropa con personalidad, dejando una estela sutil y duradera. Ideal para realzar tu estilo todos los días. Aplicá sobre la ropa limpia y seca a una distancia de 30 cm. También puede usarse en interiores de placard, sábanas o toallas. Evitá telas delicadas o que puedan mancharse con facilidad.",
    tag: "OFERTA",
    image: "amrmen.png"
  },
  {
    id: 23,
    name: "Aromatizante Ambiental Sahara 250ml",
    category: "Hogar",
    price: 7999,
    description: "Un suspiro cálido y femenino. Las notas de orquídea y mandarina se combinan en una fragancia luminosa, delicada y sensual para tus espacios. Ideal para aromatizar habitaciones, espacios comunes o textiles decorativos. Mantener una distancia mínima de 30 cm de telas, superficies delicadas o alimentos.",
    tag: "OFERTA",
    image: "aromasahara.png"
  },
  {
    id: 24,
    name: "Crema de Manos Frutos Rojos 60g",
    category: "Cuidado personal",
    price: 10999,
    description: "Poder antioxidante e hidratación profunda para tus manos. Su fórmula con extractos de frutos rojos ayuda a mantener la piel suave e hidratada. Aplicá una pequeña cantidad sobre las manos limpias y secas, masajeando hasta su total absorción. Reaplicá las veces que sea necesario.",
    tag: "OFERTA",
    image: "frutosrojosmanos.png"
  }
];



let cart = [];
let selectedCategory = "Todos";

const productGrid = document.getElementById("productGrid");
const searchInput = document.getElementById("searchInput");
const emptyState = document.getElementById("emptyState");
const cartDrawer = document.getElementById("cartDrawer");
const overlay = document.getElementById("overlay");
const cartItems = document.getElementById("cartItems");
const cartEmpty = document.getElementById("cartEmpty");
const cartFooter = document.getElementById("cartFooter");

const money = value =>
  new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0
  }).format(value);

function renderProducts() {
  const query = searchInput.value.trim().toLocaleLowerCase("es");

  const filtered = products.filter(product => {
    const matchesCategory =
      selectedCategory === "Todos" ||
      product.category === selectedCategory;

    const searchable = [
      product.name,
      product.category,
      product.description
    ].join(" ").toLocaleLowerCase("es");

    return matchesCategory && searchable.includes(query);
  });

  productGrid.innerHTML = filtered.map(product => `
    <article class="product-card">
      <div class="product-image-wrap">
        <img
          class="product-image"
          src="${product.image}"
          alt="${product.name}"
          loading="lazy"
        >
        ${product.tag ? `<span class="product-tag">${product.tag}</span>` : ""}
        <button class="add-button" data-add="${product.id}">
          + AGREGAR A MI BOLSA
        </button>
      </div>
      <div class="product-info">
        <p class="product-category">${product.category}</p>
        <h3 class="product-name">${product.name}</h3>
        <p class="product-description">${product.description}</p>
        <p class="product-price">${money(product.price)}</p>
      </div>
    </article>
  `).join("");

  emptyState.hidden = filtered.length > 0;
}

function addToCart(id) {
  const existing = cart.find(item => item.id === id);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ id, quantity: 1 });
  }

  renderCart();
  openCart();
}

function changeQuantity(id, change) {
  const item = cart.find(item => item.id === id);
  if (!item) return;

  item.quantity += change;

  if (item.quantity <= 0) {
    cart = cart.filter(item => item.id !== id);
  }

  renderCart();
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  renderCart();
}

function renderCart() {
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  const total = cart.reduce((sum, item) => {
    const product = products.find(product => product.id === item.id);
    return sum + (product ? product.price * item.quantity : 0);
  }, 0);

  document.getElementById("cartCount").textContent = count;
  document.getElementById("drawerCount").textContent = `(${count})`;
  document.getElementById("cartTotal").textContent = money(total);

  cartEmpty.hidden = count > 0;
  cartItems.hidden = count === 0;
  cartFooter.hidden = count === 0;

  cartItems.innerHTML = cart.map(item => {
    const product = products.find(product => product.id === item.id);
    if (!product) return "";

    return `
      <article class="cart-item">
        <img src="${product.image}" alt="${product.name}">
        <div>
          <h3>${product.name}</h3>
          <p>${money(product.price * item.quantity)}</p>
          <div class="quantity-controls">
            <button data-quantity="${product.id}" data-change="-1" aria-label="Quitar uno">−</button>
            <span>${item.quantity}</span>
            <button data-quantity="${product.id}" data-change="1" aria-label="Agregar uno">+</button>
          </div>
        </div>
        <button class="remove-item" data-remove="${product.id}" aria-label="Eliminar producto">×</button>
      </article>
    `;
  }).join("");
}

function openCart() {
  cartDrawer.classList.add("open");
  overlay.classList.add("visible");
  document.body.classList.add("cart-open");
  cartDrawer.setAttribute("aria-hidden", "false");
}

function closeCart() {
  cartDrawer.classList.remove("open");
  overlay.classList.remove("visible");
  document.body.classList.remove("cart-open");
  cartDrawer.setAttribute("aria-hidden", "true");
}

function sendWhatsAppOrder() {
  if (cart.length === 0) return;

  if (!/^\d{10,15}$/.test(WHATSAPP_NUMBER)) {
    alert("Configurá el número de WhatsApp comercial en script.js antes de enviar pedidos.");
    return;
  }

  const lines = cart.map(item => {
    const product = products.find(product => product.id === item.id);
    return `• ${product.name} x${item.quantity} — ${money(product.price * item.quantity)}`;
  });

  const total = cart.reduce((sum, item) => {
    const product = products.find(product => product.id === item.id);
    return sum + product.price * item.quantity;
  }, 0);

  const message = [
    "¡Hola! Quiero hacer un pedido en NØVA.",
    "",
    ...lines,
    "",
    `Subtotal estimado: ${money(total)}`,
    "",
    "¿Me confirman disponibilidad y costo de envío?"
  ].join("\n");

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

productGrid.addEventListener("click", event => {
  const button = event.target.closest("[data-add]");
  if (button) addToCart(Number(button.dataset.add));
});

cartItems.addEventListener("click", event => {
  const quantityButton = event.target.closest("[data-quantity]");
  const removeButton = event.target.closest("[data-remove]");

  if (quantityButton) {
    changeQuantity(
      Number(quantityButton.dataset.quantity),
      Number(quantityButton.dataset.change)
    );
  }

  if (removeButton) {
    removeFromCart(Number(removeButton.dataset.remove));
  }
});

document.getElementById("categories").addEventListener("click", event => {
  const button = event.target.closest("[data-category]");
  if (!button) return;

  selectedCategory = button.dataset.category;

  document.querySelectorAll(".category-chip").forEach(chip => {
    chip.classList.toggle("active", chip === button);
  });

  renderProducts();
});

document.querySelectorAll("[data-category-link]").forEach(link => {
  link.addEventListener("click", () => {
    selectedCategory = link.dataset.categoryLink;

    document.querySelectorAll(".category-chip").forEach(chip => {
      chip.classList.toggle("active", chip.dataset.category === selectedCategory);
    });

    renderProducts();
    document.getElementById("nav").classList.remove("nav-open");
  });
});

searchInput.addEventListener("input", renderProducts);

document.getElementById("openCart").addEventListener("click", openCart);
document.getElementById("closeCart").addEventListener("click", closeCart);
document.getElementById("continueShopping").addEventListener("click", closeCart);
document.getElementById("checkout").addEventListener("click", sendWhatsAppOrder);
overlay.addEventListener("click", closeCart);

document.getElementById("menuToggle").addEventListener("click", () => {
  document.getElementById("nav").classList.toggle("nav-open");
});

document.getElementById("year").textContent = new Date().getFullYear();

renderProducts();
renderCart();
