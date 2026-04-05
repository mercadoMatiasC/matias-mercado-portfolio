export default function HomeRightPanel() {
  return (
    <section className='flex flex-col w-full justify-center items-center text-white md:justify-end md:items-start md:w-1/2 md:mt-15 md:flex-row'>
      <div className="mt-2 grid relative aspect-square max-w-175 justify-center place-items-center w-[60vw] sm:w-[20vh] md:w-[30vw] md:mt-15">
        <p className="col-start-1 row-start-1 z-0 text-[18vw] font-bold italic text-[#FA45A3]/15 pointer-events-none -translate-y-[95%] md:-translate-y-full md:text-[10vw]">
          Matías
        </p>
        <svg viewBox="0 0 100 100" className="col-start-1 row-start-1 w-full h-full">
          <polygon points="7,7 55,95 90,18" stroke="#9E2063" fill="none" strokeWidth="0.8px"/>
        </svg>
        <img src={`${import.meta.env.BASE_URL}/brand/svgs/blob.svg`} className="col-start-1 row-start-1 z-10 w-[80%] drop-shadow-2xl" />
        <img src={`${import.meta.env.BASE_URL}/brand/silhouette.webp`} fetchPriority="high" className="col-start-1 row-start-1 z-11 w-[55%] -translate-y-[20%] drop-shadow-2xl" />
      </div>

      <div className="flex w-full justify-center gap-6 md:translate-y-40 md:w-[10%] md:flex-col">
        <a href="https://www.linkedin.com/in/mercadomatiasc" target="_blank">
          <img src={`${import.meta.env.BASE_URL}/brand/svgs/linkedin.svg`} alt="LinkedIn" className="opacity-60 w-10 md:w-12"/>
        </a>
        <a href="https://github.com/mercadoMatiasC" target="_blank">
          <img src={`${import.meta.env.BASE_URL}/brand/svgs/github.svg`}   alt="GitHub"   className="opacity-60 w-10 md:w-12"/>
        </a>
        <a href="mailto:carlosmercado--@hotmail.com" target="_blank">
          <img src={`${import.meta.env.BASE_URL}/brand/svgs/letter.svg`}   alt="Letter"   className="opacity-60 w-10 md:w-12"/>
        </a>
      </div>
    </section>
  );
}