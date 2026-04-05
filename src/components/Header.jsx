import { useState } from "react";
import { ActiveLi } from "./tags/ActiveLi";
import { useTranslation } from 'react-i18next';
import { LangToggle } from "./forms/LangToggle";
import { useNav } from "../contexts/NavigationContext";

export function Header() {
    const { activeTab, scrollToSection } = useNav();
    const [menu, setMenuStatus] = useState(false);
    const { t } = useTranslation();

    const handleNav = (id) => {
        scrollToSection(id);
        setMenuStatus(false);
    };

    return (
        <header className="flex flex-col w-full bg-linear-to-l from-black/90 to-black/15 items-center justify-center text-white fixed top-0 z-50 lg:flex-row">
            <div className="flex w-full justify-end lg:hidden p-2">
                <img loading="lazy" src={`${import.meta.env.BASE_URL}/brand/svgs/burger.svg`} alt="Menu" width="50" height="50" onClick={() => setMenuStatus(!menu)}/>
            </div>

            <div className={`${menu ? 'flex' : 'hidden'} flex-col w-full justify-between p-4 lg:p-7 lg:w-[90%] lg:flex lg:flex-row lg:items-center`}>
                <img loading="lazy" src={`${import.meta.env.BASE_URL}/brand/svgs/MM.svg`} alt="Matías Mercado" width="50" height="50" className="hidden lg:block" />
                
                <ul className="flex flex-col gap-6 text-sm lg:text-[23px] lg:flex-row lg:translate-y-[8%]">   
                    <ActiveLi name={t('header.home')} activeKey="home" activeTab={activeTab} onClick={() => handleNav('home')} />
                    <ActiveLi name={t('header.aboutme')} activeKey="aboutme" activeTab={activeTab} onClick={() => handleNav('aboutme')} />
                    <ActiveLi name={t('header.skills')} activeKey="skills" activeTab={activeTab} onClick={() => handleNav('skills')} />
                    <ActiveLi name={t('header.projects')} activeKey="projects" activeTab={activeTab} onClick={() => handleNav('projects')} />
                    <ActiveLi name={t('header.contactsocials')} activeKey="contactsocials" activeTab={activeTab} onClick={() => handleNav('contactsocials')}/>
                    <LangToggle />
                </ul>
            </div>
        </header>
    );
}