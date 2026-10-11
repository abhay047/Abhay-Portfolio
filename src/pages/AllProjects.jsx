import { useEffect } from 'react';
import { Link } from 'react-router';
import Footer from '../components/Footer';

// Reusable Tech Stack SVG Icons matching Projects.jsx functionality
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
  typescript: {
    name: 'TypeScript',
    icon: (
      <svg className="w-4.5 h-4.5 rounded-xs overflow-hidden" viewBox="0 0 24 24">
        <rect width="24" height="24" fill="#3178C6" />
        <path
          fill="#FFFFFF"
          d="M12.5 17.5h-2.1v-6h-2.4v-1.8h7v1.8h-2.5v6zm6.3-1.1c-.4.5-.9.9-1.5 1.1-.6.2-1.3.3-2.1.3-1.2 0-2.1-.3-2.8-.9-.7-.6-1-1.4-1-2.5 0-.7.2-1.3.6-1.8.4-.5.9-.8 1.6-1.1.7-.3 1.5-.5 2.5-.7l.9-.2c.7-.1 1.2-.3 1.5-.5.3-.2.4-.5.4-.9 0-.4-.2-.8-.5-1-.3-.3-.8-.4-1.4-.4-.6 0-1.1.1-1.5.4-.4.3-.6.7-.6 1.2h-2.1c0-.7.3-1.3.7-1.8.4-.5 1-.9 1.7-1.1.7-.2 1.5-.4 2.4-.4 1.2 0 2.2.3 2.9.8.7.6 1.1 1.4 1.1 2.4 0 .7-.2 1.3-.6 1.8-.4.5-.9.9-1.6 1.1-.7.2-1.6.5-2.6.7l-.8.2c-.6.1-1.1.3-1.4.5-.3.2-.5.5-.5.9 0 .4.2.8.5 1.1.4.3.9.4 1.5.4.7 0 1.2-.2 1.6-.5.4-.3.7-.8.8-1.4h2.1c-.2.8-.6 1.5-1.1 2.1z"
        />
      </svg>
    ),
  },
  nextjs: {
    name: 'Next.js',
    icon: (
      <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="#000000">
        <circle cx="12" cy="12" r="11" fill="#000" />
        <path d="M14.5 8h2v8h-2V11.2l-5.6 6.8H7.5V8h2v4.8L14.5 8z" fill="#FFF" />
      </svg>
    ),
  },
  postgresql: {
    name: 'PostgreSQL',
    icon: (
      <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="#336791">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.2 15.5c-1.8 0-3.2-.8-3.7-2.1h-1.5v-1.6h1.2c0-.3-.1-.6-.1-1s.1-.7.1-1H7.8v-1.6h1.5c.5-1.3 1.9-2.1 3.7-2.1s3.2.8 3.7 2.1h1.5v1.6H17c0 .3.1.6.1 1s-.1.7-.1 1h1.2v1.6h-1.5c-.5 1.3-1.9 2.1-3.7 2.1zm0-3.3c.9 0 1.6-.4 1.9-1.1-.1-.3-.1-.7-.1-1.1s0-.8.1-1.1c-.3-.7-1-1.1-1.9-1.1s-1.6.4-1.9 1.1c.1.3.1.7.1 1.1s0 .8-.1 1.1c.3.7 1 1.1 1.9 1.1z" />
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
  redux: {
    name: 'Redux',
    icon: (
      <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="#764ABC">
        <path d="M12 2a4 4 0 0 0-3.8 2.8A7 7 0 0 0 2 11.5a7 7 0 0 0 3.5 6.1A4 4 0 0 0 9 20a4 4 0 0 0 3-1.4 4 4 0 0 0 3 1.4 4 4 0 0 0 3.5-2.4 7 7 0 0 0 3.5-6.1 7 7 0 0 0-6.2-6.7A4 4 0 0 0 12 2zm0 2.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-5 4a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9zm10 0a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9z" />
      </svg>
    ),
  },
  prisma: {
    name: 'Prisma',
    icon: (
      <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="#2D3748">
        <path d="M12.7 2.2l8.8 17.5c.3.6 0 1.3-.6 1.6-.2.1-.5.1-.7.1H3.8c-.7 0-1.3-.6-1.3-1.3 0-.3.1-.5.2-.7L11.5 2.2c.3-.6 1-.8 1.6-.5.2.1.4.3.5.5zM12 5.5L5.7 18.7h12.6L12 5.5z" />
      </svg>
    ),
  },
  firebase: {
    name: 'Firebase',
    icon: (
      <svg className="w-4.5 h-4.5" viewBox="0 0 24 24">
        <path fill="#FFA000" d="M3.9 18.2L8.7 9.5l3.5 6.5L3.9 18.2z" />
        <path fill="#F57F17" d="M12.2 16L8.7 9.5l-4.8 8.7 8.3-2.2z" />
        <path fill="#FFCA28" d="M20.1 18.2L16.2 3.8c-.2-.6-.9-.9-1.5-.6-.2.1-.4.3-.5.5L12.2 16l7.9 2.2z" />
      </svg>
    ),
  },
};

const ALL_PROJECTS = [
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
  {
    id: 4,
    title: 'Productivity Dashboard',
    category: 'SaaS Analytics',
    technologies: [
      techIcons.typescript,
      techIcons.postgresql,
      techIcons.framer,
      techIcons.tailwind,
    ],
    description:
      'Enterprise metrics dashboard with interactive KPI cards, real-time revenue analytics, and performance visualizations.',
    githubUrl: 'https://github.com',
    liveUrl: 'https://github.com',
    mockupType: 'dashboard',
  },
  {
    id: 5,
    title: 'MERN Notes App',
    category: 'Productivity & Notes',
    technologies: [
      techIcons.react,
      techIcons.express,
      techIcons.mongodb,
      techIcons.javascript,
    ],
    description:
      'Cloud note-taking workspace with markdown editor, tagged organizational boards, and secure JWT authentication.',
    githubUrl: 'https://github.com',
    liveUrl: 'https://github.com',
    mockupType: 'notes',
  },
  {
    id: 6,
    title: 'FitTrack (Health SaaS)',
    category: 'Health & Fitness',
    technologies: [
      techIcons.nextjs,
      techIcons.prisma,
      techIcons.tailwind,
      techIcons.postgresql,
    ],
    description:
      'Comprehensive workout and nutrition logging platform with personalized calorie targets and weekly progress charts.',
    githubUrl: 'https://github.com',
    liveUrl: 'https://github.com',
    mockupType: 'health',
  },
  {
    id: 7,
    title: 'SoundScape Music Player',
    category: 'Audio & Media',
    technologies: [
      techIcons.react,
      techIcons.redux,
      techIcons.javascript,
      techIcons.tailwind,
    ],
    description:
      'Minimalist dark-mode audio workstation with frequency equalizer, playlist queues, and high-fidelity streaming.',
    githubUrl: 'https://github.com',
    liveUrl: 'https://github.com',
    mockupType: 'music',
  },
  {
    id: 8,
    title: 'TaskFlow (Kanban Board)',
    category: 'Project Management',
    technologies: [
      techIcons.react,
      techIcons.firebase,
      techIcons.javascript,
      techIcons.tailwind,
    ],
    description:
      'Agile drag-and-drop workflow management suite with sprint planning, status columns, and team collaboration.',
    githubUrl: 'https://github.com',
    liveUrl: 'https://github.com',
    mockupType: 'kanban',
  },
];

// Stylized visual mockups for projects without local static assets
const ProjectMockup = ({ type }) => {
  if (type === 'dashboard') {
    return (
      <div className="w-full h-full bg-[#181D26] text-slate-200 p-3 sm:p-4 flex flex-col justify-between select-none">
        <div className="flex items-center justify-between pb-2 border-b border-slate-700/60">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span className="text-[10px] font-mono text-slate-300 font-semibold uppercase tracking-wider">
              Analytics Hub
            </span>
          </div>
          <span className="text-[10px] font-mono text-emerald-400 font-bold bg-emerald-500/10 px-1.5 py-0.5 rounded">
            +32.4%
          </span>
        </div>
        <div className="grid grid-cols-3 gap-2 my-2">
          <div className="bg-slate-800/80 p-2 rounded-lg border border-slate-700/50">
            <span className="text-[9px] text-slate-400 block">MRR</span>
            <span className="text-xs font-bold text-white">$24.8k</span>
          </div>
          <div className="bg-slate-800/80 p-2 rounded-lg border border-slate-700/50">
            <span className="text-[9px] text-slate-400 block">Active</span>
            <span className="text-xs font-bold text-white">4,280</span>
          </div>
          <div className="bg-slate-800/80 p-2 rounded-lg border border-slate-700/50">
            <span className="text-[9px] text-slate-400 block">Uptime</span>
            <span className="text-xs font-bold text-emerald-400">99.9%</span>
          </div>
        </div>
        <div className="flex items-end gap-1.5 h-10 px-1 pt-1 bg-slate-800/40 rounded-md">
          <div className="flex-1 bg-amber-400/80 h-[45%] rounded-xs"></div>
          <div className="flex-1 bg-amber-400/80 h-[65%] rounded-xs"></div>
          <div className="flex-1 bg-amber-400/80 h-[50%] rounded-xs"></div>
          <div className="flex-1 bg-amber-400/80 h-[85%] rounded-xs"></div>
          <div className="flex-1 bg-amber-400/80 h-[70%] rounded-xs"></div>
          <div className="flex-1 bg-amber-400 h-[100%] rounded-xs shadow-xs"></div>
        </div>
      </div>
    );
  }

  if (type === 'notes') {
    return (
      <div className="w-full h-full bg-[#FAF9F6] p-3 sm:p-4 flex flex-col justify-between border-b border-amber-200/40 select-none">
        <div className="flex items-center justify-between pb-2 border-b border-slate-200">
          <span className="text-[10px] font-mono text-slate-600 font-semibold uppercase tracking-wider">
            Workspace Notes
          </span>
          <span className="w-2 h-2 rounded-full bg-amber-500"></span>
        </div>
        <div className="grid grid-cols-2 gap-2 my-2">
          <div className="bg-[#FDFFBC] p-2.5 rounded-lg border border-[#FFD369] shadow-2xs">
            <span className="text-[10px] font-bold text-[#252A34] block mb-1">Architecture Plan</span>
            <div className="w-full h-1 bg-slate-700/20 rounded-full mb-1"></div>
            <div className="w-3/4 h-1 bg-slate-700/20 rounded-full"></div>
          </div>
          <div className="bg-sky-100/90 p-2.5 rounded-lg border border-sky-300/80 shadow-2xs">
            <span className="text-[10px] font-bold text-[#252A34] block mb-1">Sprint Roadmap</span>
            <div className="w-full h-1 bg-slate-700/20 rounded-full mb-1"></div>
            <div className="w-1/2 h-1 bg-slate-700/20 rounded-full"></div>
          </div>
        </div>
        <div className="flex items-center gap-1.5 text-[9px] font-mono text-slate-500">
          <span className="px-1.5 py-0.5 rounded bg-slate-200/80 text-slate-700">12 Notes</span>
          <span>• Synchronized to Cloud</span>
        </div>
      </div>
    );
  }

  if (type === 'health') {
    return (
      <div className="w-full h-full bg-[#131926] text-white p-3 sm:p-4 flex flex-col justify-between select-none">
        <div className="flex items-center justify-between pb-2 border-b border-slate-800">
          <span className="text-[10px] font-mono text-teal-300 font-semibold uppercase tracking-wider">
            FitTrack Dashboard
          </span>
          <span className="text-[10px] font-mono text-teal-400">Live</span>
        </div>
        <div className="flex items-center justify-around my-2">
          <div className="text-center">
            <span className="text-[9px] text-slate-400 block">Calories</span>
            <span className="text-sm font-black text-rose-400">2,140</span>
          </div>
          <div className="text-center">
            <span className="text-[9px] text-slate-400 block">Steps</span>
            <span className="text-sm font-black text-teal-300">11,840</span>
          </div>
          <div className="text-center">
            <span className="text-[9px] text-slate-400 block">Active Time</span>
            <span className="text-sm font-black text-amber-300">84 min</span>
          </div>
        </div>
        <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden p-[1px]">
          <div className="bg-gradient-to-r from-teal-400 to-emerald-400 h-full rounded-full w-[82%]"></div>
        </div>
      </div>
    );
  }

  if (type === 'music') {
    return (
      <div className="w-full h-full bg-gradient-to-br from-[#1B192E] via-[#241F3D] to-[#12111E] text-white p-3 sm:p-4 flex flex-col justify-between select-none">
        <div className="flex items-center justify-between pb-1.5 border-b border-white/10">
          <span className="text-[10px] font-mono text-violet-300 font-semibold uppercase tracking-wider">
            SoundScape Audio
          </span>
          <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse"></span>
        </div>
        <div className="flex items-center justify-center gap-1.5 my-2 h-10">
          <div className="w-1 bg-violet-400/60 h-[40%] rounded-full"></div>
          <div className="w-1 bg-violet-400/80 h-[70%] rounded-full"></div>
          <div className="w-1 bg-violet-400 h-[100%] rounded-full"></div>
          <div className="w-1 bg-violet-300 h-[60%] rounded-full"></div>
          <div className="w-1 bg-violet-400 h-[85%] rounded-full"></div>
          <div className="w-1 bg-violet-400/90 h-[50%] rounded-full"></div>
          <div className="w-1 bg-violet-400/50 h-[30%] rounded-full"></div>
        </div>
        <div className="flex items-center justify-between text-[9px] font-mono text-slate-400">
          <span>02:45</span>
          <span className="text-violet-300 font-semibold">Web Audio 96kHz</span>
          <span>04:12</span>
        </div>
      </div>
    );
  }

  // kanban
  return (
    <div className="w-full h-full bg-[#1E232F] text-slate-200 p-3 sm:p-4 flex flex-col justify-between select-none">
      <div className="flex items-center justify-between pb-1.5 border-b border-slate-700/60">
        <span className="text-[10px] font-mono text-slate-300 font-semibold uppercase tracking-wider">
          TaskFlow Boards
        </span>
        <span className="text-[9px] font-mono bg-blue-500/20 text-blue-300 px-1.5 py-0.5 rounded">
          Sprint 04
        </span>
      </div>
      <div className="grid grid-cols-3 gap-1.5 my-2">
        <div className="bg-slate-800/80 p-1.5 rounded border border-slate-700/50">
          <span className="text-[8px] font-bold text-slate-400 block mb-1">To Do</span>
          <div className="w-full h-3 bg-slate-700/60 rounded-xs mb-1"></div>
          <div className="w-3/4 h-3 bg-slate-700/60 rounded-xs"></div>
        </div>
        <div className="bg-slate-800/80 p-1.5 rounded border border-slate-700/50">
          <span className="text-[8px] font-bold text-amber-300 block mb-1">In Progress</span>
          <div className="w-full h-3 bg-amber-400/20 border border-amber-400/40 rounded-xs mb-1"></div>
          <div className="w-2/3 h-3 bg-slate-700/60 rounded-xs"></div>
        </div>
        <div className="bg-slate-800/80 p-1.5 rounded border border-slate-700/50">
          <span className="text-[8px] font-bold text-emerald-400 block mb-1">Done</span>
          <div className="w-full h-3 bg-emerald-400/20 border border-emerald-400/40 rounded-xs"></div>
        </div>
      </div>
      <div className="flex items-center justify-between text-[9px] font-mono text-slate-400">
        <span>8 active tasks</span>
        <span className="text-emerald-400 font-bold">100% velocity</span>
      </div>
    </div>
  );
};

const AllProjects = () => {
  // Always scroll to top upon entering
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#DDE6ED] text-[#252A34] relative overflow-x-hidden selection:bg-[#FDFFBC] selection:text-[#252A34]">
      {/* Ambient Lighting & Glows matching portfolio palette */}
      <div className="absolute top-0 left-10 w-96 h-96 bg-[#FDFFBC]/40 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute top-28 right-0 w-[550px] h-[550px] bg-[#FFD369]/20 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-40 left-1/3 w-80 h-80 bg-white/60 rounded-full blur-3xl pointer-events-none -z-10"></div>

      {/* Subtle Precision Tech Grid Pattern */}
      <div
        className="absolute inset-0 pointer-events-none -z-10 opacity-35"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(37, 42, 52, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(37, 42, 52, 0.08) 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
      ></div>

      {/* Main Container without Navbar */}
      <div className="w-[94%] max-w-7xl mx-auto px-3 sm:px-4 lg:px-5 pt-8 sm:pt-12 pb-16 sm:pb-24">
        
        {/* Top Navigation Row: Back to Home Button (No Navbar) */}
        <div className="mb-6 sm:mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-4.5 py-2 rounded-full bg-white/85 hover:bg-[#FDFFBC] border border-[#FFD369] text-[#252A34] text-xs sm:text-sm font-semibold shadow-2xs hover:shadow-sm hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
            aria-label="Back to Home"
          >
            <svg
              className="w-4 h-4 text-[#252A34]"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Section Header */}
        <header className="mb-10 sm:mb-12">
          {/* Badge (NO ✦ sparkle) */}
          <div className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#FDFFBC] border border-[#FFD369] text-[#252A34] shadow-2xs mb-3">
            <span>ALL PROJECTS</span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#252A34] leading-[1.1]">
            All Projects &amp; Creations.
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base lg:text-lg text-slate-600 max-w-2xl mt-3 leading-relaxed">
            A complete collection of web applications, AI tools, and creative experiences I&apos;ve built.
          </p>
        </header>

        {/* 4-Column Projects Grid matching inspiration image layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {ALL_PROJECTS.map((project) => (
            <div
              key={project.id}
              className="rounded-3xl p-5 bg-white/75 backdrop-blur-xl border border-white/80 hover:border-[#FFD369] shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_22px_45px_rgba(0,0,0,0.1)] hover:-translate-y-1.5 transition-all duration-300 ease-out flex flex-col justify-between group"
            >
              <div>
                {/* Project Image Preview Container */}
                <div className="rounded-2xl overflow-hidden aspect-[16/10] bg-slate-200/50 border border-slate-200/70 mb-4.5 relative shadow-inner">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top select-none"
                      loading="lazy"
                    />
                  ) : (
                    <ProjectMockup type={project.mockupType} />
                  )}
                  {/* Subtle glass reflection overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>

                {/* Project Title */}
                <h3 className="text-lg font-bold text-[#252A34] tracking-tight group-hover:text-black transition-colors">
                  {project.title}
                </h3>

                {/* Tech Stack Brand Logos ONLY (No Names/Text) - EXACT same functionality as Projects.jsx */}
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
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {project.description}
                </p>
              </div>

              {/* Bottom Action Links matching Projects.jsx */}
              <div className="pt-4 mt-2 border-t border-slate-200/80 flex items-center justify-between">
                {/* GitHub link */}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-700 hover:text-[#252A34] transition-colors"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    />
                  </svg>
                  <span>GitHub</span>
                </a>

                {/* Live Demo link */}
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

        {/* Scroll Back to Top Button */}
        <div className="mt-12 sm:mt-16 flex justify-center">
          <button
            type="button"
            onClick={scrollToTop}
            className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-xs sm:text-sm font-bold bg-[#FDFFBC] border border-[#FFD369] text-[#252A34] shadow-xs hover:shadow-md hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
            aria-label="Scroll back to top"
          >
            <span>Back to Top</span>
            <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white/80 group-hover:bg-[#252A34] flex items-center justify-center transition-colors duration-200">
              <svg
                className="w-3.5 h-3.5 text-[#252A34] group-hover:text-[#FDFFBC] transition-transform duration-200 group-hover:-translate-y-0.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
              </svg>
            </span>
          </button>
        </div>

      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AllProjects;