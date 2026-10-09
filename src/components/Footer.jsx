const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full mt-auto border-t border-slate-300/80 bg-[#DDE6ED]/60 backdrop-blur-md transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left: Version indicator */}
        <div className="flex items-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-medium bg-white/90 border border-slate-300 text-slate-700 shadow-xs">
            <span>Version 1.0.0</span>
          </div>
        </div>

        {/* Center: Brand & Copyright */}
        <div className="flex items-center gap-2 text-sm text-slate-600 text-center">
          <span className="font-semibold text-[#252A34]">
            Abhay | Portfolio
          </span>
          <span className="text-slate-400">•</span>
          <span>© {currentYear} All rights reserved.</span>
        </div>

        {/* Right: Available Status Green Badge */}
        <div className="flex items-center">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/15 border border-emerald-500/40 text-emerald-800 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Available</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;