import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';

const Navbar = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  // Ensure dark mode class is cleared from document root
  useEffect(() => {
    document.documentElement.classList.remove('dark');
    localStorage.removeItem('theme');
  }, []);

  // Active item tracking
  const currentPath = location.pathname;
  const activeItem = selectedItem || (
    currentPath === '/contact-me'
      ? 'Contact Me'
      : 'Home'
  );

  const navLinks = [
    { name: 'Home', href: '#', isRoute: false },
    { name: 'About', href: '#about', isRoute: false },
    { name: 'Skills', href: '#skills', isRoute: false },
    { name: 'Projects', href: '#projects', isRoute: false },
    { name: 'Contact Me', href: '/contact-me', isRoute: true },
  ];

  const handleNavClick = (link) => {
    setSelectedItem(link.name);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full px-4 sm:px-6 lg:px-8 pt-4 pb-2">
      <nav
        className="mx-auto max-w-6xl rounded-full px-5 sm:px-8 py-3 flex items-center justify-between bg-[#DDE6ED] shadow-lg shadow-black/5 border border-slate-300/80 backdrop-blur-md"
        aria-label="Main Navigation"
      >
        {/* Brand / Logo */}
        <Link
          to="/"
          onClick={() => setSelectedItem('Home')}
          className="flex items-center text-lg sm:text-xl font-bold tracking-tight text-[#252A34] select-none hover:opacity-90 transition-opacity"
        >
          <span>Abhay</span>
          <span className="mx-1.5 font-normal text-slate-400">|</span>
          <span className="font-medium text-slate-700">Portfolio</span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-7 lg:gap-9">
          {navLinks.map((link) => {
            const isActive = activeItem === link.name;

            const linkContent = (
              <div className="relative flex flex-col items-center py-1">
                <span
                  className={`text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? 'text-[#252A34] font-semibold'
                      : 'text-slate-600 hover:text-[#252A34]'
                  }`}
                >
                  {link.name}
                </span>

                {/* Active Indicator (Underline only) */}
                {isActive && (
                  <span className="absolute -bottom-1 w-6 h-0.5 rounded-full bg-indigo-600 shadow-[0_0_8px_rgba(99,102,241,0.8)]"></span>
                )}
              </div>
            );

            return link.isRoute ? (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => handleNavClick(link)}
                className="outline-none"
              >
                {linkContent}
              </Link>
            ) : (
              <a
                key={link.name}
                href={link.href}
                onClick={() => handleNavClick(link)}
                className="outline-none"
              >
                {linkContent}
              </a>
            );
          })}
        </div>

        {/* Right Action Section: Resume Button */}
        <div className="hidden md:flex items-center">
          <a
            href="#resume"
            className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 shadow-xs hover:shadow-md hover:scale-[1.03] active:scale-95 bg-[#FDFFBC] border border-[#FFD369] text-[#252A34]"
          >
            <span>Resume</span>
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
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="w-9 h-9 rounded-full flex items-center justify-center border border-slate-300/80 text-slate-700 hover:bg-black/5 transition-all cursor-pointer"
          >
            {mobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
              >
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="6" x2="20" y2="6" />
                <line x1="4" y1="18" x2="20" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 mx-auto max-w-6xl rounded-2xl p-4 bg-[#DDE6ED] border border-slate-300/80 shadow-xl transition-all">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => {
              const isActive = activeItem === link.name;
              const linkClasses = `px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-black/5 text-[#252A34] font-semibold'
                  : 'text-slate-600 hover:text-[#252A34]'
              }`;

              return link.isRoute ? (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => handleNavClick(link)}
                  className={linkClasses}
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => handleNavClick(link)}
                  className={linkClasses}
                >
                  {link.name}
                </a>
              );
            })}

            {/* Mobile Resume Button */}
            <div className="pt-2 border-t border-slate-300/40">
              <a
                href="#resume"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-xs bg-[#FDFFBC] border border-[#FFD369] text-[#252A34]"
              >
                <span>Resume</span>
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
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;