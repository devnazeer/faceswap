// components/LanguageProvider.js
"use client";
import { useState, createContext, useContext } from "react";
import i18n from "../../lib/i18n";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [currentLanguage, setCurrentLanguage] = useState("en");

  const changeLanguage = async (lng) => {
    try {
      await i18n.changeLanguage(lng);
      setCurrentLanguage(lng);
    } catch (error) {
      console.error("Language change failed:", error);
    }
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

// LanguageProvider.jsx
// "use client";

// import React, {
//   createContext,
//   useContext,
//   useState,
//   useEffect,
//   useMemo,
// } from "react";
// import { usePathname, useRouter } from "next/navigation";

// const LanguageContext = createContext();

// export const useLanguage = () => {
//   return useContext(LanguageContext);
// };

// export const LanguageProvider = ({ children }) => {
//   const router = useRouter();
//   const pathname = usePathname();

//   const [currentLanguage, setCurrentLanguage] = useState("en");
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     if (pathname) {
//       const match = pathname.match(/^\/([a-z]{2})(\/|$)/);
//       if (match) {
//         setCurrentLanguage(match[1]);
//       }
//       setMounted(true); // wait until pathname is available
//     }
//   }, [pathname]);

//   const changeLanguage = async (langCode) => {
//     setCurrentLanguage(langCode);
//     router.push(`/${langCode}${pathname.replace(/^\/[a-z]{2}/, "")}`);
//   };

//   if (!mounted) return null; // ⛔️ Prevent hydration mismatch

//   return (
//     <LanguageContext.Provider value={{ currentLanguage, changeLanguage }}>
//       {children}
//     </LanguageContext.Provider>
//   );
// };
