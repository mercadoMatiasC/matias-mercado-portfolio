import { useTranslation } from "react-i18next";

export function ProjectDisplay({ project }){
    const { i18n, t } = useTranslation();
    const isEn = i18n.language === 'en';

    return (
        <a href={project.github_link} target="_blank" className="w-full">
            <div id="projectDisplay" className="group flex flex-col w-full bg-cover h-[28vh] bg-top-right lg:flex-row lg:h-[30vh]" style={{ backgroundImage: `url('${import.meta.env.BASE_URL}/brand/projects/${project.id+'/'+project.bg}')` }}>
                <main className="w-full h-2/3 flex flex-col text-lg text-white justify-between p-6 space-y-2 lg:p-7 lg:w-1/2 lg:h-full lg:space-y-0">
                    <h2 className="text-lg italic font-bold xl:text-[2vh] 2xl:text-2xl">{project.title}</h2>
                    <h3 className="text-[2vh] xl:text-[2vh]">
                        {(isEn) ? project.headline.en : project.headline.es}
                    </h3>
                    <p className="text-md hidden 2xl:block">
                        {t('projects.description')}: <span className="font-light">{(isEn) ? project.description.en : project.description.es}</span>
                    </p>
                    <p className="hidden lg:flex gap-2">
                        {t('projects.status')}: <span className="font-light">{(isEn) ? project.status.en : project.status.es}</span>
                    </p>
                    <div className="flex flex-row gap-3">
                        {project.stack.map((item, index) => (
                            <img key={index} src={`${import.meta.env.BASE_URL}/brand/svgs/skills/${item}.svg`} alt={item} className="max-h-[3.5vh]" />
                        ))}
                    </div>
                </main>

                <span className={`w-full h-1/ px-6 flex flex-row-reverse justify-between items-center text-white hover:cursor-pointer transition-all lg:w-1/2 lg:p-7 lg:flex-row`}>
                    <img src={`${import.meta.env.BASE_URL}/brand/projects/${project.id+'/'+project.screens}`} alt={`${project.title} screens`} className="w-[16vh] drop-shadow-xl drop-shadow-black group-hover:scale-110 transition-all duration-500 lg:w-[30vh] 2xl:w-[42vh]" />
                    
                    <img src={`${import.meta.env.BASE_URL}/brand/svgs/rchevron.svg`} alt="right" width="32" className="hidden drop-shadow-sm drop-shadow-black opacity-70 group-hover:translate-x-[25%] transition-all lg:flex" />
                    <img src={`${import.meta.env.BASE_URL}/brand/svgs/skills/GitHub.svg`} alt="right" width="32" className="flex drop-shadow-sm drop-shadow-black opacity-70 group-hover:translate-x-[25%] transition-all lg:hidden" />
                </span>
            </div>
        </a>
    );
}