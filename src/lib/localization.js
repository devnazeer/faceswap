// utils/localization.js

// This function returns the localized title based on the current language (locale)
export function getLocalizedTitle(locale) {
  const titles = {
    en: "AI Face Shape Detector | Free Face Shape Analyzer",
    de: "KI-Gesichtsform-Detektor | Kostenloser Gesichtsform-Analysator",
    es: "Face Shape Detector | Detector de forma de cara de IA",
    pt: "Detector IA de Formato de Rosto | Analisador Gratuito de Formato de Rosto",
    ru: "ИИ определитель формы лица | Бесплатный детектор формы лица",
    id: "AI Pendeteksi Bentuk Wajah Gratis | Analisis Bentuk Wajah Gratis",
  };

  return titles[locale] || titles.en; // Default to English if locale is not found
}

// This function returns the localized description based on the current language (locale)
export function getLocalizedDescription(locale) {
  const descriptions = {
    en: "Find your perfect face shape with our free AI Face Shape Detector. Fast, accurate analysis to improve your style, makeup, and hairstyle decisions",
    de: "Finden Sie Ihre perfekte Gesichtsform mit unserem kostenlosen KI-Gesichtsform-Detektor. Schnelle, präzise Analyse zur Optimierung Ihrer Stil-, Make-up- und Frisurenentscheidungen",
    es: "Encuentra tu forma de cara perfecta con nuestro Detector de forma de cara de IA gratuito. Análisis rápido y preciso para que tomes mejores decisiones sobre estilo, maquillaje y peinado.",
    pt: "Encontre o formato de rosto perfeito para você com nosso Detector IA de Formato de Rosto gratuito. Análise rápida e precisa para aprimorar suas decisões de estilo, maquiagem e penteado. Uma ferramenta ideal para quem quer descobrir o formato do rosto online.",
    ru: "Наш бесплатный ИИ определитель формы лица поможет вам найти свою идеальную форму лица. Быстрый и точный анализ для улучшения ваших подходов к стилю, макияжу и прическам",
    id: "Temukan bentuk wajah kamu yang sempurna dengan AI Pendeteksi Bentuk Wajah Gratis. Analisis cepat dan akurat untuk mempercantik gaya, makeup, dan potongan rambut kamu",
  };

  return descriptions[locale] || descriptions.en; // Default to English if locale is not found
}

// Optionally, you can add more localized content like button texts, labels, etc.
export function getLocalizedKeywords(locale) {
  const keywords = {
    en: "Face Shape Detector",
    de: "Gesichtsformdetektor",
    es: "Detector de forma de cara",
    pt: "Detector de formato de rosto",
    ru: "ИИ определитель формы лица",
    id: "Pendeteksi Bentuk Wajah",
  };

  return keywords[locale] || keywords.en; // Default to English if locale is not found
}
export function getLocalizedImageAlt(locale) {
  const ImageAlt = {
    en: "Face Shape Detector",
    de: "Gesichtsformdetektor",
    es: "Detector de forma de cara",
    pt: "Detector de formato de rosto",
    ru: "ИИ определитель формы лица",
    id: "Pendeteksi Bentuk Wajah",
  };

  return ImageAlt[locale] || ImageAlt.en; // Default to English if locale is not found
}
