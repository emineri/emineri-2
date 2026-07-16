const translations = {
  es: {
    topbar: "Soluciones de Distribución y Suministro para Comercios en EE.UU.",
    heroTitle: "Soluciones de Distribución y Abastecimiento Comercial",
    heroText:
      "Apoyamos a comercios independientes y minoristas con suministro confiable, inventarios de alta rotación y procesos de distribución eficientes.",
    heroButton: "Conocer más",
    trustOne: "Productos verificados",
    trustTwo: "Envíos rápidos",
    trustThree: "Pagos seguros",
    aboutTitle: "Quiénes Somos",
    aboutOne:
      "EMINERI Distribution & Supply Company LLC brinda soluciones de abastecimiento y distribución para negocios minoristas independientes.",
    aboutTwo:
      "Trabajamos con procesos de reaprovisionamiento, soporte logístico y control de inventarios para mantener continuidad operativa.",
    aboutThree:
      "Nuestro modelo se apoya en proveedores confiables, comunicación clara y una atención profesional orientada al suministro mayorista.",
    processTitle: "Operación y Procesos Comerciales",
    processOne:
      "Operamos con métodos diseñados para sostener abastecimiento constante, rotación eficiente de inventarios y distribución puntual.",
    processTwo:
      "Combinamos evaluación de productos, gestión de proveedores y planificación logística para acompañar el crecimiento de cada comercio.",
    missionVisionTitle: "Misión y Visión Corporativa",
    missionTitle: "Misión",
    missionText:
      "Proveer soluciones confiables de distribución, compra mayorista, inventario y logística para negocios que necesitan suministro oportuno.",
    visionTitle: "Visión",
    visionText:
      "Ser un aliado estratégico reconocido por procesos sólidos, relaciones comerciales responsables y capacidad de fortalecer cadenas de suministro.",
    valuesTitle: "Valores Corporativos",
    valuesLead: "Principios que guían cada paso de nuestro trabajo.",
    valueOne: "Integridad y transparencia en cada proceso.",
    valueTwo: "Compromiso con productos útiles y confiables.",
    valueThree: "Responsabilidad comercial ante clientes y proveedores.",
    valueFour: "Relaciones de largo plazo basadas en confianza.",
    valueFive: "Eficiencia operativa y respuesta oportuna.",
    valueSix: "Servicio con enfoque humano y cercano.",
    servicesTitle: "Servicios",
    serviceOneTitle: "Sourcing y Compra Mayorista",
    serviceOneText: "Identificación y adquisición de productos mediante proveedores evaluados.",
    serviceTwoTitle: "Distribución Comercial",
    serviceTwoText: "Redistribución de mercancía para negocios que requieren inventarios constantes.",
    serviceThreeTitle: "Reaprovisionamiento",
    serviceThreeText: "Soluciones de reposición ajustadas al ritmo operativo de cada cliente.",
    serviceFourTitle: "Gestión Logística",
    serviceFourText: "Apoyo en compras, planificación y continuidad operacional.",
    areasTitle: "Áreas Operativas",
    areasLead: "Infraestructura y procesos diseñados para garantizar continuidad comercial.",
    areaOneTitle: "Centros de Distribución",
    areaOneText: "Almacenamiento organizado y eficiente.",
    areaTwoTitle: "Gestión de Inventarios",
    areaTwoText: "Control preciso y rotación eficiente.",
    areaThreeTitle: "Operaciones Logísticas",
    areaThreeText: "Movimiento continuo de mercancía.",
    areaFourTitle: "Planificación Estratégica",
    areaFourText: "Coordinación y optimización de compras.",
    ctaTitle: "¿Listo para Optimizar tu Cadena de Suministro?",
    ctaText: "Contáctanos para conocer cómo podemos fortalecer el abastecimiento de tu negocio.",
    ctaButton: "Contáctanos",
  },
  en: {
    topbar: "Distribution and Supply Solutions for Businesses in the U.S.",
    heroTitle: "Commercial Distribution and Supply Solutions",
    heroText:
      "We support independent retailers with reliable supply, fast-moving inventory and efficient distribution processes.",
    heroButton: "Learn more",
    trustOne: "Verified products",
    trustTwo: "Fast shipping",
    trustThree: "Secure payments",
    aboutTitle: "About Us",
    aboutOne:
      "EMINERI Distribution & Supply Company LLC provides supply and distribution solutions for independent retail businesses.",
    aboutTwo:
      "We work through replenishment, logistics support and inventory control processes that protect operational continuity.",
    aboutThree:
      "Our model is built on reliable suppliers, clear communication and professional support focused on wholesale supply.",
    processTitle: "Commercial Operations and Processes",
    processOne:
      "We operate with methods designed to sustain steady supply, efficient inventory rotation and punctual distribution.",
    processTwo:
      "We combine product evaluation, supplier management and logistics planning to support each business as it grows.",
    missionVisionTitle: "Corporate Mission and Vision",
    missionTitle: "Mission",
    missionText:
      "To provide reliable distribution, wholesale purchasing, inventory and logistics solutions for businesses that require timely supply.",
    visionTitle: "Vision",
    visionText:
      "To be a strategic partner known for solid processes, responsible commercial relationships and stronger supply chains.",
    valuesTitle: "Corporate Values",
    valuesLead: "Principles that guide every step of our work.",
    valueOne: "Integrity and transparency in every process.",
    valueTwo: "Commitment to useful and reliable products.",
    valueThree: "Commercial responsibility with clients and suppliers.",
    valueFour: "Long-term relationships based on trust.",
    valueFive: "Operational efficiency and timely response.",
    valueSix: "Human-centered and attentive service.",
    servicesTitle: "Services",
    serviceOneTitle: "Wholesale Sourcing and Purchasing",
    serviceOneText: "Product identification and acquisition through evaluated suppliers.",
    serviceTwoTitle: "Commercial Distribution",
    serviceTwoText: "Merchandise redistribution for businesses that need consistent inventory.",
    serviceThreeTitle: "Inventory Replenishment",
    serviceThreeText: "Restocking solutions aligned with each client’s operating rhythm.",
    serviceFourTitle: "Logistics Management",
    serviceFourText: "Support for purchasing, planning and operational continuity.",
    areasTitle: "Operational Areas",
    areasLead: "Infrastructure and processes designed to support commercial continuity.",
    areaOneTitle: "Distribution Centers",
    areaOneText: "Organized and efficient storage.",
    areaTwoTitle: "Inventory Management",
    areaTwoText: "Precise control and efficient rotation.",
    areaThreeTitle: "Logistics Operations",
    areaThreeText: "Continuous movement of merchandise.",
    areaFourTitle: "Strategic Planning",
    areaFourText: "Purchase coordination and optimization.",
    ctaTitle: "Ready to Optimize Your Supply Chain?",
    ctaText: "Contact us to learn how we can strengthen your business supply operations.",
    ctaButton: "Contact us",
  },
};

const buttons = document.querySelectorAll("[data-lang]");
const translatableNodes = document.querySelectorAll("[data-i18n]");

function setLanguage(language) {
  document.documentElement.lang = language;
  translatableNodes.forEach((node) => {
    const key = node.dataset.i18n;
    node.textContent = translations[language][key];
  });
  buttons.forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === language);
  });
}

buttons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});
