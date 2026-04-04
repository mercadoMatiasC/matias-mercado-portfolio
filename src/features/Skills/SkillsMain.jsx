import { useTranslation } from "react-i18next";
import { ChevronNav } from "../../components/tags/ChevronNav";
import { SkillsGrid } from "./components/SkillsGrid";
import Mario from "./components/Mario";
import { useEffect, useState } from "react";

export default function SkillsMain() {
  const { t } = useTranslation();
  const [counter, setCounter] = useState(0);
  const [isEasterEggActive, setIsEasterEggActive] = useState(false);

  useEffect(() => {
    if (counter >= 20 && !isEasterEggActive) 
      setIsEasterEggActive(true);
  }, [counter, isEasterEggActive]);

  return (
    <div className="flex flex-col relative items-center justify-between w-full h-screen">
      <div className="mt-[9vh] flex flex-col w-[87%] space-y-5 h-full justify-center md:mt-[15vh] xl:mt-[15vh] mb-0 2xl:mt-[10vh]">
        <div className="flex flex-row justify-between items-center text-center">
          <h1 className="text-3xl font-bold text-white/80">
            {t('skills.title')} <span className="blink-text">_</span>
          </h1>
          <Mario triggerAnim={isEasterEggActive} />
        </div>
        <div className="flex flex-col justify-center items-center xl:flex-row">
          <SkillsGrid counter={counter} setCounter={setCounter} />
        </div>
      </div>

      <ChevronNav targetId={'projects'} />
    </div>
  );
}