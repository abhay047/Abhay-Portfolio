import { useState, useEffect } from 'react';
import { Link } from 'react-router';

// Dynamic typing effect roles
const ROLES = [
  'Full Stack Web Developer',
  'MERN Stack Developer',
  'Web Developer',
];

const Hero = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedRole, setDisplayedRole] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect logic
  useEffect(() => {
    const fullRole = ROLES[currentRoleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayedRole.length < fullRole.length) {
          setDisplayedRole(fullRole.slice(0, displayedRole.length + 1));
        } else {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        if (displayedRole.length > 0) {
          setDisplayedRole(fullRole.slice(0, displayedRole.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % ROLES.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedRole, isDeleting, currentRoleIndex]);

  // Smooth scroll handler for anchor links with 75px navbar height offset
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarOffset = 75;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com',
      hoverClass: 'hover:text-[#0A66C2] hover:border-[#0A66C2] hover:bg-[#0A66C2]/10 hover:shadow-sm',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
    {
      name: 'GitHub',
      href: 'https://github.com',
      hoverClass: 'hover:text-[#181717] hover:border-[#181717] hover:bg-black/10 hover:shadow-sm',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          />
        </svg>
      ),
    },
    {
      name: 'WhatsApp',
      href: 'https://wa.me/919259103492',
      hoverClass: 'hover:text-[#25D366] hover:border-[#25D366] hover:bg-[#25D366]/10 hover:shadow-sm',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.44 19.65L5.27 16.61L5.07 16.29C4.24 14.97 3.81 13.46 3.81 11.91C3.81 7.37 7.5 3.67 12.05 3.67ZM8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7.02 8.48 7.02 9.69C7.02 10.9 7.9 12.07 8.02 12.23C8.15 12.39 9.75 14.86 12.21 15.92C12.8 16.17 13.25 16.32 13.61 16.44C14.2 16.63 14.74 16.6 15.16 16.54C15.64 16.47 16.63 15.94 16.84 15.35C17.05 14.77 17.05 14.27 16.99 14.17C16.92 14.06 16.76 14 16.51 13.88C16.27 13.75 15.08 13.17 14.86 13.09C14.64 13 14.48 12.96 14.31 13.21C14.15 13.45 13.69 13.99 13.55 14.15C13.41 14.32 13.27 14.34 13.02 14.22C12.78 14.09 11.99 13.84 11.06 13.01C10.33 12.36 9.84 11.56 9.7 11.31C9.56 11.07 9.69 10.93 9.81 10.81C9.92 10.7 10.06 10.52 10.18 10.38C10.3 10.23 10.35 10.13 10.43 9.97C10.51 9.8 10.47 9.66 10.41 9.54C10.35 9.41 9.88 8.26 9.68 7.79C9.49 7.33 9.3 7.39 9.15 7.38C9.02 7.38 8.86 7.33 8.7 7.33H8.53Z" />
        </svg>
      ),
    },
    {
      name: 'X (Twitter)',
      href: 'https://x.com',
      hoverClass: 'hover:text-black hover:border-black hover:bg-black/10 hover:shadow-sm',
      icon: (
        <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="hero" className="relative pt-6 sm:pt-10 pb-12 sm:pb-20 overflow-hidden">
      <div className="w-[94%] max-w-7xl mx-auto px-3 sm:px-4 lg:px-5">
        
        {/* Main 2-Column Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Text & Actions (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left order-2 lg:order-1">
            
            {/* Typing Role Header (Fixed height to prevent vertical layout shifts) */}
            <div className="h-8 sm:h-9 flex items-center gap-2 mb-3 sm:mb-4">
              <span className="text-sm sm:text-base md:text-lg font-mono font-medium text-slate-700 tracking-wide whitespace-nowrap">
                {displayedRole || '\u00A0'}
              </span>
              <span className="w-2 h-5 bg-[#252A34] animate-pulse inline-block shrink-0"></span>
            </div>

            {/* Massive Heading */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-[#252A34] leading-[1.08]">
              Hello, I&apos;m <br />
              <span className="relative inline-block mt-1">
                <span className="text-[#252A34]">Abhay</span>
                {/* Subtle highlight accent underline */}
                <span className="absolute left-0 bottom-1.5 w-full h-3 bg-[#FDFFBC] -z-10 rounded-sm opacity-80"></span>
              </span>
            </h1>

            {/* Subtitle / Bio */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-600 max-w-xl leading-relaxed mt-5 sm:mt-6 mb-8 sm:mb-9">
              I turn complex ideas into seamless, high-impact web experiences — building modern, scalable, and lightning-fast applications that make a difference.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-9 sm:mb-11">
              {/* Primary CTA: View My Work -> /all-projects */}
              <Link
                to="/all-projects"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm sm:text-base font-bold bg-[#FDFFBC] border border-[#FFD369] text-[#252A34] shadow-xs hover:shadow-md hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
              >
                <span>View My Work</span>
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

              {/* Secondary CTA: Contact Me -> #contact-me */}
              <a
                href="#contact-me"
                onClick={(e) => scrollToSection(e, 'contact-me')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm sm:text-base font-semibold bg-white/80 hover:bg-white border border-slate-300/80 hover:border-[#FFD369] text-[#252A34] shadow-2xs hover:shadow-sm hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
              >
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Icons Row */}
            <div className="flex items-center gap-3 sm:gap-3.5">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  title={social.name}
                  className={`w-10.5 h-10.5 sm:w-11 sm:h-11 rounded-xl bg-white/70 backdrop-blur-xs border border-slate-300 text-slate-600 flex items-center justify-center shadow-2xs hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer ${social.hoverClass}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>

          </div>

          {/* Right Column: Profile Visual & Ambient Halo (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative order-1 lg:order-2">
            
            {/* Ambient Lighting & Backdrop Halo with Deeper, Wider Spread Glow on Hover */}
            <div className="relative w-full max-w-[340px] sm:max-w-[400px] lg:max-w-[440px] aspect-square flex items-center justify-center group cursor-pointer">
              
              {/* Wide-spread outer ambient glow (deep saturated amber/gold with large radius) */}
              <div className="absolute -inset-10 sm:-inset-16 rounded-full bg-gradient-to-tr from-[#F59E0B]/40 via-[#FFD369]/30 to-[#D97706]/35 blur-3xl sm:blur-[90px] -z-10 pointer-events-none scale-95 group-hover:scale-135 opacity-45 group-hover:opacity-100 group-hover:from-[#F59E0B]/80 group-hover:via-[#FFB703]/85 group-hover:to-[#D97706]/75 transition-all duration-700 ease-out"></div>
              
              {/* Mid-spread intense radiant core glow */}
              <div className="absolute -inset-5 sm:-inset-8 rounded-full bg-gradient-to-r from-[#F59E0B]/0 via-[#FFB703]/0 to-[#D97706]/0 group-hover:from-[#F59E0B]/55 group-hover:via-[#FFD369]/70 group-hover:to-[#E68A00]/55 blur-2xl sm:blur-3xl -z-10 pointer-events-none transition-all duration-500 scale-95 group-hover:scale-115"></div>

              {/* Elegant frosted circular frame aura with darker amber/gold border & deep spread glow */}
              <div className="absolute inset-4 rounded-full bg-white/45 group-hover:bg-white/70 backdrop-blur-xl border border-white/80 group-hover:border-[#F59E0B] shadow-[0_20px_50px_rgba(0,0,0,0.06),inset_0_1px_1px_rgba(255,255,255,0.9)] group-hover:shadow-[0_0_80px_25px_rgba(245,158,11,0.5),inset_0_0_30px_rgba(255,211,105,0.85)] -z-10 transition-all duration-500"></div>
              
              {/* Profile Cutout Image with deep amber rim-light drop shadow on hover */}
              <div className="relative z-10 w-full h-full flex items-end justify-center overflow-hidden rounded-full">
                <img
                  src="/images/profile/Profile-removebg-preview.png"
                  alt="Abhay - Software Developer"
                  className="w-full h-auto max-h-[105%] object-cover object-top drop-shadow-[0_20px_35px_rgba(37,42,52,0.18)] group-hover:drop-shadow-[0_15px_45px_rgba(245,158,11,0.7)] group-hover:scale-[1.04] transition-all duration-500 select-none pointer-events-auto"
                  loading="eager"
                />
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;