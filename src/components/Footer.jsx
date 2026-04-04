import { useTranslation } from "react-i18next";
import { useNav } from "../contexts/NavigationContext";

export default function Footer() {
  const { scrollToSection } = useNav();
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear(); 

  return (
    <footer className="flex w-full bg-black/50 items-center justify-center border-b-3 border-[#b92571] py-4 lg:flex-row lg:py-12">
      <div className="flex flex-col-reverse w-[90%] justify-between lg:flex-row">
        <span className="flex flex-row gap-3 items-center justify-center p-5">
          <img src="/brand/svgs/MM.svg" alt="Matías Mercado" width="40" height="40" className="hidden lg:block" />
          <p className="text-xs font-extralight text-white/50 italic lg:text-sm">
            © {currentYear} matíasMercado - {t('footer.copyright')}
          </p>
        </span>
        
        <span className="flex flex-row gap-3 items-center justify-center hover:cursor-pointer p-5" onClick={() => scrollToSection('home')}>
          <p className="text-lg font-extralight text-white/50 italic">
            {t('footer.backtotop')}
          </p>
        </span>
      </div>
    </footer>
  );
}