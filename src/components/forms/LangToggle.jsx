import { useTranslation } from "react-i18next";

export function LangToggle() {
  const { i18n } = useTranslation();
  const isEn = i18n.language === 'en';

  const toggleLanguage = () => {
    i18n.changeLanguage(isEn ? 'es' : 'en');
  };

  return (
    <div className="h-8 flex items-center gap-3 cursor-pointer select-none" onClick={toggleLanguage}>
      <span className={`text-[1.5vh] font-bold transition-colors ${isEn ? 'text-white' : 'text-gray-500'}`}>EN</span>

      {/* -- TOGGLE -- */}
      <svg width="50" height="30" viewBox="0 0 60 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="60" height="30" rx="15" fill={isEn ? "grey" : "#AA151B"} />
        
        {isEn ? (
             <path d="M0 15H60M30 0V30" stroke="red" strokeWidth="10" opacity="0.5" /> 
        ) : (
             <rect y="10" width="60" height="10" fill="#FFD700" opacity="0.3" />
        )}

        <circle cx={isEn ? "15" : "45"} cy="15" r="12" fill="white" className="transition-all duration-200" />
      </svg>
      <span className={`text-[1.5vh] font-bold transition-colors ${!isEn ? 'text-white' : 'text-gray-500'}`}>ES</span>
    </div>
  );
};