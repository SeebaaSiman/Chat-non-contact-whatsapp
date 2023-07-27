import { useState, createContext, useContext } from "react";
import { enTexts, esTexts } from "./text";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  const texts = language === "en" ? enTexts : esTexts;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, texts }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook personalizado para acceder al contexto
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  return context;
};
