import { useState } from 'react';
import { Link } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        message: '',
      });
    }, 4500);
  };

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
    {
      name: 'Twitter / X',
      href: 'https://x.com',
      icon: (
        <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#DDE6ED] text-[#252A34] relative overflow-x-hidden selection:bg-[#FDFFBC] selection:text-[#252A34]">
      {/* Ambient Lighting & Glows matching palette */}
      <div className="absolute top-0 left-10 w-96 h-96 bg-[#FDFFBC]/40 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute top-28 right-0 w-[550px] h-[550px] bg-[#FFD369]/20 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-white/60 rounded-full blur-3xl pointer-events-none -z-10"></div>

      {/* Subtle Precision Tech Grid Pattern */}
      <div
        className="absolute inset-0 pointer-events-none -z-10 opacity-35"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(37, 42, 52, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(37, 42, 52, 0.08) 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
      ></div>

      <div>
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-16">
          {/* Executive Header Section */}
          <div className="mb-8 sm:mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <Link
                to="/"
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-white/80 hover:bg-[#FDFFBC] border border-slate-300/80 hover:border-[#FFD369] text-[#252A34] shadow-xs hover:scale-105 active:scale-95 transition-all group mb-3 cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform"
                >
                  <path
                    fillRule="evenodd"
                    d="M17 10a.75.75 0 0 1-.75.75H5.612l4.158 3.96a.75.75 0 1 1-1.04 1.08l-5.5-5.25a.75.75 0 0 1 0-1.08l5.5-5.25a.75.75 0 1 1 1.04 1.08L5.612 9.25H16.25A.75.75 0 0 1 17 10Z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Back to Home</span>
              </Link>
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#252A34]">
                Let's connect & build together.
              </h1>
            </div>

            <div className="text-xs sm:text-sm text-slate-600 font-medium sm:text-right">
              <span>Average response time: </span>
              <strong className="text-[#252A34]">within 24 hours</strong>
            </div>
          </div>

          {/* 2-Column Professional Architecture */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left Card: Developer Hub & Contact Methods (5 Cols) */}
            <div className="lg:col-span-5 rounded-3xl p-6 sm:p-8 bg-white/60 backdrop-blur-2xl border border-white/80 shadow-[0_15px_35px_rgba(0,0,0,0.05),inset_0_1px_1px_rgba(255,255,255,0.8)] flex flex-col justify-between">
              <div>
                {/* Profile Snippet */}
                <div className="flex items-center gap-3.5 pb-6 border-b border-slate-300/60">
                  <div className="w-12 h-12 rounded-2xl bg-[#FDFFBC] border border-[#FFD369] text-[#252A34] font-bold text-xl flex items-center justify-center shadow-xs shrink-0">
                    A
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-[#252A34] tracking-tight">
                      Abhay
                    </h2>
                    <p className="text-xs text-slate-600 font-medium">
                      Full Stack Developer & MERN Stack Developer
                    </p>
                  </div>
                </div>

                {/* Direct Contact Channels */}
                <div className="mt-6 flex flex-col gap-4">
                  {/* Phone / WhatsApp Card */}
                  {/* WhatsApp Direct Action Card */}
                  <a
                    href="https://wa.me/919259103492"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-2xl bg-white/70 hover:bg-white/95 border border-slate-200/90 hover:border-[#FFD369] transition-all flex items-center justify-between group shadow-2xs hover:shadow-md cursor-pointer hover:scale-[1.01]"
                    title="Send WhatsApp message to +91 92591 03492"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="w-11 h-11 rounded-xl bg-[#FDFFBC] border border-[#FFD369] flex items-center justify-center text-[#252A34] shrink-0 group-hover:scale-110 transition-transform">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                        </svg>
                      </div>
                      <div>
                        <span className="block text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                          WhatsApp
                        </span>
                        <span className="text-sm font-bold text-[#252A34] group-hover:text-black transition-colors">
                          +91 92591 03492
                        </span>
                      </div>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-[#FDFFBC] border border-slate-200 group-hover:border-[#FFD369] flex items-center justify-center text-slate-500 group-hover:text-[#252A34] transition-all">
                      <svg className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                      </svg>
                    </div>
                  </a>

                  {/* Email Direct Action Card */}
                  <a
                    href="mailto:work.abhay1976@gmail.com"
                    className="p-4 rounded-2xl bg-white/70 hover:bg-white/95 border border-slate-200/90 hover:border-[#FFD369] transition-all flex items-center justify-between group shadow-2xs hover:shadow-md cursor-pointer hover:scale-[1.01]"
                    title="Send email to work.abhay1976@gmail.com"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="w-11 h-11 rounded-xl bg-[#FDFFBC] border border-[#FFD369] flex items-center justify-center text-[#252A34] shrink-0 group-hover:scale-110 transition-transform">
                        <svg className="w-5.5 h-5.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                          <rect width="20" height="16" x="2" y="4" rx="2" />
                          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                        </svg>
                      </div>
                      <div>
                        <span className="block text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                          Email Address
                        </span>
                        <span className="text-sm font-bold text-[#252A34] group-hover:text-black transition-colors break-all">
                          work.abhay1976@gmail.com
                        </span>
                      </div>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-[#FDFFBC] border border-slate-200 group-hover:border-[#FFD369] flex items-center justify-center text-slate-500 group-hover:text-[#252A34] transition-all">
                      <svg className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                      </svg>
                    </div>
                  </a>

                  {/* Location Card */}
                  <a
                    href="https://maps.google.com/?q=Modinagar,+Uttar+Pradesh,+India"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-2xl bg-white/70 hover:bg-white/95 border border-slate-200/90 hover:border-[#FFD369] transition-all flex items-center justify-between group shadow-2xs hover:shadow-md cursor-pointer hover:scale-[1.01]"
                    title="View location on Google Maps"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="w-11 h-11 rounded-xl bg-[#FDFFBC] border border-[#FFD369] flex items-center justify-center text-[#252A34] shrink-0 group-hover:scale-110 transition-transform">
                        <svg className="w-5.5 h-5.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                      </div>
                      <div>
                        <span className="block text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                          Location
                        </span>
                        <span className="text-sm font-bold text-[#252A34] group-hover:text-black transition-colors">
                          Modinagar, Uttar Pradesh, India
                        </span>
                      </div>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-[#FDFFBC] border border-slate-200 group-hover:border-[#FFD369] flex items-center justify-center text-slate-500 group-hover:text-[#252A34] transition-all">
                      <svg className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                      </svg>
                    </div>
                  </a>
                </div>
              </div>

              {/* Social Channels in a single line of circles */}
              <div className="mt-8 pt-6 border-t border-slate-300/60">
                <span className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3.5">
                  Find me on Social Platforms
                </span>
                <div className="flex items-center gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={social.name}
                      aria-label={social.name}
                      className="w-11 h-11 rounded-full bg-white/80 hover:bg-[#FDFFBC] border border-slate-200/90 hover:border-[#FFD369] text-[#252A34] flex items-center justify-center shadow-2xs hover:scale-110 active:scale-95 transition-all group"
                    >
                      <span className="group-hover:scale-110 transition-transform">
                        {social.icon}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Card: High-End Contact Form (7 Cols) */}
            <div className="lg:col-span-7 rounded-3xl p-6 sm:p-8 md:p-10 bg-white/70 backdrop-blur-2xl border border-white/80 shadow-[0_15px_35px_rgba(0,0,0,0.05),inset_0_1px_1px_rgba(255,255,255,0.8)] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-[#252A34] tracking-tight">
                      Send a Message
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1">
                      Fill out the details and I'll get back to you with a direct response.
                    </p>
                  </div>
                  <span className="hidden sm:inline-flex text-[11px] font-mono px-3 py-1 rounded-full bg-[#FDFFBC] border border-[#FFD369] text-[#252A34] font-semibold">
                    Direct Inquiry
                  </span>
                </div>

                {/* Success Notification */}
                {submitted && (
                  <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-300 text-emerald-800 text-sm font-semibold flex items-center gap-3 shadow-xs">
                    <span className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xs shrink-0 font-bold">
                      ✓
                    </span>
                    <div>
                      <p className="font-bold">Message sent successfully!</p>
                      <p className="text-xs text-emerald-700 font-normal mt-0.5">
                        Thanks for reaching out. I'll get back to your inquiry promptly.
                      </p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="flex flex-col gap-4.5">
                  {/* Name & Contact No Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-semibold text-[#252A34] uppercase tracking-wider mb-1.5"
                      >
                        Your Name <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="e.g. John Smith"
                          required
                          className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-white/80 border border-slate-200/90 focus:border-[#FFD369] focus:ring-3 focus:ring-[#FFD369]/20 outline-none text-[#252A34] placeholder-slate-400 text-sm transition-all shadow-2xs"
                        />
                        <span className="absolute left-3.5 top-3 text-slate-400">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                            <circle cx="12" cy="7" r="4" />
                          </svg>
                        </span>
                      </div>
                    </div>

                    {/* Contact Number */}
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-xs font-semibold text-[#252A34] uppercase tracking-wider mb-1.5"
                      >
                        Contact No. <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="e.g. +91 98765 43210"
                          required
                          className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-white/80 border border-slate-200/90 focus:border-[#FFD369] focus:ring-3 focus:ring-[#FFD369]/20 outline-none text-[#252A34] placeholder-slate-400 text-sm transition-all shadow-2xs"
                        />
                        <span className="absolute left-3.5 top-3 text-slate-400">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-semibold text-[#252A34] uppercase tracking-wider mb-1.5"
                    >
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. john@company.com"
                        required
                        className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-white/80 border border-slate-200/90 focus:border-[#FFD369] focus:ring-3 focus:ring-[#FFD369]/20 outline-none text-[#252A34] placeholder-slate-400 text-sm transition-all shadow-2xs"
                      />
                      <span className="absolute left-3.5 top-3 text-slate-400">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <rect width="20" height="16" x="2" y="4" rx="2" />
                          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                        </svg>
                      </span>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-semibold text-[#252A34] uppercase tracking-wider mb-1.5"
                    >
                      Project Details / Message <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Briefly describe your requirements, timeline, or whatever is on your mind..."
                      required
                      className="w-full px-4 py-3 rounded-2xl bg-white/80 border border-slate-200/90 focus:border-[#FFD369] focus:ring-3 focus:ring-[#FFD369]/20 outline-none text-[#252A34] placeholder-slate-400 text-sm transition-all shadow-2xs resize-none"
                    ></textarea>
                  </div>

                  {/* Action Bar */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-95 transition-all cursor-pointer bg-[#FDFFBC] border border-[#FFD369] text-[#252A34]"
                    >
                      <span>Send Inquiry</span>
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
                    </button>

                    <span className="text-[11px] text-slate-500 flex items-center gap-1.5">
                      <svg className="w-3.5 h-3.5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 1a4.5 4.5 0 0 0-4.5 4.5V9H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-.5V5.5A4.5 4.5 0 0 0 10 1Zm3 8V5.5a3 3 0 1 0-6 0V9h6Z" clipRule="evenodd" />
                      </svg>
                      Privacy guaranteed. No spam ever.
                    </span>
                  </div>
                </form>
              </div>
            </div>

          </div>
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Contact;