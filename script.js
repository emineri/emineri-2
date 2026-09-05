/* ═══════════════════════════════════════════════════════════════
   EMINERI Distribution & Supply Company LLC
   Definitive Script — Bilingual System & Interactivity
   ═══════════════════════════════════════════════════════════════ */

if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}
window.scrollTo(0, 0);

const translations = {
  en: {
    /* Page Metadata */
    pageTitle: "EMINERI | Distribution & Supply Company",
    metaDesc:
      "EMINERI purchases consumer products from established brands, manufacturers, and distributors for resale through its sales channels in the U.S. market.",

    /* Navigation */
    navHome: "Home",
    navAbout: "About Us",
    navServices: "What We Do",
    navCategories: "Categories",
    navSuppliers: "Suppliers",
    navContact: "Contact",
    navCta: "Let's Connect",

    /* 1. Hero */
    heroTitle: "Reliable Products.<br />Long-Term Business<br />Relationships.",
    heroText:
      "EMINERI purchases consumer products from established brands, manufacturers, and distributors for resale through its sales channels in the U.S. market.",
    heroBtn: "Become a Supplier",
    heroImgAlt: "Professional evaluation of consumer products for commercial purchases.",

    /* 2. About Us */
    aboutKicker: "ABOUT US",
    aboutTitle: "A U.S. Company Focused on Long-Term Business Relationships",
    aboutOne:
      "EMINERI Distribution & Supply Company LLC is a Texas-based company engaged in the purchasing and resale of consumer products. We build commercial relationships with established brands, manufacturers, and distributors to offer authentic and reliable products through our sales channels in the U.S. market.",
    aboutTwo:
      "We evaluate each opportunity based on product authenticity, commercial documentation, availability, purchasing terms, and the potential to maintain a recurring supply relationship.",
    aboutImgAlt: "Professionals evaluating products during a business conversation.",

    /* 3. What We Do */
    wwdTitle: "What We Do",
    wwdLead:
      "We evaluate products, purchasing opportunities, and supply relationships for the U.S. market.",
    wwdOneTitle: "Product Identification",
    wwdOneText:
      "We evaluate products and categories with the potential to be incorporated into our sales channels.",
    wwdTwoTitle: "Commercial Purchasing",
    wwdTwoText:
      "We purchase consumer products for resale in the U.S. market based on availability and agreed commercial terms.",
    wwdThreeTitle: "Supplier Management",
    wwdThreeText:
      "We evaluate authenticity, documentation, availability, pricing, and supply continuity before establishing a commercial relationship.",
    wwdFourTitle: "Recurring Purchases",
    wwdFourText:
      "We seek to develop relationships that support additional orders when demand exists and favorable commercial terms remain available.",

    /* 4. Product Categories */
    catTitle: "Product Categories of Interest",
    catLead:
      "We evaluate purchasing opportunities across different consumer product categories, with particular interest in the following areas:",
    catBeauty: "Beauty & Personal Care",
    catBeautyAlt: "Beauty & Personal Care",
    catHome: "Home & Household",
    catHomeAlt: "Home & Household",
    catAuto: "Automotive Accessories",
    catAutoAlt: "Automotive Accessories",
    catGarden: "Lawn & Garden",
    catGardenAlt: "Lawn & Garden",
    catTools: "Tools & Hardware",
    catToolsAlt: "Tools & Hardware",
    catGeneral: "General Consumer Products",
    catGeneralAlt: "General Consumer Products",

    /* 5. Why Work With EMINERI */
    whyTitle: "Why Work With EMINERI",
    whyLead:
      "Our goal is to develop organized, transparent, and mutually beneficial business relationships.",
    whyOneTitle: "Professional Communication",
    whyOneText:
      "We maintain clear business communication and provide responsible follow-up on every opportunity.",
    whyTwoTitle: "Authentic Products",
    whyTwoText:
      "We prioritize authentic products from brands, manufacturers, and verifiable supply channels.",
    whyThreeTitle: "Long-Term Relationships",
    whyThreeText:
      "We seek to develop recurring purchasing opportunities rather than limiting relationships to isolated transactions.",
    whyFourTitle: "U.S.-Based Company",
    whyFourText:
      "EMINERI Distribution & Supply Company LLC is a Texas-based company serving the U.S. market.",
    whyFiveTitle: "Organized Documentation",
    whyFiveText:
      "We value commercial invoices, clear business information, and traceability throughout the supply chain.",

    /* 6. Suppliers */
    supKicker: "SUPPLIERS",
    supTitle: "Are You a Brand, Manufacturer or Distributor?",
    supOne:
      "We are interested in establishing commercial relationships with manufacturers, brands, and distributors in the United States seeking to develop new sales opportunities with a responsible buyer.",
    supTwo:
      "We value authentic products, clear commercial documentation, competitive purchasing terms, and recurring supply opportunities.",
    supButton: "Start a Business Conversation",
    supImgAlt: "Supplier and buyer discussing a business opportunity.",

    /* 7. Contact */
    contactTitle: "Let's Discuss Business Opportunities",
    contactLead:
      "If you represent a brand, manufacturer, or distributor and would like to explore a supply relationship with EMINERI, we would be pleased to learn more about your company and products.",
    formName: "Name",
    formNamePh: "Your name",
    formCompany: "Company",
    formCompanyPh: "Company name",
    formEmail: "Email",
    formEmailPh: "Business email",
    formPhone: "Phone — Optional",
    formPhonePh: "Phone number",
    formProductType: "Product Type",
    formProductTypePh: "Type of product",
    formMessage: "Message",
    formMessagePh: "Tell us about your company and products",
    formSubmit: "Submit Information",

    /* Form Feedback */
    msgSending: "Sending…",
    msgSuccess:
      "Thank you. We have received your information and will contact you after reviewing it.",
    msgError:
      "Unable to send information. Please try again or write to us at info@emineri.com.",
    fieldRequired: "This field is required.",
    invalidEmail: "Please enter a valid email address.",

    /* 8. Footer */
    footerLocation: "701 Commerce St Ste 500 #3010 Dallas, TX 75202, United States",
    copyrightRights: "All rights reserved.",
  },

  es: {
    /* Page Metadata */
    pageTitle: "EMINERI | Distribución y Relaciones Comerciales",
    metaDesc:
      "EMINERI adquiere productos de consumo de marcas, fabricantes y distribuidores establecidos para su reventa a través de sus canales de venta en el mercado de Estados Unidos.",

    /* Navigation */
    navHome: "Inicio",
    navAbout: "Quiénes somos",
    navServices: "Qué hacemos",
    navCategories: "Categorías",
    navSuppliers: "Proveedores",
    navContact: "Contacto",
    navCta: "Conversemos",

    /* 1. Hero */
    heroTitle: "Productos confiables.<br />Relaciones comerciales <br />duraderas.",
    heroText:
      "EMINERI adquiere productos de consumo de marcas, fabricantes y distribuidores establecidos para su reventa a través de sus canales de venta en el mercado de Estados Unidos.",
    heroBtn: "Ser proveedor",
    heroImgAlt: "Evaluación profesional de productos de consumo para compras comerciales.",

    /* 2. About Us */
    aboutKicker: "QUIÉNES SOMOS",
    aboutTitle: "Una empresa estadounidense enfocada en relaciones comerciales a largo plazo",
    aboutOne:
      "EMINERI Distribution & Supply Company LLC es una empresa con sede en Texas dedicada a la compra y reventa de productos de consumo. Desarrollamos relaciones comerciales con marcas, fabricantes y distribuidores establecidos para ofrecer productos auténticos y confiables a través de nuestros canales de venta en el mercado de Estados Unidos.",
    aboutTwo:
      "Evaluamos cada oportunidad según la autenticidad del producto, la documentación comercial, la disponibilidad, las condiciones de compra y el potencial de mantener una relación de suministro recurrente.",
    aboutImgAlt: "Profesionales evaluando productos durante una conversación comercial.",

    /* 3. What We Do */
    wwdTitle: "Qué hacemos",
    wwdLead:
      "Evaluamos productos, oportunidades de compra y relaciones de suministro para el mercado de Estados Unidos.",
    wwdOneTitle: "Identificación de productos",
    wwdOneText:
      "Evaluamos productos y categorías con potencial para incorporarse a nuestros canales de venta.",
    wwdTwoTitle: "Compras comerciales",
    wwdTwoText:
      "Compramos productos de consumo para su reventa en el mercado de Estados Unidos, según la disponibilidad y las condiciones comerciales acordadas.",
    wwdThreeTitle: "Gestión de proveedores",
    wwdThreeText:
      "Evaluamos autenticidad, documentación, disponibilidad, precios y continuidad de suministro antes de establecer una relación comercial.",
    wwdFourTitle: "Compras recurrentes",
    wwdFourText:
      "Buscamos desarrollar relaciones que permitan realizar pedidos adicionales cuando exista demanda y se mantengan condiciones comerciales favorables.",

    /* 4. Product Categories */
    catTitle: "Categorías de productos de interés",
    catLead:
      "Evaluamos oportunidades de compra en diferentes categorías de productos de consumo, con especial interés en las siguientes áreas:",
    catBeauty: "Belleza y cuidado personal",
    catBeautyAlt: "Belleza y cuidado personal",
    catHome: "Hogar y artículos domésticos",
    catHomeAlt: "Hogar y artículos domésticos",
    catAuto: "Accesorios automotrices",
    catAutoAlt: "Accesorios automotrices",
    catGarden: "Jardín y exteriores",
    catGardenAlt: "Jardín y exteriores",
    catTools: "Herramientas y ferretería",
    catToolsAlt: "Herramientas y ferretería",
    catGeneral: "Productos de consumo general",
    catGeneralAlt: "Productos de consumo general",

    /* 5. Why Work With EMINERI */
    whyTitle: "Por qué trabajar con EMINERI",
    whyLead:
      "Nuestro objetivo es desarrollar relaciones comerciales organizadas, transparentes y beneficiosas para ambas partes.",
    whyOneTitle: "Comunicación profesional",
    whyOneText:
      "Mantenemos una comunicación comercial clara y damos seguimiento responsable a cada oportunidad.",
    whyTwoTitle: "Productos auténticos",
    whyTwoText:
      "Priorizamos productos auténticos provenientes de marcas, fabricantes y canales de suministro verificables.",
    whyThreeTitle: "Relaciones a largo plazo",
    whyThreeText:
      "Buscamos desarrollar oportunidades de compra recurrentes, en lugar de limitar las relaciones a transacciones aisladas.",
    whyFourTitle: "Empresa establecida en Estados Unidos",
    whyFourText:
      "EMINERI Distribution & Supply Company LLC es una empresa con sede en Texas que atiende el mercado de Estados Unidos.",
    whyFiveTitle: "Documentación organizada",
    whyFiveText:
      "Valoramos las facturas comerciales, la información empresarial clara y la trazabilidad en toda la cadena de suministro.",

    /* 6. Suppliers */
    supKicker: "PROVEEDORES",
    supTitle: "¿Representa una marca, un fabricante o un distribuidor?",
    supOne:
      "Nos interesa establecer relaciones comerciales con fabricantes, marcas y distribuidores en Estados Unidos que busquen desarrollar nuevas oportunidades de venta con un comprador responsable.",
    supTwo:
      "Valoramos los productos auténticos, la documentación comercial clara, las condiciones de compra competitivas y las oportunidades de suministro recurrente.",
    supButton: "Iniciar una conversación comercial",
    supImgAlt: "Proveedor y comprador conversando sobre una oportunidad comercial.",

    /* 7. Contact */
    contactTitle: "Hablemos de oportunidades comerciales",
    contactLead:
      "Si representa una marca, un fabricante o un distribuidor y desea explorar una relación de suministro con EMINERI, nos complacerá conocer más sobre su empresa y sus productos.",
    formName: "Nombre",
    formNamePh: "Su nombre",
    formCompany: "Empresa",
    formCompanyPh: "Nombre de la empresa",
    formEmail: "Correo electrónico",
    formEmailPh: "Correo electrónico comercial",
    formPhone: "Teléfono — Opcional",
    formPhonePh: "Número de teléfono",
    formProductType: "Tipo de producto",
    formProductTypePh: "Tipo de producto",
    formMessage: "Mensaje",
    formMessagePh: "Cuéntenos sobre su empresa y sus productos",
    formSubmit: "Enviar información",

    /* Form Feedback */
    msgSending: "Enviando…",
    msgSuccess:
      "Gracias. Hemos recibido su información y nos comunicaremos con usted después de revisarla.",
    msgError:
      "No fue posible enviar la información. Inténtelo nuevamente o escríbanos a info@emineri.com.",
    fieldRequired: "Este campo es obligatorio.",
    invalidEmail: "Ingrese un correo electrónico válido.",

    /* 8. Footer */
    footerLocation: "701 Commerce St Ste 500 #3010 Dallas, TX 75202, United States",
    copyrightRights: "Todos los derechos reservados.",
  },
};

