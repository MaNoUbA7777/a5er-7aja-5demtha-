const fs = require('fs');
let content = fs.readFileSync('src/components/LandingPage.tsx', 'utf8');

// Update imports
if (!content.includes('Phone, Facebook, Instagram, Linkedin')) {
  content = content.replace("import { Globe } from 'lucide-react';", "import { Globe, Phone, Facebook, Instagram, Linkedin } from 'lucide-react';");
}

// Update Footer
const oldFooterStart = `<footer className="py-16 border-t border-[#1A1A1A]/10 bg-[#F5F1E9] relative z-10">`;
const oldFooterEnd = `</footer>`;
const oldFooterRegex = /<footer className="py-16 border-t border-\[#1A1A1A\]\/10 bg-\[#F5F1E9\] relative z-10">[\s\S]*?<\/footer>/;

const newFooter = `<footer className="py-16 border-t border-[#1A1A1A]/10 bg-[#F5F1E9] relative z-10">
        <div className="max-w-5xl mx-auto px-6 flex flex-col gap-12 md:gap-16">
          {/* Contacts & Socials */}
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10 text-center md:text-left">
            <div className="flex flex-col items-center md:items-start gap-4">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#1A1A1A]/50">Nos contacts</h4>
              <a href="tel:+21654022351" className="text-xl md:text-2xl font-medium text-[#1A1A1A] hover:text-[#D4A373] transition-colors flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#D4A373]" />
                +216 54 022 351
              </a>
            </div>
            
            <div className="flex flex-col items-center md:items-start gap-4">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#1A1A1A]/50">Nos réseaux sociaux</h4>
              <div className="flex items-center gap-4">
                <a href="#" className="p-3 bg-white rounded-full border border-[#1A1A1A]/10 hover:border-[#D4A373] hover:text-[#D4A373] transition-all hover:scale-110 hover:shadow-md">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="p-3 bg-white rounded-full border border-[#1A1A1A]/10 hover:border-[#D4A373] hover:text-[#D4A373] transition-all hover:scale-110 hover:shadow-md">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="p-3 bg-white rounded-full border border-[#1A1A1A]/10 hover:border-[#D4A373] hover:text-[#D4A373] transition-all hover:scale-110 hover:shadow-md">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="w-full h-px bg-[#1A1A1A]/10"></div>

          {/* Acronyms */}
          <div className="flex flex-wrap justify-around items-end gap-6 md:gap-12 text-[#1A1A1A]">
            <div className="flex flex-col items-center gap-2 group">
              <span className="serif text-4xl md:text-6xl font-black">S</span>
              <span className="vertical-text text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Savoir</span>
            </div>
            <div className="flex flex-col items-center gap-2 group">
              <span className="serif text-4xl md:text-6xl font-black">O</span>
              <span className="vertical-text text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Ouverture</span>
            </div>
            <div className="flex flex-col items-center gap-2 group">
              <span className="serif text-4xl md:text-6xl font-black">N</span>
              <span className="vertical-text text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Niveau</span>
            </div>
            <div className="flex flex-col items-center gap-2 group">
              <span className="serif text-4xl md:text-6xl font-black">I</span>
              <span className="vertical-text text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Innovation</span>
            </div>
            <div className="flex flex-col items-center gap-2 group">
              <span className="serif text-4xl md:text-6xl font-black">A</span>
              <span className="vertical-text text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Apprentissage</span>
            </div>
          </div>
        </div>
      </footer>`;

content = content.replace(oldFooterRegex, newFooter);

fs.writeFileSync('src/components/LandingPage.tsx', content);
