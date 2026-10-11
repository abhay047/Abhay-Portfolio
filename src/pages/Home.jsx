import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#DDE6ED] text-[#252A34] relative overflow-x-hidden selection:bg-[#FDFFBC] selection:text-[#252A34]">
      {/* Ambient Lighting & Glows matching portfolio palette */}
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

        {/* Main Content with Hero, About, Skills, Projects & Contact Sections */}
        <main id="home" className="pt-20 sm:pt-24 pb-12">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;