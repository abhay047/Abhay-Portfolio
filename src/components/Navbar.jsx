import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';

const Navbar = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('Home');

  // Clear any dark mode classes
  useEffect(() => {
    document.documentElement.classList.remove('dark');
    localStorage.removeItem('theme');
  }, []);

  // Listen for window scroll to trigger smooth full width expansion
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Dynamic ScrollSpy: Update active underline as user scrolls through sections
  useEffect(() => {
    if (location.pathname !== '/') {
      return;
    }

    const handleScrollSpy = () => {
      // If at the very top of the page, highlight Home
      if (window.scrollY < 120) {
        setActiveSection('Home');
        return;
      }

      // Check sections from bottom to top for accurate viewport detection
      const sections = [
        { id: 'contact-me', name: 'Contact Me' },
        { id: 'projects', name: 'Projects' },
        { id: 'skills', name: 'Skills' },
        { id: 'about', name: 'About' },
      ];

      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(section.name);
            return;
          }
        }
      }

      setActiveSection('Home');
    };

    window.addEventListener('scroll', handleScrollSpy, { passive: true });
    handleScrollSpy(); // Initial check

    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, [location.pathname]);

  // Active item tracking
  const activeItem = activeSection;

  const navLinks = [
    { name: 'Home', href: '#', isRoute: false },
    { name: 'About', href: '#about', isRoute: false },
    { name: 'Skills', href: '#skills', isRoute: false },
    { name: 'Projects', href: '#projects', isRoute: false },
    { name: 'Contact Me', href: '#contact-me', isRoute: false },
  ];

  // Smooth scroll handler for anchor links with navbar offset
  const handleNavClick = (e, link) => {
    setMobileMenuOpen(false);

    if (link.isRoute) {
      setActiveSection(link.name);
      return;
    }

    if (location.pathname === '/') {
      e.preventDefault();
      setActiveSection(link.name);

      if (link.name === 'Home') {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
        return;
      }

      const targetId = link.href.replace('#', '');
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const navbarOffset = 75; // Offset so section title is not hidden behind navbar
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navbarOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center pointer-events-none transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
      <nav
        className={`pointer-events-auto bg-[#DDE6ED]/40 backdrop-blur-2xl backdrop-saturate-180 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-[width,margin,border-radius,box-shadow] ${
          isScrolled
            ? 'w-full max-w-full mt-0 rounded-none border-b border-white/70 border-t-0 border-l-0 border-r-0 px-6 sm:px-10 lg:px-12 py-3.5 shadow-[0_4px_20px_0_rgba(0,0,0,0.04)]'
            : 'w-[92%] max-w-6xl mt-4 rounded-full border border-white/60 px-5 sm:px-8 py-3 shadow-[0_10px_35px_0_rgba(0,0,0,0.06),inset_0_1px_1px_0_rgba(255,255,255,0.7)]'
        }`}
        aria-label="Main Navigation"
      >
        <div className="max-w-6xl mx-auto w-full flex items-center justify-between">
          {/* Brand / Logo */}
          <Link
            to="/"
            onClick={(e) => {
              if (location.pathname === '/') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setActiveSection('Home');
              }
            }}
            className="flex items-center text-lg sm:text-xl font-bold tracking-tight text-[#252A34] select-none hover:opacity-90 transition-opacity"
          >
            <span>Abhay</span>
            <span className="mx-1.5 font-normal text-slate-400">|</span>
            <span className="font-medium text-slate-700">Portfolio</span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-7 lg:gap-9">
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

                  {/* Active Indicator (Clean Theme Underline) */}
                  {isActive && (
                    <span className="absolute -bottom-1 w-6 h-[2.5px] rounded-full bg-[#252A34] shadow-xs transition-all duration-300"></span>
                  )}
                </div>
              );

              return link.isRoute ? (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={(e) => handleNavClick(e, link)}
                  className="outline-none"
                >
                  {linkContent}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link)}
                  className="outline-none cursor-pointer"
                >
                  {linkContent}
                </a>
              );
            })}
          </div>

          {/* Right Action Section: Resume Button */}
          <div className="hidden lg:flex items-center">
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

          {/* Mobile & Tablet Hamburger Button */}
          <div className="flex lg:hidden items-center">
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
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          className={`pointer-events-auto transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isScrolled
              ? 'w-full rounded-b-2xl border-b border-white/70 p-4 bg-[#DDE6ED]/65 backdrop-blur-2xl shadow-xl'
              : 'w-[92%] max-w-6xl mt-2 rounded-2xl p-4 bg-[#DDE6ED]/60 backdrop-blur-2xl border border-white/60 shadow-xl'
          }`}
        >
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => {
              const isActive = activeItem === link.name;
              const linkClasses = `px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                isActive
                  ? 'bg-[#FDFFBC] border border-[#FFD369] text-[#252A34] font-bold shadow-2xs'
                  : 'text-slate-700 hover:bg-black/5 hover:text-[#252A34]'
              }`;

              return link.isRoute ? (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={(e) => handleNavClick(e, link)}
                  className={linkClasses}
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link)}
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