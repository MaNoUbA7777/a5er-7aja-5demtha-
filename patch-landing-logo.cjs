const fs = require('fs');
let content = fs.readFileSync('src/components/LandingPage.tsx', 'utf8');

// 1. Replace the header logo
const headerOld = `<div className="flex items-center gap-4">
          <h1 className="text-3xl font-bold tracking-tighter serif">SONIA ACADEMY</h1>
          <span className="hidden md:inline-block text-[10px] uppercase tracking-[0.2em] bg-[#1A1A1A] text-white px-3 py-1.5">
            {t.subtitle}
          </span>
        </div>`;
        
const headerNew = `<div className="flex items-center gap-4">
          <div className="relative group flex shrink-0">
            <div className="absolute inset-0 bg-[#D4A373] blur-md opacity-40 rounded-full group-hover:opacity-60 transition-opacity"></div>
            <img src="/logo.png" alt="Sonia Academy Logo" className="w-10 h-10 md:w-12 md:h-12 object-contain relative z-10 drop-shadow-[0_0_8px_rgba(212,163,115,0.6)]" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tighter serif">SONIA ACADEMY</h1>
          <span className="hidden lg:inline-block text-[10px] uppercase tracking-[0.2em] bg-[#1A1A1A] text-white px-3 py-1.5 ml-2">
            {t.subtitle}
          </span>
        </div>`;

content = content.replace(headerOld, headerNew);

// 2. Replace the hero section logo
const heroOld = `<h1 className="text-7xl md:text-8xl lg:text-[10rem] serif font-normal tracking-tighter text-[#1A1A1A] mb-8 leading-none">
            SONIA ACADEMY
          </h1>
          <p className="text-xl md:text-2xl text-[#1A1A1A]/60 font-medium tracking-wide">
            {t.subtitle}
          </p>`;

const heroNew = `<div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 mb-8">
            <div className="relative group shrink-0">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#D4A373] to-[#e8c39e] blur-2xl opacity-40 group-hover:opacity-70 transition-opacity duration-1000 rounded-full animate-pulse"></div>
              <div className="absolute inset-0 bg-white/30 rounded-full mix-blend-overlay"></div>
              <img 
                src="/logo.png" 
                alt="Sonia Academy Logo" 
                className="w-40 h-40 md:w-48 md:h-48 lg:w-64 lg:h-64 object-contain relative z-10 drop-shadow-[0_0_20px_rgba(212,163,115,0.5)] group-hover:scale-105 transition-transform duration-700" 
                onError={(e) => { e.currentTarget.style.display = 'none'; }} 
              />
            </div>
            <h1 className="text-6xl md:text-8xl lg:text-[10rem] serif font-normal tracking-tighter text-[#1A1A1A] leading-none text-center md:text-left">
              SONIA<br/><span className="text-[#D4A373] italic">ACADEMY</span>
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-[#1A1A1A]/60 font-medium tracking-wide">
            {t.subtitle}
          </p>`;

content = content.replace(heroOld, heroNew);

fs.writeFileSync('src/components/LandingPage.tsx', content);