/* ─── State ─── */
let currentLang = "en";

/* ─── Dynamic Copyright Year ─── */
const yearEl = document.getElementById("copyrightYear");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

/* ─── Language Switching Engine ─── */
function setLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  document.documentElement.lang = lang;
  localStorage.setItem("emineri_lang", lang);

  // Update Page Title and Meta Description
  document.title = translations[lang].pageTitle;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) {
    metaDesc.setAttribute("content", translations[lang].metaDesc);
  }

  // Update text nodes
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (translations[lang][key] !== undefined) {
      if (translations[lang][key].includes("<")) {
        el.innerHTML = translations[lang][key];
      } else {
        el.textContent = translations[lang][key];
      }
    }
  });

  // Update placeholders
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.dataset.i18nPlaceholder;
    if (translations[lang][key] !== undefined) {
      el.placeholder = translations[lang][key];
    }
  });

  // Update image alt attributes
  document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
    const key = el.dataset.i18nAlt;
    if (translations[lang][key] !== undefined) {
      el.alt = translations[lang][key];
    }
  });

  // Update active states on all language switchers (header + menu)
  document.querySelectorAll(".language-switch").forEach((container) => {
    container.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.lang === lang);
    });
  });
}

// Bind language switcher buttons
document.querySelectorAll(".lang-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const targetLang = btn.dataset.lang;
    setLanguage(targetLang);
  });
});

