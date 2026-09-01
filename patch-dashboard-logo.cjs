const fs = require('fs');
let content = fs.readFileSync('src/components/Dashboard.tsx', 'utf8');

// Replace mobile header logo
const mobileOld = `<h1 className="text-xl font-normal tracking-tight serif">
            Sonia<span className="text-[#D4A373] italic">Academy</span>
          </h1>`;
const mobileNew = `<div className="flex items-center gap-2">
            <div className="relative group">
              <div className="absolute inset-0 bg-[#D4A373] blur-md opacity-40 rounded-full"></div>
              <img src="/Logo.png" alt="Logo" className="w-8 h-8 object-contain relative z-10 drop-shadow-[0_0_8px_rgba(212,163,115,0.6)]" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
            </div>
            <h1 className="text-xl font-normal tracking-tight serif">
              Sonia<span className="text-[#D4A373] italic">Academy</span>
            </h1>
          </div>`;

content = content.replace(mobileOld, mobileNew);

// Replace Sidebar header logo
const sidebarOld = `<div>
            <h1 className="text-2xl font-normal tracking-tight serif">
              Sonia<span className="text-[#D4A373] italic">Academy</span>
            </h1>
            <p className="text-[10px] uppercase tracking-widest font-bold text-[#1A1A1A]/50 mt-1">
              {learningLanguage === 'french' ? (t as any).langFrench : learningLanguage === 'english' ? (t as any).langEnglish : (t as any).langItalian}
            </p>
          </div>`;
          
const sidebarNew = `<div className="flex flex-col items-center text-center w-full pt-4">
            <div className="relative group mb-4">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#D4A373] to-[#e8c39e] blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-700 rounded-full animate-pulse"></div>
              <div className="absolute inset-0 bg-white/20 rounded-full mix-blend-overlay"></div>
              <img 
                src="/Logo.png" 
                alt="Sonia Academy" 
                className="w-24 h-24 md:w-28 md:h-28 object-contain relative z-10 drop-shadow-[0_0_15px_rgba(212,163,115,0.5)] group-hover:scale-105 transition-transform duration-500 group-hover:drop-shadow-[0_0_25px_rgba(212,163,115,0.8)]"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
            </div>
            <h1 className="text-2xl font-normal tracking-tight serif mt-2">
              Sonia<span className="text-[#D4A373] italic">Academy</span>
            </h1>
            <p className="text-[10px] uppercase tracking-widest font-bold text-[#1A1A1A]/50 mt-2 bg-[#FAF7F2] px-3 py-1 rounded-full border border-[#1A1A1A]/5 inline-block">
              {learningLanguage === 'french' ? (t as any).langFrench : learningLanguage === 'english' ? (t as any).langEnglish : (t as any).langItalian}
            </p>
          </div>`;

content = content.replace(sidebarOld, sidebarNew);

fs.writeFileSync('src/components/Dashboard.tsx', content);
