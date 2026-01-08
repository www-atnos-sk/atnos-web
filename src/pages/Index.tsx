import { Mail, Phone, MapPin } from "lucide-react";

const Index = () => {
  const currentYear = new Date().getFullYear();
  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=Jána+Hollého+883/18,+Trenčín,+911+05";

  return (
    // HLAVNÝ KONTAJNER
    <div 
      className="min-h-screen flex flex-col items-center justify-between relative font-sans text-gray-200"
      style={{
        background: "radial-gradient(ellipse at top, #2a2a2a 0%, #0a0a0a 70%)"
      }}
    >
      
      {/* --- HLAVNÁ SEKCIA --- */}
      <main className="flex-1 flex flex-col items-center justify-center w-full px-4">
        
        {/* 1. LOGO */}
        <div className="flex flex-col items-center justify-center w-full max-w-[300px] md:max-w-[500px]">
          <div className="animate-fade-up opacity-0 w-full flex justify-center" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
            <img 
              src="/logo.png" 
              alt="ATNOS Logo" 
              className="w-full h-auto object-contain"
            />
          </div>

        {/* 2. NOVÝ POPIS (TAGLINE) */}
          <div 
            className="mt-4 text-center opacity-0 animate-fade-up"
            style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
          >
            {/* Hlavný anglický tagline */}
            <h1 className="text-sm md:text-base text-gray-400 uppercase tracking-[0.3em] font-light">
              Engineering Solutions
            </h1>
            
            {/* SEO DOPLNOK - Malý text pod tým */}
            {/* Toto povie Google, čo presne robíte v slovenčine */}
            <p className="mt-2 text-[10px] md:text-xs text-gray-500 italic tracking-wider font-light">
              Inžinierska činnosť • Technické riešenia • Trenčín
            </p>
          </div>

        {/* 3. DIVIDER */}
          <div 
            className="h-[1px] w-3/5 mt-6 bg-gradient-to-r from-transparent via-gray-400 to-transparent opacity-0 animate-fade-up"
            style={{ 
              animationDelay: '0.3s',
              animationFillMode: 'forwards',
              boxShadow: '0 0 15px rgba(255, 255, 255, 0.2)' 
            }}
          ></div>
        </div>

        {/* 4. KONTAKTY - UPRAVENÉ ZAROVNANIE A MEDZERY */}
        <div className="mt-16 w-full max-w-6xl mx-auto flex justify-center">
          
          {/* ZMENA TU: gap-8 som zmenil na gap-2 (pre mobil) */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-center gap-2 md:gap-12">
            
            {/* Email */}
            <div 
              className="flex items-center gap-4 p-2 opacity-0 animate-fade-up"
              style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}
            >
              <div className="p-3 bg-white/5 rounded-lg border border-white/10 shrink-0">
                <Mail className="w-5 h-5 text-gray-400" />
              </div>
              <div className="text-left">
                <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-0.5">Email</p>
                <a 
                  href="mailto:info@atnos.sk" 
                  className="text-sm font-medium text-gray-300 hover:text-white transition-colors block"
                >
                  info@atnos.sk
                </a>
              </div>
            </div>

            {/* Telefon */}
            <div 
              className="flex items-center gap-4 p-2 opacity-0 animate-fade-up"
              style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}
            >
              <div className="p-3 bg-white/5 rounded-lg border border-white/10 shrink-0">
                <Phone className="w-5 h-5 text-gray-400" />
              </div>
              <div className="text-left">
                <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-0.5">Telefon</p>
                <a 
                  href="tel:+421907347310" 
                  className="text-sm font-medium text-gray-300 hover:text-white transition-colors block"
                >
                  +421 907 347 310
                </a>
              </div>
            </div>

            {/* Sídlo */}
            <div 
              className="flex items-center gap-4 p-2 opacity-0 animate-fade-up"
              style={{ animationDelay: '0.9s', animationFillMode: 'forwards' }}
            >
              <div className="p-3 bg-white/5 rounded-lg border border-white/10 shrink-0">
                <MapPin className="w-5 h-5 text-gray-400" />
              </div>
              <div className="text-left">
                <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-0.5">Sídlo</p>
                <a 
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-gray-300 hover:text-white transition-colors whitespace-nowrap block"
                >
                  Jána Hollého 883/18, Trenčín, 911 05
                </a>
              </div>
            </div>

          </div>
        </div>
      </main>

      {/* --- PÄTIČKA --- */}
      <footer className="w-full py-8 text-center opacity-0 animate-fade-up" style={{ animationDelay: '1.1s', animationFillMode: 'forwards' }}>
        
        {/* Právne informácie */}
        <div className="flex flex-col items-center justify-center gap-1 mb-6">
          <h3 className="text-xs md:text-sm text-gray-400 font-medium tracking-wide">
            ATNOS, s. r. o.
          </h3>
          <p className="text-[10px] md:text-xs text-gray-600 tracking-wider">
            IČO: 46 059 792
          </p>
        </div>

        {/* Copyright */}
        <div className="w-full px-4 border-t border-white/5 pt-4">
          <p className="text-[10px] text-gray-700 tracking-widest whitespace-nowrap">
            © {currentYear} ATNOS. Všetky práva vyhradené.
          </p>
        </div>
      </footer>

    </div>
  );
};

export default Index;