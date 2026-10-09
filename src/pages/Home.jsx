import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#DDE6ED] text-[#252A34]">
      <div>
        <Navbar />
        {/* Home Page Content will go here */}
      </div>
      <Footer />
    </div>
  );
};

export default Home;