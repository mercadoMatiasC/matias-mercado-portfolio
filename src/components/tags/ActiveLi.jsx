import { useTranslation } from "react-i18next";

export function ActiveLi({ name, activeKey, activeTab, onClick }){
    const { i18n } = useTranslation();

    return (
        <li key={i18n.language} className="animate-lang-change flex flex-col hover:cursor-pointer gap-1 text-[15px] md:text-[22px]" onClick={onClick}>
            {name}
            {activeTab === activeKey && (
                <hr className="border-[#DE398E] border animate-in fade-in slide-in-from-left-2 duration-300" />
            )}
        </li>
    );
}