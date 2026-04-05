import { useTranslation } from 'react-i18next';
import { MainButton } from '../../../components/forms/MainButton';
import { StylizedLi } from '../../../components/tags/StylizedLi';

export function Networks(){
    const { t } = useTranslation();

    return (
        <main className="text-white/80 flex flex-col bg-black/30 w-[90%] lg:w-[80%] lg:flex-row">
            {/* LEFT CONTAINER */}
            <span id="leftNetworkContainer" className="flex flex-col justify-between w-full h-[20vh] items-center gap-3 p-4 lg:p-8 lg:w-2/5 lg:h-[50vh]">
                <h2 className="text-2xl border-b-3 border-[#DE398E] lg:mt-8">{"< "+t('contactsocials.letstalk')+" />"}</h2>
                <p className="gap-3 text-md">
                    <span className="text-green-500 text-[8vh] font-extrabold overflow-hidden">.</span>
                    {t('contactsocials.availability')}
                </p>
            </span>

            {/* RIGHT CONTAINER */}
            <span className="flex flex-col w-full h-[32vh] lg:w-3/5 lg:h-[50vh] lg:justify-between">
                <h2 className="p-4 text-md lg:p-8 lg:text-2xl">
                    {t('contactsocials.mylinks')}
                </h2>

                <ul className="flex flex-col justify-center items-center gap-3 lg:gap-5">
                    <a href="https://www.linkedin.com/in/mercadomatiasc" target="_blank" className="socialLinks">
                        <StylizedLi>
                            <img loading="lazy" src={`${import.meta.env.BASE_URL}/brand/svgs/linkedin.svg`} alt="LinkedIn" width="35" />
                            <p>LinkedIn</p>
                        </StylizedLi>
                    </a>
                    <a href="https://github.com/mercadoMatiasC" target="_blank" className="socialLinks">
                        <StylizedLi>
                            <img loading="lazy" src={`${import.meta.env.BASE_URL}/brand/svgs/github.svg`} alt="GitHub" width="35" />
                            GitHub
                        </StylizedLi>
                    </a>
                    <a href="mailto:carlosmercado--@hotmail.com" target="_blank" className="socialLinks">
                        <StylizedLi>
                            <img loading="lazy" src={`${import.meta.env.BASE_URL}/brand/svgs/letter.svg`} alt="E-mail" width="35" />
                            {t('contactsocials.email')}
                        </StylizedLi>
                    </a>
                </ul>
                <div className='hidden lg:flex w-[90%] items-end justify-end py-8'>
                    <a href={`${import.meta.env.BASE_URL}/brand/myCV/Matias Mercado - CV.pdf`} download>
                        <MainButton name={t('buttons.downloadcv')}  />
                    </a>
                </div>
            </span>
        </main>
    );
}
