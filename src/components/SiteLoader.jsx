import { useState, useEffect, useRef } from 'react';

const GREETINGS = [
  { text: 'Hello', lang: 'English' },
  { text: 'नमस्ते', lang: 'Hindi' },
  { text: 'Bonjour', lang: 'French' },
  { text: 'Hola', lang: 'Spanish' },
  { text: 'こんにちは', lang: 'Japanese' },
  { text: 'Ciao', lang: 'Italian' },
  { text: '안녕하세요', lang: 'Korean' },
  { text: 'Hallo', lang: 'German' },
  { text: 'Olá', lang: 'Portuguese' },
  { text: '你好', lang: 'Chinese' },
  { text: 'ਸਤਿ ਸ਼੍ਰੀ ਅਕਾਲ', lang: 'Punjabi' },
  { text: 'Hello', lang: 'Welcome' },
];

const SiteLoader = ({ onComplete }) => {
  const [index, setIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const onCompleteRef = useRef(onComplete);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  // Prevent background scrolling while loader is active
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  // Cycle through languages matching Apple's setup rhythm
  useEffect(() => {
    if (index < GREETINGS.length - 1) {
      const timer = setTimeout(() => {
        setIndex((prev) => prev + 1);
      }, 360);
      return () => clearTimeout(timer);
    } else {
      // Pause on the final "Hello" before triggering deep zoom-through exit
      const exitTimer = setTimeout(() => {
        setIsExiting(true);
      }, 650);

      // Complete unmount after zoom-through completes
      const completeTimer = setTimeout(() => {
        if (onCompleteRef.current) {
          onCompleteRef.current();
        }
      }, 1600);

      return () => {
        clearTimeout(exitTimer);
        clearTimeout(completeTimer);
      };
    }
  }, [index]);

  const current = GREETINGS[index];

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-[#DDE6ED] select-none overflow-hidden"
      style={{
        zIndex: 99999,
        opacity: isExiting ? 0 : 1,
        transition: 'opacity 800ms cubic-bezier(0.7, 0, 0.2, 1)',
        pointerEvents: isExiting ? 'none' : 'auto',
      }}
      aria-label="Site Loading Screen"
    >
      {/* Ambient Halo Lighting that expands softly with the zoom */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 sm:w-[550px] h-96 sm:h-[550px] bg-gradient-to-tr from-[#FDFFBC]/60 via-[#FFD369]/30 to-[#DDE6ED] rounded-full blur-3xl pointer-events-none -z-10"
        style={{
          transform: isExiting ? 'translate(-50%, -50%) scale(2.5)' : 'translate(-50%, -50%) scale(1)',
          opacity: isExiting ? 0 : 1,
          transition: 'transform 850ms cubic-bezier(0.7, 0, 0.2, 1), opacity 850ms ease',
        }}
      ></div>

      {/* Center Stage: Apple Hello Screen */}
      <main className="flex flex-col items-center justify-center text-center px-4 relative">
        {/* Dynamic Greeting Text with Epic Zoom-Through Reveal */}
        <div className="relative flex items-center justify-center min-h-[110px] sm:min-h-[160px]">
          <h1
            key={index}
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-[#252A34] tracking-tight leading-none drop-shadow-xs"
            style={{
              transform: isExiting ? 'scale(24)' : 'scale(1)',
              opacity: isExiting ? 0 : 1,
              filter: isExiting ? 'blur(6px)' : 'blur(0px)',
              transition: isExiting
                ? 'transform 900ms cubic-bezier(0.7, 0, 0.2, 1), opacity 750ms cubic-bezier(0.7, 0, 0.2, 1), filter 850ms ease-out'
                : 'all 200ms ease',
              transformOrigin: 'center center',
              willChange: 'transform, opacity, filter',
            }}
          >
            {current.text}
          </h1>
        </div>

        {/* Language Badge with pulsing accent dot (Fades out when zoom begins) */}
        <div
          className="flex items-center gap-2.5 mt-5 sm:mt-7 px-4 py-1.5 rounded-full bg-white/80 border border-[#FFD369] shadow-2xs"
          style={{
            opacity: isExiting ? 0 : 1,
            transform: isExiting ? 'scale(0.85) translateY(12px)' : 'scale(1) translateY(0)',
            transition: 'opacity 300ms ease, transform 300ms ease',
          }}
        >
          <span className="w-2 h-2 rounded-full bg-[#F59E0B] animate-ping"></span>
          <span className="text-xs sm:text-sm font-mono font-semibold text-[#252A34] tracking-widest uppercase">
            {current.lang}
          </span>
        </div>
      </main>
    </div>
  );
};

export default SiteLoader;