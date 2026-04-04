import { useTranslation } from "react-i18next";
import { ChevronNav } from "../../components/tags/ChevronNav";
import AboutMeLeftPanel from "./components/AboutMeLeftPanel";
import AboutMeRightPanel from "./components/AboutMeRightPanel";

export default function AboutMeMain() {
  const { t } = useTranslation();

  return (
    <div className="relative h-full w-full"> 
      <div id="aboutMeContainer" className="absolute inset-0 z-0 bg-cover bg-center" />
      <div className="flex flex-col relative z-10 items-center justify-between h-full">
        <div className="mt-[8vh] flex flex-col w-[87%] space-y-5 h-full justify-center xl:-translate-y-[10%] xl:mt-[12vh]">
          <h1 className="text-3xl font-bold text-white/80">
            {t('aboutme.title')} <span className="blink-text">_</span>
          </h1>
          <div className="flex flex-col justify-center items-center xl:flex-row">
            <AboutMeLeftPanel />
            <AboutMeRightPanel />
          </div>
        </div>

        <ChevronNav targetId={'skills'} />
      </div>
    </div>
  );
}