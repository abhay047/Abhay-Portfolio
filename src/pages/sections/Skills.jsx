const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        {
          name: 'React.js',
          icon: (
            <svg className="w-6 h-6" viewBox="-11.5 -10.23174 23 20.46348">
              <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
              <g stroke="#61DAFB" strokeWidth="1" fill="none">
                <ellipse rx="11" ry="4.2" />
                <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                <ellipse rx="11" ry="4.2" transform="rotate(120)" />
              </g>
            </svg>
          ),
        },
        {
          name: 'Next.js',
          icon: (
            <svg className="w-6 h-6" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="12" fill="#000000" />
              <path
                fill="#ffffff"
                d="M17.82 17.65L9.62 6.8h2.09l6.39 9.17c-.74.62-1.53 1.18-2.28 1.68zm-7.65-4.2L6.8 8.78V17.2H5.17V6.8h1.63l5.05 6.65h-1.68z"
              />
            </svg>
          ),
        },
        {
          name: 'JavaScript',
          icon: (
            <svg className="w-6 h-6 rounded-sm overflow-hidden" viewBox="0 0 24 24">
              <rect width="24" height="24" fill="#F7DF1E" />
              <path
                fill="#000000"
                d="M12.3 16.5c-.3.4-.8.7-1.4.9-.6.2-1.3.3-2.1.3-1.4 0-2.4-.4-3-1.1-.6-.7-.9-1.8-.9-3.2v-4.9h2.3v5c0 .8.2 1.4.5 1.8.3.4.8.6 1.4.6.4 0 .7-.1 1-.2.3-.2.5-.4.6-.7v-6.5h2.3v8h-.7zm8.8-1.5c-.3.5-.7.9-1.2 1.2-.5.3-1.1.4-1.8.4-.6 0-1.1-.1-1.5-.4-.4-.3-.6-.7-.6-1.1 0-.4-.1-.7-.4-.9-.3-.2-.7-.4-1.3-.6l-.9-.3c1.1-.4 1.9-.8 2.3-1.3.4-.5.6-1.1.6-1.8 0-.9-.4-1.7-1.1-2.2-.7-.5-1.7-.8-2.8-.8-.9 0-1.7.2-2.3.6-.6.4-1 .9-1.3 1.6l-1.9 1.1c-.2-.4-.4-.7-.8-.9-.3-.2-.8-.3-1.3-.3-.5 0-.9.1-1.2.3-.3.2-.4.5-.4.8 0 .3.1.5.3.7.2.2.6.4 1.2.6l.9.3c1.2.4 2 .8 2.5 1.4.5.5.7 1.2.7 2 0 1-.4 1.8-1.2 2.3-.8.6-1.9.8-3.1.8-1.1 0-2.1-.3-2.9-.8-.8-.6-1.3-1.4-1.6-2.4l2.1-1.1z"
              />
            </svg>
          ),
        },
        {
          name: 'Tailwind CSS',
          icon: (
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#38BDF8">
              <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
            </svg>
          ),
        },
        {
          name: 'HTML5',
          icon: (
            <svg className="w-6 h-6" viewBox="0 0 24 24">
              <path fill="#E34F26" d="M3 2l1.6 18 7.4 2 7.4-2 1.6-18H3z" />
              <path fill="#EF652A" d="M12 3.8v16.3l5.9-1.6 1.3-14.7H12z" />
              <path
                fill="#ECECEC"
                d="M12 7.5H6.9l.4 4.1h4.7V7.5zm0 6.3H9.4l.2 2 2.4.6v2.1l-4.4-1.2-.3-3.5H5.1l.6 6.8 6.3 1.7V13.8z"
              />
              <path
                fill="#FFFFFF"
                d="M12 7.5h5.1l-.5 4.1H12v2.2h2.5l-.2 2-2.3.6v2.1l4.4-1.2.6-6.6h-5V7.5z"
              />
            </svg>
          ),
        },
        {
          name: 'CSS3',
          icon: (
            <svg className="w-6 h-6" viewBox="0 0 24 24">
              <path fill="#1572B6" d="M3 2l1.6 18 7.4 2 7.4-2 1.6-18H3z" />
              <path fill="#33A9DC" d="M12 3.8v16.3l5.9-1.6 1.3-14.7H12z" />
              <path
                fill="#ECECEC"
                d="M12 7.5H6.9l.4 4.1h4.7V7.5zm0 6.3H9.4l.2 2 2.4.6v2.1l-4.4-1.2-.3-3.5H5.1l.6 6.8 6.3 1.7V13.8z"
              />
              <path
                fill="#FFFFFF"
                d="M12 7.5h5.1l-.5 4.1H12v2.2h2.5l-.2 2-2.3.6v2.1l4.4-1.2.6-6.6h-5V7.5z"
              />
            </svg>
          ),
        },
        {
          name: 'Redux Toolkit',
          icon: (
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#764ABC">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 16.93V17h-2v1.93A8.006 8.006 0 0 1 4.07 13H6v-2H4.07A8.006 8.006 0 0 1 11 4.07V6h2V4.07A8.006 8.006 0 0 1 19.93 11H18v2h1.93A8.006 8.006 0 0 1 13 18.93zM12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
            </svg>
          ),
        },
      ],
    },
    {
      title: 'Backend',
      skills: [
        {
          name: 'Node.js',
          icon: (
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#539E43">
              <path d="M12 2l9 5.2v10.4L12 22l-9-4.4V7.2L12 2zm0 2.3L5.3 8.2v7.6L12 19.7l6.7-3.9V8.2L12 4.3zm0 3.2l4.5 2.6v5.2L12 17.9l-4.5-2.6v-5.2L12 7.5z" />
            </svg>
          ),
        },
        {
          name: 'Express.js',
          icon: (
            <svg className="w-6 h-6" viewBox="0 0 24 24">
              <rect width="24" height="24" rx="5" fill="#000000" />
              <text
                x="12"
                y="16"
                fill="#FFFFFF"
                fontSize="11"
                fontFamily="sans-serif"
                fontWeight="bold"
                textAnchor="middle"
              >
                ex
              </text>
            </svg>
          ),
        },
        {
          name: 'RESTful APIs',
          icon: (
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#0284C7"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="8" rx="2" ry="2" fill="#E0F2FE" />
              <rect x="2" y="14" width="20" height="8" rx="2" ry="2" fill="#E0F2FE" />
              <line x1="6" y1="6" x2="6.01" y2="6" stroke="#0284C7" strokeWidth="3" />
              <line x1="6" y1="18" x2="6.01" y2="18" stroke="#0284C7" strokeWidth="3" />
            </svg>
          ),
        },
        {
          name: 'JWT Auth',
          icon: (
            <svg className="w-6 h-6" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" fill="#FB015B" />
              <path
                fill="#ffffff"
                d="M12 6a2 2 0 0 0-2 2v2h4V8a2 2 0 0 0-2-2zm-4 4V8a4 4 0 0 1 8 0v2h.5A1.5 1.5 0 0 1 18 11.5v6a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 6 17.5v-6A1.5 1.5 0 0 1 7.5 10H8z"
              />
            </svg>
          ),
        },
      ],
    },
    {
      title: 'Database',
      skills: [
        {
          name: 'MongoDB',
          icon: (
            <svg className="w-6 h-6" viewBox="0 0 24 24">
              <path fill="#13AA52" d="M12 1.5C11.5 3 7 7.5 7 13.5c0 4 2.5 7.5 5 9 2.5-1.5 5-5 5-9 0-6-4.5-10.5-5-12z" />
              <path fill="#116149" d="M12 1.5v21c2.5-1.5 5-5 5-9 0-6-4.5-10.5-5-12z" />
            </svg>
          ),
        },
        {
          name: 'Mongoose',
          icon: (
            <svg className="w-6 h-6" viewBox="0 0 24 24">
              <rect width="24" height="24" rx="5" fill="#880000" />
              <ellipse cx="12" cy="7" rx="7" ry="2.5" fill="#FFFFFF" />
              <path d="M19 12c0 1.4-3.1 2.5-7 2.5s-7-1.1-7-2.5" stroke="#FFFFFF" strokeWidth="1.8" fill="none" />
              <path d="M5 7v10c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5V7" stroke="#FFFFFF" strokeWidth="1.8" fill="none" />
            </svg>
          ),
        },
      ],
    },
    {
      title: 'Tools & Workflow',
      skills: [
        {
          name: 'Git',
          icon: (
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#F05032">
              <path d="M21.6 10.7l-8.3-8.3a1.7 1.7 0 00-2.4 0L8.5 4.8l3 3a1.9 1.9 0 012.3 2.3l3 3a1.9 1.9 0 011.6 3.1 1.9 1.9 0 01-2.7-2.7l-2.8-2.8v-4.4a1.9 1.9 0 01-1.3-.7L8.7 8.5v6.2a1.9 1.9 0 01.5 1.3 1.9 1.9 0 01-3.8 0 1.9 1.9 0 011.4-1.8V7.5a1.9 1.9 0 011.1-1.6L5.5 3.5a1.7 1.7 0 00-2.4 0L.7 5.9a1.7 1.7 0 000 2.4l8.3 8.3a1.7 1.7 0 002.4 0l10.2-5.9a1.7 1.7 0 000-2.4z" />
            </svg>
          ),
        },
        {
          name: 'GitHub',
          icon: (
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#181717">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              />
            </svg>
          ),
        },
        {
          name: 'Postman',
          icon: (
            <svg className="w-6 h-6" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="11" fill="#FF6C37" />
              <path fill="#ffffff" d="M12 6a6 6 0 1 0 0 12 6 6 0 0 0 0-12zm-1.5 8.5v-5l4.5 2.5-4.5 2.5z" />
            </svg>
          ),
        },
        {
          name: 'Vite',
          icon: (
            <svg className="w-6 h-6" viewBox="0 0 24 24">
              <defs>
                <linearGradient id="viteGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#41D1FF" />
                  <stop offset="100%" stopColor="#BD34FE" />
                </linearGradient>
              </defs>
              <path
                fill="url(#viteGrad)"
                d="M21.5 2.5l-8.9 19.3c-.4.9-1.7.9-2.1 0L1.6 2.5c-.5-.9.4-1.9 1.4-1.5l8.7 3.5c.2.1.4.1.6 0l8.7-3.5c1-.4 1.9.6 1.5 1.5z"
              />
              <path fill="#FFD62E" d="M12 5.5l-4.5 10 4.5-2.5 4.5 2.5-4.5-10z" />
            </svg>
          ),
        },
        {
          name: 'VS Code',
          icon: (
            <svg className="w-6 h-6" viewBox="0 0 24 24">
              <path
                fill="#007ACC"
                d="M23.15 2.587L18.21.21a1.494 1.494 0 00-1.705.29l-9.46 8.63-4.44-3.4a1.002 1.002 0 00-1.42.21l-1.01 1.41a1 1 0 00.2 1.4l3.52 2.7-3.52 2.7a1 1 0 00-.2 1.4l1.01 1.41c.33.47.96.58 1.42.21l4.44-3.4 9.46 8.63a1.49 1.49 0 001.7.29l4.95-2.38a1.5 1.5 0 00.86-1.35V3.937c0-.59-.34-1.12-.86-1.35zM18 16.54l-5.64-4.54L18 7.46v9.08z"
              />
            </svg>
          ),
        },
        {
          name: 'NPM',
          icon: (
            <svg className="w-6 h-6" viewBox="0 0 24 24">
              <rect width="24" height="24" rx="4" fill="#CB3837" />
              <path fill="#FFFFFF" d="M4 7h16v10h-8v-6h-4v6H4V7z" />
            </svg>
          ),
        },
      ],
    },
  ];

  return (
    <section id="skills" className="py-10 sm:py-14">
      <div className="w-[94%] max-w-7xl mx-auto px-3 sm:px-4 lg:px-5">
        
        {/* Section Header */}
        <div className="text-center sm:text-left mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#FDFFBC] border border-[#FFD369] text-[#252A34] shadow-2xs mb-2.5">
            <span>Skills &amp; Tech Stack</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#252A34]">
            Technical Skills
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-2xl">
            Core technologies and tools I utilize across the full MERN development lifecycle.
          </p>
        </div>

        {/* Single Master Outer Box enclosing ALL categories */}
        <div className="rounded-3xl p-6 sm:p-10 bg-white/65 backdrop-blur-2xl border border-white/80 shadow-[0_15px_35px_rgba(0,0,0,0.05),inset_0_1px_1px_rgba(255,255,255,0.8)] flex flex-col gap-8 sm:gap-10">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={index !== skillCategories.length - 1 ? 'pb-8 sm:pb-10 border-b border-slate-300/60' : ''}
            >
              {/* Category Heading */}
              <div className="flex items-center gap-3 mb-4 sm:mb-5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FFD369] ring-4 ring-[#FDFFBC]"></span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#252A34] tracking-tight">
                  {category.title}
                </h3>
                <span className="text-xs font-semibold text-slate-500 font-mono">
                  ({category.skills.length})
                </span>
              </div>

              {/* Skills Grid: ONLY Logo + Name in a Box */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-3 px-3.5 py-3 rounded-2xl bg-white/80 hover:bg-white border border-slate-200/90 hover:border-[#FFD369] shadow-2xs hover:shadow-md hover:-translate-y-1 transition-all duration-200 group cursor-default"
                  >
                    {/* Authentic Brand Logo */}
                    <div className="shrink-0 group-hover:scale-110 transition-transform flex items-center justify-center">
                      {skill.icon}
                    </div>

                    {/* Skill Name */}
                    <span className="text-xs sm:text-sm font-bold text-[#252A34] group-hover:text-black transition-colors truncate">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;