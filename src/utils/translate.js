export function translate(key, language) {
  return {
    details: language === "en" ? "Details" : "Détails",
    options: language === "en" ? "Options" : "Options",
    language: language === "en" ? "Language" : "Langue",
    items: language === "en" ? "Items" : "Menu",
    theme: language === "en" ? "Theme" : "Thème",
    homeTitle: language === "en" ? "Home" : "Accueil",
    aboutTitle: language === "en" ? "About" : "À propos",
    servicesTitle: language === "en" ? "Services" : "Services",
    contactTitle: language === "en" ? "Contact" : "Contact",
    helpTitle: language === "en" ? "Help" : "Aide",
    homeDescription: language === "en" ? "Go to home" : "Aller à l'accueil",
    aboutDescription: language === "en" ? "Go to about" : "Aller à propos",
    servicesDescription:
      language === "en" ? "Go to services" : "Aller aux services",
    contactDescription:
      language === "en" ? "Go to contact" : "Aller au contact",
    helpDescription: language === "en" ? "Go to help" : "Aller à l'aide",
    websiteTitle: language === "en" ? "TitleOfMyWebsite" : "TitreDeMonSite",
    footerText: language === "en" ? "© My Footer" : "© Mon PiedDePage",
  }[key];
}