// Initialize with saved language or default to English
const savedLang = localStorage.getItem("emineri_lang") || "en";
setLanguage(savedLang);

/* ─── Mobile Menu Modal ─── */
const menuModal = document.getElementById("mobileMenuModal");
const menuOpenBtn = document.getElementById("menuOpenBtn");
const menuCloseBtn = document.getElementById("menuCloseBtn");

function openMenu() {
  if (!menuModal) return;
  menuModal.classList.add("is-open");
  menuModal.setAttribute("aria-hidden", "false");
  if (menuOpenBtn) menuOpenBtn.setAttribute("aria-expanded", "true");
  document.body.style.overflow = "hidden";
}

function closeMenu() {
  if (!menuModal) return;
  menuModal.classList.remove("is-open");
  menuModal.setAttribute("aria-hidden", "true");
  if (menuOpenBtn) menuOpenBtn.setAttribute("aria-expanded", "false");
  document.body.style.overflow = "";
}

if (menuOpenBtn) {
  menuOpenBtn.addEventListener("click", openMenu);
}

if (menuCloseBtn) {
  menuCloseBtn.addEventListener("click", closeMenu);
}

// Close menu when clicking any navigation link
document.querySelectorAll(".menu-link, .menu-cta-btn").forEach((link) => {
  link.addEventListener("click", () => {
    closeMenu();
  });
});

