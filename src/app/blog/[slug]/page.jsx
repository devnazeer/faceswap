// import BlogDetailPage from "@/features/BlogDetails";
// import {
//   getLocalizedDescription,
//   getLocalizedImageAlt,
//   getLocalizedKeywords,
//   getLocalizedTitle,
// } from "@/lib/localization";
// import { notFound } from "next/navigation";

// // Supported locales
// const VALID_LOCALES = ["en", "es", "ru", "pt", "id", "de"];

// // Mapping of English slugs to translated slugs
// const SLUG_MAPPINGS = {
//   en: {
//     "celebrity-face-swap": {
//       de: "promi-gesichtstausch",
//       es: "intercambio-rostros-celebridades",
//       ru: "знаменитости-замена-лиц",
//       pt: "celebrity-face-swap",
//       id: "celebrity-face-swap",
//     },
//     "swap-face-photoshop": {
//       de: "gesichtstausch-photoshop",
//       es: "intercambiar-cara-photoshop",
//       ru: "поменяйтесь-лицами-в-фотошопе",
//       pt: "swap-face-photoshop",
//       id: "menukar-wajah-photoshop",
//     },
//     "how-to-use-insight-face-swap-discord": {
//       de: "set-up-insight-face-swap",
//       es: "configuracion-instalacion-intercambio-cara",
//       ru: "настройка-замены-лиц-в-insight",
//       pt: "how-to-use-insight-face-swap-discord",
//       id: "mengatur-wawasan-wajah-swap",
//     },
//   },
// };

// const VALID_SLUGS = Object.keys(SLUG_MAPPINGS.en);

// function getEnglishSlug(locale, localizedSlug) {
//   for (const [enSlug, translations] of Object.entries(SLUG_MAPPINGS.en)) {
//     if (locale === "en" && enSlug === localizedSlug) return enSlug;
//     if (translations[locale] === localizedSlug) return enSlug;
//   }
//   return localizedSlug;
// }

// async function fetchPostContent(slug, locale) {
//   try {
//     const url = `https://swapinfo.xyz${
//       locale === "en" ? "" : "/" + locale
//     }/wp-json/wp/v2/posts?slug=${slug}&_embed`;

//     const response = await fetch(url, {
//       headers: { Accept: "application/json" },
//       next: { revalidate: 3600 }, // ISR
//     });

//     if (!response.ok) return null;

//     const posts = await response.json();
//     return posts.length ? posts[0] : null;
//   } catch (error) {
//     console.error("Error fetching post content:", error);
//     return null;
//   }
// }

// export async function generateStaticParams() {
//   const params = [];

//   for (const slug of VALID_SLUGS) {
//     for (const locale of VALID_LOCALES) {
//       const translatedSlug =
//         locale === "en" ? slug : SLUG_MAPPINGS.en[slug]?.[locale] || slug;
//       params.push({ locale, slug: translatedSlug });
//     }
//   }

//   return params;
// }

// export async function generateMetadata({ params }) {
//   const { locale, slug } = params;
//   const baseUrl =
//     process.env.NODE_ENV === "development"
//       ? "http://localhost:3000"
//       : "https://faceswaponline.ai";
//   const englishSlug = getEnglishSlug(locale, slug);

//   const url = `${baseUrl}/${locale}/blog/${slug}`;
//   const title = getLocalizedTitle(locale);
//   const description = getLocalizedDescription(locale);
//   const keywords = getLocalizedKeywords(locale);
//   const imageAlt = getLocalizedImageAlt(locale);

//   const alternates = VALID_LOCALES.reduce((acc, lang) => {
//     const mappedSlug =
//       lang === "en"
//         ? englishSlug
//         : SLUG_MAPPINGS.en[englishSlug]?.[lang] || englishSlug;
//     acc[lang] =
//       lang === "en" ? `/blog/${mappedSlug}` : `/${lang}/blog/${mappedSlug}`;
//     return acc;
//   }, {});

//   return {
//     title,
//     description,
//     keywords,
//     metadataBase: new URL(baseUrl),
//     alternates: {
//       canonical: url,
//       languages: alternates,
//     },
//     openGraph: {
//       title: `${title} | FaceSwap Online`,
//       description,
//       url,
//       siteName: "FaceSwap Online",
//       images: [
//         {
//           url: `${baseUrl}/og-image.jpg`,
//           width: 1200,
//           height: 630,
//           alt: imageAlt,
//         },
//       ],
//       locale,
//       type: "article",
//     },
//     twitter: {
//       card: "summary_large_image",
//       title: `${title} | FaceSwap Online`,
//       description,
//       images: [{ url: `${baseUrl}/og-image.webp`, alt: imageAlt }],
//     },
//   };
// }

// export default async function BlogPostPage({ params }) {
//   const { locale = "en", slug } = params;

//   if (!VALID_LOCALES.includes(locale)) {
//     notFound();
//   }

//   const englishSlug = getEnglishSlug(locale, slug);

//   const post =
//     (await fetchPostContent(slug, locale)) ||
//     (locale !== "en" ? await fetchPostContent(englishSlug, "en") : null);

//   if (!post) {
//     notFound();
//   }

//   return (
//     <BlogDetailPage
//       slug={slug}
//       locale={locale}
//       postData={{
//         id: post.id,
//         title: post.title?.rendered || "",
//         content: post.content?.rendered || "",
//         excerpt: post.excerpt?.rendered || "",
//         date: post.date,
//         featuredMedia: post._embedded?.["wp:featuredmedia"]?.[0],
//       }}
//     />
//   );
// }

