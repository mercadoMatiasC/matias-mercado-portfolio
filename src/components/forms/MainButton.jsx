export function MainButton({ name = "Button", onClick }){
    return (
        <button className="text-white flex justify-center bg-black px-7 py-3 rounded-4xl border-2 border-[#DE398E] 
        gap-2 hover:cursor-pointer hover:shadow-xl hover:shadow-[#FA45A3]/40 transition-all duration-300 ease-in-out
        focus:outline-none focus:ring-1 focus:ring-[#FA45A3] focus:ring-opacity-75 text-[13px] text-center items-center xs:text-2xl sm:text-lg md:text-[18px]" onClick={onClick}>
            { name }
            <img src={`${import.meta.env.BASE_URL}/brand/svgs/rchevron.svg`} alt="chevron" width="20"></img>
        </button>
    );
}