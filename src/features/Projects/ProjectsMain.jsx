import { useTranslation } from "react-i18next";
import { ChevronNav } from "../../components/tags/ChevronNav";
import { ProjectDisplay } from "./components/ProjectDisplay";
import { projects } from "./projects";

export default function ProjectsMain() {
  const { t } = useTranslation();
  const myProjects = projects;

  return (
    <div className="flex flex-col relative items-center justify-between w-full h-screen">
      <div className="flex flex-col w-[87%] space-y-5 h-full justify-center xl:mt-[6vh]">
        <h1 className="text-3xl font-bold text-white/80">
          {t('projects.title')} <span className="blink-text">_</span>
        </h1>
        <div className="flex w-[90vw] flex-col justify-center items-center space-y-6 self-center xl:w-[80%]">
          {
            myProjects.map((project, index) => (
              <ProjectDisplay key={index} project={project}  />
            ))
          }
        </div>
      </div>

      <ChevronNav targetId={'contactsocials'} />
    </div>
  );
}