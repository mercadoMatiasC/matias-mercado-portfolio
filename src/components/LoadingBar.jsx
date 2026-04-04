export function LoadingBar ({ percentage }){
  return (
    <div className="flex flex-col gap-2 w-full max-w-md h-full">      
      <div className="relative w-full bg-zinc-900 border border-zinc-800 overflow-hidden h-8">
        <div className={`absolute top-0 left-0 h-full transition-all duration-1000 ease-out bg-linear-to-l from-[#FA45A3] to-[#9E2063]`} style={{ width: `${percentage}%` }} />
        <div className="absolute inset-0 z-10 border-3 border-black"
          style={{
            backgroundImage: `repeating-linear-gradient(
              to right,
              transparent,
              transparent 12px,
              #000 12px,
              #000 16px
            )`
          }}
        />
      </div>
    </div>
  );
};