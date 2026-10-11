import { Link } from 'react-router';

const Projects = () => {
  const techIcons = {
    react: {
      name: 'React.js',
      icon: (
        <svg className="w-4.5 h-4.5" viewBox="-11.5 -10.23174 23 20.46348">
          <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
          <g stroke="#61DAFB" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      ),
    },
    nodejs: {
      name: 'Node.js',
      icon: (
        <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="#539E43">
          <path d="M12 2l9 5.2v10.4L12 22l-9-4.4V7.2L12 2zm0 2.3L5.3 8.2v7.6L12 19.7l6.7-3.9V8.2L12 4.3zm0 3.2l4.5 2.6v5.2L12 17.9l-4.5-2.6v-5.2L12 7.5z" />
        </svg>
      ),
    },
    mongodb: {
      name: 'MongoDB',
      icon: (
        <svg className="w-4.5 h-4.5" viewBox="0 0 24 24">
          <path fill="#13AA52" d="M12 1.5C11.5 3 7 7.5 7 13.5c0 4 2.5 7.5 5 9 2.5-1.5 5-5 5-9 0-6-4.5-10.5-5-12z" />
          <path fill="#116149" d="M12 1.5v21c2.5-1.5 5-5 5-9 0-6-4.5-10.5-5-12z" />
        </svg>
      ),
    },
    tailwind: {
      name: 'Tailwind CSS',
      icon: (
        <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="#38BDF8">
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
        </svg>
      ),
    },
    express: {
      name: 'Express.js',
      icon: (
        <svg className="w-4.5 h-4.5" viewBox="0 0 24 24">
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
    javascript: {
      name: 'JavaScript',
      icon: (
        <svg className="w-4.5 h-4.5 rounded-xs overflow-hidden" viewBox="0 0 24 24">
          <rect width="24" height="24" fill="#F7DF1E" />
          <path
            fill="#000000"
            d="M12.3 16.5c-.3.4-.8.7-1.4.9-.6.2-1.3.3-2.1.3-1.4 0-2.4-.4-3-1.1-.6-.7-.9-1.8-.9-3.2v-4.9h2.3v5c0 .8.2 1.4.5 1.8.3.4.8.6 1.4.6.4 0 .7-.1 1-.2.3-.2.5-.4.6-.7v-6.5h2.3v8h-.7zm8.8-1.5c-.3.5-.7.9-1.2 1.2-.5.3-1.1.4-1.8.4-.6 0-1.1-.1-1.5-.4-.4-.3-.6-.7-.6-1.1 0-.4-.1-.7-.4-.9-.3-.2-.7-.4-1.3-.6l-.9-.3c1.1-.4 1.9-.8 2.3-1.3.4-.5.6-1.1.6-1.8 0-.9-.4-1.7-1.1-2.2-.7-.5-1.7-.8-2.8-.8-.9 0-1.7.2-2.3.6-.6.4-1 .9-1.3 1.6l-1.9 1.1c-.2-.4-.4-.7-.8-.9-.3-.2-.8-.3-1.3-.3-.5 0-.9.1-1.2.3-.3.2-.4.5-.4.8 0 .3.1.5.3.7.2.2.6.4 1.2.6l.9.3c1.2.4 2 .8 2.5 1.4.5.5.7 1.2.7 2 0 1-.4 1.8-1.2 2.3-.8.6-1.9.8-3.1.8-1.1 0-2.1-.3-2.9-.8-.8-.6-1.3-1.4-1.6-2.4l2.1-1.1z"
          />
        </svg>
      ),
    },
    framer: {
      name: 'Framer Motion',
      icon: (
        <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="#0055FF">
          <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" />
        </svg>
      ),
    },
  };

  const projects = [
    {
      id: 1,
      title: 'Snitch (E-Commerce)',
      category: 'Full Stack E-Commerce',
      image: '/images/projects/Snitch.png',
      technologies: [
        techIcons.react,
        techIcons.nodejs,
        techIcons.mongodb,
        techIcons.tailwind,
        techIcons.express,
      ],
      description:
        'A premium apparel e-commerce platform inspired by contemporary urban fashion, featuring interactive catalogs, cart management, and seamless responsive design.',
      githubUrl: 'https://github.com',
      liveUrl: 'https://snitch.co.in',
    },
    {
      id: 2,
      title: 'Querium',
      category: 'Community & Discussion',
      image: '/images/projects/Querium.png',
      technologies: [
        techIcons.react,
        techIcons.nodejs,
        techIcons.express,
        techIcons.mongodb,
        techIcons.tailwind,
      ],
      description:
        'An intelligent discussion and query resolution platform enabling developers and students to post technical questions, share code snippets, and collaborate in real time.',
      githubUrl: 'https://github.com',
      liveUrl: 'https://github.com',
    },
    {
      id: 3,
      title: 'Wolf Studio',
      category: 'Creative Agency Showcase',
      image: '/images/projects/Wolf-Studio.png',
      technologies: [
        techIcons.react,
        techIcons.javascript,
        techIcons.tailwind,
        techIcons.framer,
      ],
      description:
        'A high-end creative digital studio showcase website crafted with smooth visual animations, engaging typography, and interactive aesthetic portfolio highlights.',
      githubUrl: 'https://github.com',
      liveUrl: 'https://github.com',
    },
  ];

  return (
    <section id="projects" className="py-12 sm:py-16">
      <div className="w-[94%] max-w-7xl mx-auto px-3 sm:px-4 lg:px-5">
        
        {/* Section Header */}
        <div className="text-center sm:text-left mb-8 sm:mb-12">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#FDFFBC] border border-[#FFD369] text-[#252A34] shadow-2xs mb-3">
            <span>PROJECTS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#252A34]">
            Things I&apos;ve Built &amp; Created.
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2.5 max-w-2xl leading-relaxed">
            A curated collection of my web applications, designed for performance, scaling, and seamless user experiences.
          </p>
        </div>

        {/* 3-Column Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="rounded-3xl p-5 sm:p-6 bg-white/70 backdrop-blur-xl border border-white/80 hover:border-[#FFD369] shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_22px_45px_rgba(0,0,0,0.1)] hover:-translate-y-1.5 transition-all duration-300 ease-out flex flex-col justify-between group"
            >
              <div>
                {/* Project Image Preview Container */}
                <div className="rounded-2xl overflow-hidden aspect-[16/10] bg-slate-200/50 border border-slate-200/70 mb-5 relative shadow-inner">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                  {/* Subtle glass reflection overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-bold text-[#252A34] tracking-tight group-hover:text-black transition-colors">
                  {project.title}
                </h3>

                {/* Tech Stack Brand Logos ONLY (No Names/Text) */}
                <div className="flex items-center flex-wrap gap-2 mt-2.5 mb-3.5">
                  {project.technologies.map((tech) => (
                    <div
                      key={tech.name}
                      title={tech.name}
                      className="w-8 h-8 rounded-xl bg-white/90 hover:bg-white border border-slate-200/90 hover:border-[#FFD369] shadow-2xs hover:shadow-xs hover:scale-110 transition-all duration-200 flex items-center justify-center cursor-default shrink-0"
                    >
                      <div className="w-4.5 h-4.5 flex items-center justify-center">
                        {tech.icon}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Bottom Action Links */}
              <div className="pt-5 mt-5 border-t border-slate-200/80 flex items-center justify-between">
                {/* GitHub Link */}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-700 hover:text-[#252A34] transition-colors"
                >
                  <svg
                    className="w-4 h-4 fill-current"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    />
                  </svg>
                  <span>GitHub</span>
                </a>

                {/* Live Demo Link */}
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-slate-800 hover:text-black hover:underline underline-offset-4 transition-all"
                >
                  <span>Live Demo</span>
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
          ))}
        </div>

        {/* View All Projects CTA Button */}
        <div className="mt-12 sm:mt-14 flex justify-center">
          <Link
            to="/all-projects"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold bg-[#FDFFBC] border border-[#FFD369] text-[#252A34] shadow-xs hover:shadow-lg hover:scale-[1.03] active:scale-98 transition-all duration-300"
          >
            <span>View All Projects</span>
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
    </section>
  );
};

export default Projects;