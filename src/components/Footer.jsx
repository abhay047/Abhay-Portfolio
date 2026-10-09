import { Link } from 'react-router';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full mt-auto border-t border-slate-300/80 bg-[#DDE6ED]/60 backdrop-blur-md transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left: Version indicator */}
        <div className="flex items-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-white/90 border border-slate-300 text-slate-700 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
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

        {/* Right: Contact Page Button */}
        <div className="flex items-center">
          <Link
            to="/contact-me"
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 shadow-xs hover:shadow-md hover:scale-[1.03] active:scale-95 bg-[#FDFFBC] border border-[#FFD369] text-[#252A34]"
          >
            <span>Contact Me</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path
                fillRule="evenodd"
                d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;