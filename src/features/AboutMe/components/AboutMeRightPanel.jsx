import { useTranslation } from "react-i18next";
import { LoadingBar } from "../../../components/LoadingBar";

export default function AboutMeRightPanel() {
  const { t,i18n } = useTranslation();

  return (
    <div key={i18n.language} className="animate-lang-change flex flex-col justify-center w-full text-white p-4 pt-0 font-light md:text-white md:text-[2.3vh] bg-black/50 space-y-2 xl:w-2/5 xl:min-h-65 xl:border-l xl:border-white/30 xl:p-6">
      <div className="flex flex-row w-full items-center gap-3">
        <p>{t('aboutme.location')}: <span className="font-bold">Mar del Plata</span>, Argentina</p>  
        <img loading="lazy" src={`${import.meta.env.BASE_URL}/brand/svgs/argentina_flag.svg`} className="w-[10%]" />
      </div>
        
      <p className="text-start">{t('aboutme.languages')}:</p>
      <div className="ml-[8%] grid grid-cols-3 justify-center items-center w-3/4 gap-4">
        <p>- {t('aboutme.spanish')}</p> <LoadingBar percentage={100} /> <p>{'('+t('aboutme.native')+')'}</p>
        <p>- {t('aboutme.english')}</p> <LoadingBar percentage={75} /> <p>{'('+t('aboutme.advanced')+')'}</p>
      </div>

      <div className="flex flex-row w-full items-center gap-3">
        <p>{t('aboutme.focus')}</p>
      </div>
    </div>
  );
}