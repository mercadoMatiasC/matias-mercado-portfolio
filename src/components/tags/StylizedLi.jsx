export function StylizedLi({ children }){
    const li_class = "flex flex-row items-center bg-black/80 gap-3 w-4/5 p-2 text-md hover:-translate-y-[8%] hover:shadow-xl hover:shadow-blue-600/20 transition duration-300 ease-in-out lg:text-xl lg:p-3 hover:cursor-pointer";

    return(
        <li className={li_class}>
            { children }
        </li>
    );
}