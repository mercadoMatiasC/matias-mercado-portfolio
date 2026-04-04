import { useTranslation, Trans } from 'react-i18next';
import { MainButton } from '../../../components/forms/MainButton';
import { useNav } from "../../../contexts/NavigationContext";

export default function HomeLeftPanel() {
  const { t, i18n } = useTranslation();
  const { scrollToSection } = useNav();

  return (
    <section key={i18n.language} className="animate-lang-change flex flex-col w-full justify-center text-white/80 items-start h-full md:w-3/5">
      {/* -- INTRODUCTION -- */}
      <h1 className='flex mt-3 flex-row text-[7vw] font-bold sm:text-[5vh] md:text-[6vh] md:mt-0 md:items-start md:flex-col 2xl:flex-row'>
        {t('home.introduction')} 
        <span className="flex ml-2 text-[#DE398E] hover:animate-pulse md:ml-0 2xl:ml-3">
          <span className='text-[#9E2063]'>{"{"}</span>
          <span className='flex'>
            <span className='italic font-bold'>Matías</span>
            <span className='italic font-light'>_Mercado</span>
          </span>
          <span className='text-[#9E2063] ml-0 2xl:ml-2'>{"}"}</span>
        </span>
      </h1>

      {/* -- POSITION -- */}
      <h2 className='italic text-[2.5vh] md:text-[4vh] font-medium'>
        {t('home.position')} 
      </h2>

      {/* -- DESCRIPTION -- */}
      <p className="font-light mt-8 md:mt-25 md:text-white md:text-[2.3vh] md:w-full">
        <Trans i18nKey="home.description" 
          components={{ 
            1: <span className="text-[#FA45A3] font-semibold" />, 
            2: <span className="text-[#FA45A3] font-semibold" /> 
          }} 
        />
      </p>
      
      <div className='w-full flex mt-10 gap-3 justify-center items-center md:items-start md:justify-start md:mt-25'>
        <a href="/brand/myCV/Matias Mercado - CV.pdf" download>
          <MainButton name={t('buttons.downloadcv')}  />
        </a>
        <MainButton name={t('buttons.contactme')}  onClick={() => scrollToSection('contactsocials')}  />
      </div>
    </section>
  )
}