// Close menu with ESC key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && menuModal && menuModal.classList.contains("is-open")) {
    closeMenu();
  }
});

/* ─── Contact Form Handling ─── */
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const nameInput = document.getElementById("contactName");
    const companyInput = document.getElementById("contactCompany");
    const emailInput = document.getElementById("contactEmail");
    const phoneInput = document.getElementById("contactPhone");
    const productTypeInput = document.getElementById("contactProductType");
    const messageInput = document.getElementById("contactMessage");

    const name = nameInput.value.trim();
    const company = companyInput.value.trim();
    const email = emailInput.value.trim();
    const phone = phoneInput ? phoneInput.value.trim() : "";
    const productType = productTypeInput ? productTypeInput.value.trim() : "";
    const message = messageInput.value.trim();

    // Reset errors
    document.querySelectorAll(".form-error-msg").forEach((el) => {
      el.textContent = "";
    });
    formStatus.className = "form-status";
    formStatus.textContent = "";

    let hasError = false;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name) {
      document.getElementById("nameError").textContent = translations[currentLang].fieldRequired;
      hasError = true;
    }

    if (!company) {
      document.getElementById("companyError").textContent =
        translations[currentLang].fieldRequired;
      hasError = true;
    }

    if (!email) {
      document.getElementById("emailError").textContent = translations[currentLang].fieldRequired;
      hasError = true;
    } else if (!emailRegex.test(email)) {
      document.getElementById("emailError").textContent = translations[currentLang].invalidEmail;
      hasError = true;
    }

    if (!message) {
      document.getElementById("messageError").textContent =
        translations[currentLang].fieldRequired;
      hasError = true;
    }

    if (hasError) {
      return;
    }

    // Indicate sending
    formStatus.className = "form-status sending";
    formStatus.textContent = translations[currentLang].msgSending;

    // Build mailto body as reliable client fallback
    const bodyLines = [
      `Name: ${name}`,
      `Company: ${company}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : "",
      productType ? `Product Type: ${productType}` : "",
      "",
      "Message:",
      message,
    ]
      .filter(Boolean)
      .join("\n");

    const subject = encodeURIComponent(`Business Inquiry from ${company}`);
    const mailBody = encodeURIComponent(bodyLines);
    const mailtoUrl = `mailto:info@emineri.com?subject=${subject}&body=${mailBody}`;

    // Trigger mail client IMMEDIATELY (synchronously) to avoid mobile popup blockers
    try {
      window.location.href = mailtoUrl;
    } catch (err) {
      console.warn("Mail client launch:", err);
    }

    formStatus.className = "form-status success";
    formStatus.textContent = translations[currentLang].msgSuccess;
    contactForm.reset();
  });
}

/* ─── Scroll Reveal Animations ─── */
document.addEventListener("DOMContentLoaded", () => {
  // Add the 'reveal' class to elements we want to animate
  const revealElements = document.querySelectorAll(
    ".section-title, .section-lead, .paragraph, .compact-card, .cat-card, .about-composite-card, .suppliers-composite-card, .contact-card-wrap"
  );
  
  revealElements.forEach((el) => {
    el.classList.add("reveal");
  });

  const revealOptions = {
    root: null,
    rootMargin: "0px 0px -15% 0px", // Trigger when element is 15% above the bottom of viewport
    threshold: 0
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target); // Only animate once
      }
    });
  }, revealOptions);

  revealElements.forEach((el) => {
    revealObserver.observe(el);
  });
});
