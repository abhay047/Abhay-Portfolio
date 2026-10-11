const About = () => {
  return (
    <section id="about" className="py-7 sm:py-11">
      <div className="w-[94%] max-w-7xl mx-auto px-3 sm:px-4 lg:px-5">
        
        {/* Section Header */}
        <div className="text-center sm:text-left mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#FDFFBC] border border-[#FFD369] text-[#252A34] shadow-2xs mb-2.5">
            <span>About Me</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-[#252A34]">
            Who I am &amp; What I do
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1.5 max-w-2xl">
            A look into my background, tech stack, and what drives my development workflow.
          </p>
        </div>

        {/* 2-Column Layout: Left = VS Code Mockup, Right = Detailed Info (No Image) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-stretch">
          
          {/* Left Column: Stylized VS Code Editor Mockup (7 Cols) */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden bg-[#1E222B] text-slate-200 border border-slate-700/60 shadow-[0_20px_50px_rgba(37,42,52,0.18)] flex flex-col justify-between">
            <div>
              {/* VS Code Titlebar */}
              <div className="bg-[#181B22] px-4 py-3 flex items-center justify-between border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#ff5f56] inline-block shadow-xs"></span>
                  <span className="w-3 h-3 rounded-full bg-[#ffbd2e] inline-block shadow-xs"></span>
                  <span className="w-3 h-3 rounded-full bg-[#27c93f] inline-block shadow-xs"></span>
                </div>
                <div className="text-[11px] font-mono text-slate-400 font-medium flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                  <span>abhay.profile.js — Visual Studio Code</span>
                </div>
                <div className="w-10"></div>
              </div>

              {/* Editor Tabs */}
              <div className="bg-[#15181E] flex items-center border-b border-slate-800 text-xs font-mono">
                <div className="px-4 py-2.5 bg-[#1E222B] border-r border-slate-800 border-t-2 border-t-[#FFD369] text-[#FDFFBC] flex items-center gap-2">
                  <span className="text-[#FFD369] font-bold text-[11px]">JS</span>
                  <span>abhay.js</span>
                  <span className="text-slate-500 hover:text-slate-300 ml-1 text-sm leading-none cursor-pointer">×</span>
                </div>
                <div className="px-4 py-2.5 text-slate-400 hover:text-slate-300 flex items-center gap-2 border-r border-slate-800 cursor-pointer">
                  <span className="text-cyan-400 font-bold text-[11px]">{`{}`}</span>
                  <span>stack.json</span>
                </div>
              </div>

              {/* Editor Breadcrumbs */}
              <div className="px-4 py-1.5 bg-[#1B1E26] text-[11px] font-mono text-slate-400 border-b border-slate-800/80 flex items-center gap-2">
                <span>src</span>
                <span>›</span>
                <span>developer</span>
                <span>›</span>
                <span className="text-slate-200">abhay.js</span>
              </div>

              {/* Code Area with Syntax Highlighting & Line Numbers */}
              <div className="p-3 sm:p-4 md:p-5 font-mono text-xs sm:text-[13px] leading-relaxed overflow-x-auto select-text">
                <div className="table w-full">
                  
                  {/* Line 1 */}
                  <div className="table-row">
                    <span className="table-cell pr-4 text-right text-slate-600 select-none w-8">1</span>
                    <span className="table-cell text-slate-500 italic">{'// Meet the developer behind the code'}</span>
                  </div>

                  {/* Line 2 */}
                  <div className="table-row">
                    <span className="table-cell pr-4 text-right text-slate-600 select-none w-8">2</span>
                    <span className="table-cell">
                      <span className="text-[#FF7B72]">const</span>{' '}
                      <span className="text-[#79C0FF]">abhay</span> = {'{'}
                    </span>
                  </div>

                  {/* Line 3 */}
                  <div className="table-row">
                    <span className="table-cell pr-4 text-right text-slate-600 select-none w-8">3</span>
                    <span className="table-cell pl-4">
                      <span className="text-[#79C0FF]">name</span>:{' '}
                      <span className="text-[#A5D6FF]">"Abhay"</span>,
                    </span>
                  </div>

                  {/* Line 4 */}
                  <div className="table-row">
                    <span className="table-cell pr-4 text-right text-slate-600 select-none w-8">4</span>
                    <span className="table-cell pl-4">
                      <span className="text-[#79C0FF]">role</span>:{' '}
                      <span className="text-[#FDFFBC] font-semibold">"Full Stack & MERN Developer"</span>,
                    </span>
                  </div>

                  {/* Line 5 */}
                  <div className="table-row">
                    <span className="table-cell pr-4 text-right text-slate-600 select-none w-8">5</span>
                    <span className="table-cell pl-4">
                      <span className="text-[#79C0FF]">location</span>:{' '}
                      <span className="text-[#A5D6FF]">"Modinagar, Uttar Pradesh, India"</span>,
                    </span>
                  </div>

                  {/* Line 6 */}
                  <div className="table-row">
                    <span className="table-cell pr-4 text-right text-slate-600 select-none w-8">6</span>
                    <span className="table-cell pl-4">
                      <span className="text-[#79C0FF]">coreStack</span>: [
                    </span>
                  </div>

                  {/* Line 7 */}
                  <div className="table-row">
                    <span className="table-cell pr-4 text-right text-slate-600 select-none w-8">7</span>
                    <span className="table-cell pl-8 text-[#A5D6FF]">
                      "MongoDB", "Express.js", "React.js", "Node.js",
                    </span>
                  </div>

                  {/* Line 8 */}
                  <div className="table-row">
                    <span className="table-cell pr-4 text-right text-slate-600 select-none w-8">8</span>
                    <span className="table-cell pl-8 text-[#A5D6FF]">
                      "Tailwind CSS", "JavaScript", "REST APIs"
                    </span>
                  </div>

                  {/* Line 9 */}
                  <div className="table-row">
                    <span className="table-cell pr-4 text-right text-slate-600 select-none w-8">9</span>
                    <span className="table-cell pl-4">],</span>
                  </div>

                  {/* Line 10 */}
                  <div className="table-row">
                    <span className="table-cell pr-4 text-right text-slate-600 select-none w-8">10</span>
                    <span className="table-cell pl-4">
                      <span className="text-[#79C0FF]">focus</span>:{' '}
                      <span className="text-[#A5D6FF]">"Scalable Web Architecture & Clean Code"</span>,
                    </span>
                  </div>

                  {/* Line 11 */}
                  <div className="table-row">
                    <span className="table-cell pr-4 text-right text-slate-600 select-none w-8">11</span>
                    <span className="table-cell pl-4">
                      <span className="text-[#79C0FF]">availableForOpportunities</span>:{' '}
                      <span className="text-[#FF7B72] font-semibold">true</span>,
                    </span>
                  </div>

                  {/* Line 12 */}
                  <div className="table-row">
                    <span className="table-cell pr-4 text-right text-slate-600 select-none w-8">12</span>
                    <span className="table-cell pl-4">
                      <span className="text-[#D2A8FF]">sayHello</span>: () =&gt; {'{'}
                    </span>
                  </div>

                  {/* Line 13 */}
                  <div className="table-row">
                    <span className="table-cell pr-4 text-right text-slate-600 select-none w-8">13</span>
                    <span className="table-cell pl-8">
                      <span className="text-[#FF7B72]">return</span>{' '}
                      <span className="text-[#A5D6FF]">"work.abhay1976@gmail.com"</span>;
                    </span>
                  </div>

                  {/* Line 14 */}
                  <div className="table-row">
                    <span className="table-cell pr-4 text-right text-slate-600 select-none w-8">14</span>
                    <span className="table-cell pl-4">{'}'}</span>
                  </div>

                  {/* Line 15 */}
                  <div className="table-row">
                    <span className="table-cell pr-4 text-right text-slate-600 select-none w-8">15</span>
                    <span className="table-cell">
                      {'};'}
                      <span className="inline-block w-2 h-4 bg-[#FDFFBC] ml-1 animate-pulse align-middle"></span>
                    </span>
                  </div>

                </div>
              </div>
            </div>

            {/* VS Code Status Bar */}
            <div className="bg-[#15181E] px-4 py-2 border-t border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1.5 text-[#FDFFBC]">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                  </svg>
                  <span>main*</span>
                </span>
                <span className="hidden sm:inline">0 errors, 0 warnings</span>
              </div>
              <div className="flex items-center gap-3">
                <span>UTF-8</span>
                <span>JavaScript</span>
                <span className="text-emerald-400 font-medium">● Prettier</span>
              </div>
            </div>
          </div>

          {/* Right Column: Detailed Bio & Info (No Image) (5 Cols) */}
          <div className="lg:col-span-5 rounded-3xl p-5 sm:p-6 lg:p-7 bg-white/65 backdrop-blur-2xl border border-white/80 shadow-[0_15px_35px_rgba(0,0,0,0.05),inset_0_1px_1px_rgba(255,255,255,0.8)] flex flex-col justify-between">
            <div>
              {/* Profile Overview */}
              <div className="pb-6 border-b border-slate-300/60">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#FDFFBC] border border-[#FFD369] text-[#252A34] font-bold text-xl flex items-center justify-center shadow-xs shrink-0">
                    A
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#252A34] tracking-tight">
                      Abhay
                    </h3>
                    <p className="text-xs text-slate-600 font-semibold">
                      Full Stack Developer &amp; MERN Stack Developer
                    </p>
                  </div>
                </div>

                <p className="text-sm text-slate-700 leading-relaxed mt-4">
                  I&apos;m a dedicated Full Stack Web Developer and MERN Stack Developer based in <strong className="text-[#252A34]">Modinagar, Uttar Pradesh, India</strong>. I specialize in building complete, scalable web applications with clean code, responsive user interfaces, and robust backend architectures.
                </p>
              </div>

              {/* Highlights Cards (No Images, pure modern UI) */}
              <div className="py-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                
                {/* Highlight 1: Core Stack */}
                <div className="p-3.5 rounded-2xl bg-white/80 border border-slate-200/90 shadow-2xs">
                  <div className="w-8 h-8 rounded-xl bg-[#FDFFBC] border border-[#FFD369] flex items-center justify-center text-[#252A34] mb-2 font-bold text-xs">
                    ⚛
                  </div>
                  <h4 className="text-xs font-bold text-[#252A34] uppercase tracking-wider">
                    Core Specialization
                  </h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    MERN Stack & Full Stack Web Development
                  </p>
                </div>

                {/* Highlight 2: Location */}
                <div className="p-3.5 rounded-2xl bg-white/80 border border-slate-200/90 shadow-2xs">
                  <div className="w-8 h-8 rounded-xl bg-[#FDFFBC] border border-[#FFD369] flex items-center justify-center text-[#252A34] mb-2 font-bold text-xs">
                    📍
                  </div>
                  <h4 className="text-xs font-bold text-[#252A34] uppercase tracking-wider">
                    Based In
                  </h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Modinagar, Uttar Pradesh, India
                  </p>
                </div>

                {/* Highlight 3: Development Philosophy */}
                <div className="p-3.5 rounded-2xl bg-white/80 border border-slate-200/90 shadow-2xs">
                  <div className="w-8 h-8 rounded-xl bg-[#FDFFBC] border border-[#FFD369] flex items-center justify-center text-[#252A34] mb-2 font-bold text-xs">
                    ⚡
                  </div>
                  <h4 className="text-xs font-bold text-[#252A34] uppercase tracking-wider">
                    Workflow
                  </h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Clean Architecture, Scalability & Performance
                  </p>
                </div>

                {/* Highlight 4: Availability */}
                <div className="p-3.5 rounded-2xl bg-white/80 border border-slate-200/90 shadow-2xs">
                  <div className="w-8 h-8 rounded-xl bg-[#FDFFBC] border border-[#FFD369] flex items-center justify-center text-[#252A34] mb-2 font-bold text-xs">
                    💼
                  </div>
                  <h4 className="text-xs font-bold text-[#252A34] uppercase tracking-wider">
                    Opportunities
                  </h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Open for Full-time Roles & Projects
                  </p>
                </div>

              </div>
            </div>

            {/* CTAs / Quick Actions */}
            <div className="pt-4 border-t border-slate-300/60 flex flex-col sm:flex-row items-center gap-3">
              <a
                href="#contact-me"
                onClick={(e) => {
                  e.preventDefault();
                  const targetElement = document.getElementById('contact-me');
                  if (targetElement) {
                    const navbarOffset = 75;
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - navbarOffset;
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: 'smooth',
                    });
                  }
                }}
                className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-bold shadow-xs hover:shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer bg-[#FDFFBC] border border-[#FFD369] text-[#252A34]"
              >
                <span>Get in Touch</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                  <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z" clipRule="evenodd" />
                </svg>
              </a>

              <a
                href="https://wa.me/919259103492"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-semibold bg-white/80 hover:bg-[#FDFFBC] border border-slate-300 hover:border-[#FFD369] text-[#252A34] shadow-xs hover:scale-105 active:scale-95 transition-all cursor-pointer"
                title="Send WhatsApp message"
              >
                <span>WhatsApp</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;