import { useNav } from "../../contexts/NavigationContext";

export function ChevronNav({ targetId, direction = "down" }) {
    const { scrollToSection } = useNav();
    const base_class = `${(direction == 'down') ? "rotate-90" : "rotate-270" } opacity-70 hover:opacity-100 transition-opacity`;

    return (
        <div className="flex justify-center hover:cursor-pointer py-4 w-full animate-pulse transition-transform hover:scale-110 active:scale-95" onClick={() => scrollToSection(targetId)}>
            <img src={`${import.meta.env.BASE_URL}/brand/svgs/rchevron.svg`} className={base_class} alt="down_chevron" width="32" />
        </div>
    );
}