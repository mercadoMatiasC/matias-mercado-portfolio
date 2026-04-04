import { useState } from 'react';

export function Tile({ x = 2, y = 2, colour = 'cyan', title = "", src, alt, hideOnMobile = false, setCounter }) {
    const sm_class = (y == 2) ? "max-h-[8vh]" : "max-h-[8vh] p-2";
    const md_class = (y == 2) ? "md:max-h-[12vh]" : "md:max-h-[9vh]";
    const img_class = `${sm_class} ${md_class}`;

    const colSpans = { 1: 'col-span-2 md:col-span-1', 2: 'col-span-2' };
    const rowSpans = { 1: 'row-span-1', 2: 'row-span-2' };

    let colour_setting = 'to-[#008AE6]/50 hover:shadow-[#008AE6]/60 shadow-[#008AE6]/40 border-2 border-[#008AE6]/50';

    switch (colour) {
        case 'magenta':
            colour_setting = 'to-[#D61ABD]/50 hover:shadow-[#D61ABD]/60 shadow-[#D61ABD]/40 border-2 border-[#D61ABD]/50'; 
            break;
        case 'gold':
            colour_setting = 'to-amber-400/50 hover:shadow-amber-400/60 shadow-amber-400/40 border-2 border-amber-500/50'; 
            break;
    }

    const [isTapped, setIsTapped] = useState(false);

    const handleInteraction = () => {
        if (!isTapped) {
            setIsTapped(true);
            setCounter(prev => prev + 1);

            setTimeout(() => {
                setIsTapped(false);
                setCounter(prev => prev - 1);
            }, 5000);
        }
    };

    const animation_classes = isTapped ? "-translate-y-[4%] shadow-2xl brightness-125 scale-[1.02]" : "hover:-translate-y-[2%] hover:shadow-xl";
    const base_class = `${hideOnMobile ? "hidden md:flex" : "flex"} ${colSpans[x]} ${rowSpans[y]} rounded-xl items-center justify-center bg-black hover:cursor-pointer bg-linear-to-b from-white/18 via-black ${colour_setting} ${animation_classes} transition-all duration-300 ease-in-out md:rounded-2xl`;

    return (
        <div className={base_class} title={title} onClick={handleInteraction} >
            <div className="flex-col w-full h-full text-white/90 flex items-center justify-center gap-2 overflow-hidden pointer-events-none">
                <img className={img_class} src={import.meta.env.BASE_URL + src} alt={alt} />
                <h2 className="hidden text-sm md:text-lg 2xl:flex">
                    {title}
                </h2>
            </div>
        </div>
    );
}