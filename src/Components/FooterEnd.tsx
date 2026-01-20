export default function FooterGlow() {
  return (
    <div className="relative w-full bg-black overflow-hidden">
      <div className="relative h-44 overflow-hidden flex items-end justify-center">

        {/* Deep outer glow */}
        <h1
          className="absolute text-[120px] md:text-9xl font-extrabold 
                     tracking-[0.25em] scale-x-110
                     text-violet-900 opacity-50 blur-3xl translate-y-[50px]"
        >
          HUZFM
        </h1>

        {/* Inner energy flow */}
        <h1
          className="absolute text-[120px] md:text-9xl font-extrabold 
                     tracking-[0.25em] scale-x-110
                     text-transparent bg-clip-text
                     bg-[linear-gradient(120deg,#ede9fe,#7c3aed,#2e1065,#7c3aed,#ede9fe)]
                     bg-[length:400%_100%]
                     animate-energy translate-y-[50px]"
        >
          HUZFM
        </h1>

        {/* Sci-fi scan texture */}
        <h1
          className="absolute text-[120px] md:text-9xl font-extrabold 
                     tracking-[0.25em] scale-x-110
                     text-transparent bg-clip-text opacity-30
                     bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.12)_0px,rgba(255,255,255,0.12)_1px,transparent_1px,transparent_7px)]
                     animate-scan translate-y-[50px]"
        >
          HUZFM
        </h1>

        {/* Core rich text */}
        <h1
          className="relative text-[120px] md:text-9xl font-extrabold 
                     tracking-[0.25em] scale-x-110
                     text-transparent bg-clip-text
                     bg-gradient-to-b from-fuchsia-200 via-violet-500 to-indigo-950
                     translate-y-[50px]
                     drop-shadow-[0_0_25px_rgba(88,28,135,0.7)]
                     drop-shadow-[0_0_70px_rgba(46,16,101,0.5)]"
        >
          HUZFM
        </h1>
      </div>
    </div>
  );
}
