import { useTranslation, Trans } from "react-i18next";

export default function AboutMeLeftPanel() {
    const { t, i18n } = useTranslation();

    return (
        <div key={i18n.language} className="animate-lang-change w-full flex flex-col p-5 text-lg bg-black/50 text-white space-y-5 xl:w-3/5 xl:min-h-65">
            <p className="font-light md:text-white md:text-[2.3vh]">
                <Trans i18nKey="aboutme.whoami" components={{ 
                    1: <span className="text-[#FA45A3] font-semibold" />
                }} />
            </p>

            <p className="font-light md:text-white md:text-[2.3vh]">
                {t('aboutme.about')} 
            </p>
        </div>
    );
}