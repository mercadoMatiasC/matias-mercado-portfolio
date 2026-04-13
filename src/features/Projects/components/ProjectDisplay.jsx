import { useTranslation } from "react-i18next";

export function ProjectDisplay({ project }){
    const { i18n, t } = useTranslation();
    const isEn = i18n.language === 'en';

    return (
        <a href={project.github_link} target="_blank" className="w-full">
            <div className="projectDisplay space-y-2 group flex flex-col w-full bg-cover h-[21vh] bg-top-right lg:flex-row lg:h-[20vh] bg-white/20" style={{ backgroundImage: `url('${import.meta.env.BASE_URL}/brand/projects/${project.id+'/'+project.bg}')` }}>                
                <main className="w-full h-3/5 flex flex-col text-lg text-white justify-between p-4 lg:p-7 lg:w-2/3 lg:h-full">
                    <div className="flex flex-row md:items-center md:gap-10">
                        <h2 className="text-lg italic font-bold xl:text-[2vh] 2xl:text-2xl">{project.title}</h2>
                        <div className="flex flex-row ml-3 gap-3">
                            {project.stack.map((item, index) => (
                                <img loading="lazy" key={index} src={`${import.meta.env.BASE_URL}/brand/svgs/skills/${item}.svg`} alt={item} className="h-[3vh] md:max-h-[3.5vh]" />
                            ))}
                        </div>
                    </div>
                    
                    <h3 className="text-[2vh] xl:text-[2vh]">
                        {(isEn) ? project.headline.en : project.headline.es}
                    </h3>
                    <p className="text-md hidden md:flex 2xl:hidden">
                        {t('projects.status')}: <span className="ml-1 font-light">{(isEn) ? project.status.en : project.status.es}</span>
                    </p>
                    <p className="text-md hidden 2xl:block">
                        {t('projects.description')}: <span className="font-light">{(isEn) ? project.description.en : project.description.es}</span>
                    </p>
                </main>

                <span className={`w-full px-4 flex flex-row-reverse justify-end items-center gap-5 text-white hover:cursor-pointer transition-all lg:w-1/2 lg:p-7 lg:flex-row`}>
                    <img loading="lazy" src={`${import.meta.env.BASE_URL}/brand/projects/${project.id+'/'+project.screens}`} alt={`${project.title} screens`} className="w-[16vh] drop-shadow-xl drop-shadow-black group-hover:scale-110 transition-all duration-500 lg:w-[30vh] 2xl:w-[30vh]" />
                    
                    <img loading="lazy" src={`${import.meta.env.BASE_URL}/brand/svgs/rchevron.svg`} alt="right" width="32" className="hidden drop-shadow-sm drop-shadow-black opacity-70 group-hover:translate-x-[25%] transition-all lg:flex" />
                    <img loading="lazy" src={`${import.meta.env.BASE_URL}/brand/svgs/skills/GitHub.svg`} alt="right" width="32" className="flex drop-shadow-sm drop-shadow-black opacity-70 group-hover:translate-x-[25%] transition-all lg:hidden" />
                </span>
            </div>
        </a>
    );
}