import BlogDetailPage from "@/features/BlogDetails";
import {
  getLocalizedDescription,
  getLocalizedImageAlt,
  getLocalizedKeywords,
  getLocalizedTitle,
} from "@/lib/localization";
import { notFound } from "next/navigation";

// Define valid locales
const VALID_LOCALES = ["en", "es", "ru", "pt", "id", "de"];

// Define slug mappings for all languages with URL-encoded slugs
const SLUG_MAPPINGS = {
  en: {
    "celebrity-face-swap": {
      de: "promi-gesichtstausch",
      es: "intercambio-rostros-celebridades",
      ru: "%D0%B7%D0%BD%D0%B0%D0%BC%D0%B5%D0%BD%D0%B8%D1%82%D0%BE%D1%81%D1%82%D0%B8-%D0%B7%D0%B0%D0%BC%D0%B5%D0%BD%D0%B0-%D0%BB%D0%B8%D1%86",
      pt: "celebrity-face-swap",
      id: "celebrity-face-swap",
    },
    "swap-face-photoshop": {
      de: "gesichtstausch-photoshop",
      es: "intercambiar-cara-photoshop",
      ru: "%d0%bf%d0%be%d0%bc%d0%b5%d0%bd%d1%8f%d0%b9%d1%82%d0%b5%d1%81%d1%8c-%d0%bb%d0%b8%d1%86%d0%b0%d0%bc%d0%b8-%d0%b2-%d1%84%d0%be%d1%82%d0%be%d1%88%d0%be%d0%bf%d0%b5",
      pt: "swap-face-photoshop",
      id: "menukar-wajah-photoshop",
    },
    "how-to-use-insight-face-swap-discord": {
      de: "set-up-insight-face-swap",
      es: "configuracion-instalacion-intercambio-cara",
      ru: "%d0%bd%d0%b0%d1%81%d1%82%d1%80%d0%be%d0%b9%d0%ba%d0%b0-%d0%b7%d0%b0%d0%bc%d0%b5%d0%bd%d1%8b-%d0%bb%d0%b8%d1%86-%d0%b2-insight",
      pt: "how-to-use-insight-face-swap-discord",
      id: "mengatur-wawasan-wajah-swap",
    },
  },
};

// Define valid slugs for English
const VALID_SLUGS = [
  "celebrity-face-swap",
  "swap-face-photoshop",
  "how-to-use-insight-face-swap-discord",
];

export function generateStaticParams() {
  return VALID_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { locale, slug } = params;

  // if (!VALID_LOCALES.includes(locale)) {
  //   return {
  //     title: "Invalid Locale",
  //     description: "The requested language is not supported.",
  //   };
  // }

  const baseUrl =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://faceswaponline.ai";

  const englishSlug = getEnglishSlug(locale, slug);
  const url = `${baseUrl}/${locale}/blog/${slug}`;

  // Get localized metadata only
  const title = getLocalizedTitle(locale);
  const description = getLocalizedDescription(locale);
  const keywords = getLocalizedKeywords(locale);
  const imageAlt = getLocalizedImageAlt(locale);

  return {
    title,
    description,
    keywords,
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: `${baseUrl}/blog/${slug}`,
      languages: VALID_LOCALES.reduce((acc, lang) => {
        const translatedSlug =
          lang === "en"
            ? englishSlug
            : SLUG_MAPPINGS.en[englishSlug]?.[lang] || englishSlug;
        return {
          ...acc,
          [lang]:
            lang === "en"
              ? `/blog/${translatedSlug}`
              : `/${lang}/blog/${translatedSlug}`,
        };
      }, {}),
    },
    openGraph: {
      title: `${title} | FaceSwap Online`,
      description,
      url: `${baseUrl}/blog/${slug}`,
      siteName: "FaceSwap",
      images: [
        {
          url: `${baseUrl}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: imageAlt,
        },
      ],
      locale,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | FaceSwap Online`,
      description,
      images: [
        {
          url: `${baseUrl}/og-image.webp`,
          alt: imageAlt,
        },
      ],
    },
  };
}
async function fetchPostContent(slug, locale) {
  try {
    const url = `https://swapinfo.xyz${
      locale === "en" ? "" : "/" + locale
    }/wp-json/wp/v2/posts?slug=${slug}&_embed`;

    const response = await fetch(url, {
      headers: {
        Accept: "application/json",
      },
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      return null;
    }

    const posts = await response.json();
    return posts.length ? posts[0] : null;
  } catch (error) {
    console.error("Error fetching post content:", error);
    return null;
  }
}
function getEnglishSlug(locale, localizedSlug) {
  for (const [enSlug, translations] of Object.entries(SLUG_MAPPINGS.en)) {
    if (translations[locale] === localizedSlug || enSlug === localizedSlug) {
      return enSlug;
    }
  }
  return localizedSlug;
}
export default async function BlogPostPage({ params }) {
  const { locale = "en", slug } = params;

  if (!VALID_LOCALES.includes(locale)) {
    notFound();
  }

  const englishSlug = getEnglishSlug(locale, slug);
  const post =
    (await fetchPostContent(slug, locale)) ||
    (locale !== "en" ? await fetchPostContent(englishSlug, "en") : null);

  if (!post) {
    notFound();
  }

  return (
    <BlogDetailPage
      slug={slug}
      locale={locale}
      postData={{
        id: post.id,
        title: post.title?.rendered || "",
        content: post.content?.rendered || "",
        excerpt: post.excerpt?.rendered || "",
        date: post.date,
        featuredMedia: post._embedded?.["wp:featuredmedia"]?.[0],
      }}
    />
  );
}
