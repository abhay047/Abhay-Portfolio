import { useState } from 'react';

const GOOGLE_SCRIPT_URL =
  import.meta.env.VITE_GOOGLE_SHEET_API_URL ||
  'https://script.google.com/macros/s/AKfycbyv8Hbf1NUKx9tKmY61e72DRqChjUVQ8_Xe8xFDPfAFs_GuCspb2M-YR58baKD_uv080g/exec';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const validateField = (name, value) => {
    switch (name) {
      case 'name': {
        const trimmed = value.trim();
        if (!trimmed) {
          return 'Your name is required';
        }
        if (trimmed.length < 2) {
          return 'Name must be at least 2 characters';
        }
        if (!/^[a-zA-Z\s.'-]+$/.test(trimmed)) {
          return 'Name can only contain alphabetic letters';
        }
        return '';
      }

      case 'phone': {
        const trimmed = value.trim();
        if (!trimmed) {
          return 'Contact number is required';
        }
        const digits = trimmed.replace(/\D/g, '');
        if (digits.length < 10) {
          return 'Please enter a valid 10-digit mobile number';
        }
        if (digits.length > 15) {
          return 'Phone number cannot exceed 15 digits';
        }
        return '';
      }

      case 'email': {
        const trimmed = value.trim();
        if (!trimmed) {
          return 'Email address is required';
        }
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(trimmed)) {
          return 'Please enter a valid email address (e.g. name@example.com)';
        }
        return '';
      }

      case 'message': {
        const trimmed = value.trim();
        if (!trimmed) {
          return 'Project details or message is required';
        }
        if (trimmed.length < 10) {
          return 'Message must be at least 10 characters';
        }
        return '';
      }

      default:
        return '';
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let finalValue = value;

    // Strict input filter for phone: block alphabets and symbols
    if (name === 'phone') {
      finalValue = value.replace(/[^\d+ -]/g, '');
      if (finalValue.includes('+')) {
        finalValue = (finalValue.startsWith('+') ? '+' : '') + finalValue.replace(/\+/g, '');
      }
    }

    // Name: prevent numbers and invalid symbols
    if (name === 'name') {
      finalValue = value.replace(/[^a-zA-Z\s.'-]/g, '');
    }

    setFormData((prev) => ({ ...prev, [name]: finalValue }));

    // Revalidate live if touched or has existing error
    if (touched[name] || errors[name]) {
      const error = validateField(name, finalValue);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate all fields on submit
    const newErrors = {
      name: validateField('name', formData.name),
      phone: validateField('phone', formData.phone),
      email: validateField('email', formData.email),
      message: validateField('message', formData.message),
    };

    setErrors(newErrors);
    setTouched({
      name: true,
      phone: true,
      email: true,
      message: true,
    });

    const hasError = Object.values(newErrors).some((err) => Boolean(err));
    if (hasError) {
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');
    setSubmitted(false);

    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          phone: formData.phone.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
        }),
      });

      const result = await response.json();

      if (result && result.success) {
        setSubmitted(true);
        setFormData({
          name: '',
          phone: '',
          email: '',
          message: '',
        });
        setErrors({});
        setTouched({});
        setTimeout(() => {
          setSubmitted(false);
        }, 6000);
      } else {
        throw new Error(result?.message || 'Submission failed');
      }
    } catch (err) {
      console.error('Contact form submission error:', err);
      setErrorMessage(
        'Unable to send message right now. Please try again or email directly at work.abhay1976@gmail.com'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com',
      hoverClass: 'hover:text-[#0A66C2] hover:border-[#0A66C2] hover:bg-[#0A66C2]/15 hover:shadow-[0_4px_14px_rgba(10,102,194,0.25)]',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
    {
      name: 'GitHub',
      href: 'https://github.com',
      hoverClass: 'hover:text-[#181717] hover:border-[#181717] hover:bg-black/10 hover:shadow-[0_4px_14px_rgba(24,23,23,0.2)]',
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
      name: 'X (Twitter)',
      href: 'https://x.com',
      hoverClass: 'hover:text-black hover:border-black hover:bg-black/10 hover:shadow-[0_4px_14px_rgba(0,0,0,0.2)]',
      icon: (
        <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="contact-me" className="py-12 sm:py-16">
      <div className="w-[94%] max-w-7xl mx-auto px-3 sm:px-4 lg:px-5">
        
        {/* Section Header */}
        <div className="mb-8 sm:mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#FDFFBC] border border-[#FFD369] text-[#252A34] shadow-2xs mb-3">
              <span>CONTACT ME</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#252A34]">
              Let&apos;s connect &amp; build together.
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-xl leading-relaxed">
              Have a project idea, question, or want to collaborate? I&apos;m always open to discussing new opportunities.
            </p>
          </div>

          <div className="text-xs sm:text-sm text-slate-600 font-medium sm:text-right shrink-0">
            <span>Average response time: </span>
            <strong className="text-[#252A34]">within 24 hours</strong>
          </div>
        </div>

        {/* 2-Column Professional Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          
          {/* Left Column: Direct Contact Info (5 Cols) */}
          <div className="lg:col-span-5 rounded-3xl p-6 sm:p-8 bg-white/65 backdrop-blur-2xl border border-white/80 shadow-[0_15px_35px_rgba(0,0,0,0.05),inset_0_1px_1px_rgba(255,255,255,0.8)] flex flex-col justify-between">
            <div>
              {/* Profile Snippet */}
              <div className="flex items-center gap-3.5 pb-6 border-b border-slate-300/60">
                <div className="w-12 h-12 rounded-2xl bg-[#FDFFBC] border border-[#FFD369] text-[#252A34] font-bold text-xl flex items-center justify-center shadow-xs shrink-0">
                  A
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#252A34] tracking-tight">
                    Abhay
                  </h3>
                  <p className="text-xs text-slate-600 font-medium">
                    Full Stack Developer &amp; MERN Stack Developer
                  </p>
                </div>
              </div>

              {/* Direct Channels */}
              <div className="mt-6 flex flex-col gap-4">

                {/* Email Action Card */}
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

                {/* WhatsApp Action Card */}
                <a
                  href="https://wa.me/919259103492"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-white/70 hover:bg-white/95 border border-slate-200/90 hover:border-[#FFD369] transition-all flex items-center justify-between group shadow-2xs hover:shadow-md cursor-pointer hover:scale-[1.01]"
                  title="Chat directly on WhatsApp"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-xl bg-[#FDFFBC] border border-[#FFD369] flex items-center justify-center text-[#252A34] shrink-0 group-hover:scale-110 transition-transform">
                      <svg className="w-5.5 h-5.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.44 19.65L5.27 16.61L5.07 16.29C4.24 14.97 3.81 13.46 3.81 11.91C3.81 7.37 7.5 3.67 12.05 3.67ZM8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7.02 8.48 7.02 9.69C7.02 10.9 7.9 12.07 8.02 12.23C8.15 12.39 9.75 14.86 12.21 15.92C12.8 16.17 13.25 16.32 13.61 16.44C14.2 16.63 14.74 16.6 15.16 16.54C15.64 16.47 16.63 15.94 16.84 15.35C17.05 14.77 17.05 14.27 16.99 14.17C16.92 14.06 16.76 14 16.51 13.88C16.27 13.75 15.08 13.17 14.86 13.09C14.64 13 14.48 12.96 14.31 13.21C14.15 13.45 13.69 13.99 13.55 14.15C13.41 14.32 13.27 14.34 13.02 14.22C12.78 14.09 11.99 13.84 11.06 13.01C10.33 12.36 9.84 11.56 9.7 11.31C9.56 11.07 9.69 10.93 9.81 10.81C9.92 10.7 10.06 10.52 10.18 10.38C10.3 10.23 10.35 10.13 10.43 9.97C10.51 9.8 10.47 9.66 10.41 9.54C10.35 9.41 9.88 8.26 9.68 7.79C9.49 7.33 9.3 7.39 9.15 7.38C9.02 7.38 8.86 7.33 8.7 7.33H8.53Z" />
                      </svg>
                    </div>
                    <div>
                      <span className="block text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                        WhatsApp Instant Chat
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

            {/* Social Channels */}
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
                    className={`w-11 h-11 rounded-full bg-white/80 border border-slate-200/90 text-slate-600 flex items-center justify-center shadow-2xs hover:scale-110 active:scale-95 transition-all duration-200 group ${social.hoverClass}`}
                  >
                    <span className="group-hover:scale-110 transition-transform">
                      {social.icon}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Direct Inquiry Form (7 Cols) */}
          <div className="lg:col-span-7 rounded-3xl p-6 sm:p-8 md:p-10 bg-white/70 backdrop-blur-2xl border border-white/80 shadow-[0_15px_35px_rgba(0,0,0,0.05),inset_0_1px_1px_rgba(255,255,255,0.8)] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#252A34] tracking-tight">
                    Send a Message
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Fill out the details and I&apos;ll get back to you with a direct response.
                  </p>
                </div>
                <span className="hidden sm:inline-flex text-[11px] font-mono px-3 py-1 rounded-full bg-[#FDFFBC] border border-[#FFD369] text-[#252A34] font-semibold">
                  Direct Inquiry
                </span>
              </div>

              {/* Success Notification */}
              {submitted && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-300 text-emerald-800 text-sm font-semibold flex items-center gap-3 shadow-xs animate-in fade-in duration-300">
                  <span className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xs shrink-0 font-bold">
                    ✓
                  </span>
                  <div>
                    <p className="font-bold">Message sent successfully!</p>
                    <p className="text-xs text-emerald-700 font-normal mt-0.5">
                      Your response has been saved directly to my sheet. I&apos;ll get back to you shortly!
                    </p>
                  </div>
                </div>
              )}

              {/* Error Notification */}
              {errorMessage && (
                <div className="mb-6 p-4 rounded-2xl bg-rose-50 border border-rose-300 text-rose-800 text-sm font-semibold flex items-center gap-3 shadow-xs animate-in fade-in duration-300">
                  <span className="w-6 h-6 rounded-full bg-rose-500 text-white flex items-center justify-center text-xs shrink-0 font-bold">
                    !
                  </span>
                  <div>
                    <p className="font-bold">Failed to send message</p>
                    <p className="text-xs text-rose-700 font-normal mt-0.5">
                      {errorMessage}
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
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
                        onBlur={handleBlur}
                        placeholder="e.g. John Smith"
                        maxLength={60}
                        autoComplete="name"
                        required
                        className={`w-full pl-10 pr-4 py-2.5 rounded-2xl bg-white/80 border outline-none text-[#252A34] placeholder-slate-400 text-sm transition-all shadow-2xs ${
                          errors.name
                            ? 'border-rose-400 focus:border-rose-500 focus:ring-3 focus:ring-rose-500/20'
                            : 'border-slate-200/90 focus:border-[#FFD369] focus:ring-3 focus:ring-[#FFD369]/20'
                        }`}
                      />
                      <span className="absolute left-3.5 top-3 text-slate-400">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                          <circle cx="12" cy="7" r="4" />
                        </svg>
                      </span>
                    </div>
                    {errors.name && (
                      <p className="text-[11px] text-rose-600 font-medium mt-1.5 flex items-center gap-1 animate-in fade-in duration-200">
                        <span>⚠</span>
                        <span>{errors.name}</span>
                      </p>
                    )}
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
                        onBlur={handleBlur}
                        placeholder="e.g. 9876543210 or +91 9876543210"
                        inputMode="tel"
                        autoComplete="tel"
                        maxLength={18}
                        required
                        className={`w-full pl-10 pr-4 py-2.5 rounded-2xl bg-white/80 border outline-none text-[#252A34] placeholder-slate-400 text-sm transition-all shadow-2xs ${
                          errors.phone
                            ? 'border-rose-400 focus:border-rose-500 focus:ring-3 focus:ring-rose-500/20'
                            : 'border-slate-200/90 focus:border-[#FFD369] focus:ring-3 focus:ring-[#FFD369]/20'
                        }`}
                      />
                      <span className="absolute left-3.5 top-3 text-slate-400">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                      </span>
                    </div>
                    {errors.phone && (
                      <p className="text-[11px] text-rose-600 font-medium mt-1.5 flex items-center gap-1 animate-in fade-in duration-200">
                        <span>⚠</span>
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Email Address */}
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
                      onBlur={handleBlur}
                      placeholder="e.g. john@example.com"
                      autoComplete="email"
                      required
                      className={`w-full pl-10 pr-4 py-2.5 rounded-2xl bg-white/80 border outline-none text-[#252A34] placeholder-slate-400 text-sm transition-all shadow-2xs ${
                        errors.email
                          ? 'border-rose-400 focus:border-rose-500 focus:ring-3 focus:ring-rose-500/20'
                          : 'border-slate-200/90 focus:border-[#FFD369] focus:ring-3 focus:ring-[#FFD369]/20'
                      }`}
                    />
                    <span className="absolute left-3.5 top-3 text-slate-400">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                    </span>
                  </div>
                  {errors.email && (
                    <p className="text-[11px] text-rose-600 font-medium mt-1.5 flex items-center gap-1 animate-in fade-in duration-200">
                      <span>⚠</span>
                      <span>{errors.email}</span>
                    </p>
                  )}
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
                    onBlur={handleBlur}
                    placeholder="Briefly describe your requirements, timeline, or whatever is on your mind..."
                    maxLength={1000}
                    required
                    className={`w-full px-4 py-3 rounded-2xl bg-white/80 border outline-none text-[#252A34] placeholder-slate-400 text-sm transition-all shadow-2xs resize-none ${
                      errors.message
                        ? 'border-rose-400 focus:border-rose-500 focus:ring-3 focus:ring-rose-500/20'
                        : 'border-slate-200/90 focus:border-[#FFD369] focus:ring-3 focus:ring-[#FFD369]/20'
                    }`}
                  ></textarea>
                  {errors.message && (
                    <p className="text-[11px] text-rose-600 font-medium mt-1.5 flex items-center gap-1 animate-in fade-in duration-200">
                      <span>⚠</span>
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Action Bar */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold shadow-xs transition-all ${
                      isSubmitting
                        ? 'opacity-70 cursor-not-allowed bg-slate-200 border border-slate-300 text-slate-500'
                        : 'hover:shadow-lg hover:scale-[1.03] active:scale-95 cursor-pointer bg-[#FDFFBC] border border-[#FFD369] text-[#252A34]'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="w-4 h-4 animate-spin text-[#252A34]" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
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
                      </>
                    )}
                  </button>

                  <span className="text-[11px] text-slate-500 flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 1a4.5 4.5 0 0 0-4.5 4.5V9H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-.5V5.5A4.5 4.5 0 0 0 10 1Zm3 8V5.5a3 3 0 1 0-6 0V9h6Z" clipRule="evenodd" />
                    </svg>
                    Direct response guaranteed. No spam ever.
                  </span>
                </div>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;