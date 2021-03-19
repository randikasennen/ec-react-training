import { createContext, useContext } from 'react';

const LanguageContext = createContext();

export function useLanguage() {
    const [language, setLanguage] = useContext(LanguageContext);
    return [language, setLanguage];
}

export default LanguageContext;