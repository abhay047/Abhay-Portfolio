import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#F5F7FA]">
      <div>
        <Navbar />
        {/* Home Page Content */}
      </div>
      <Footer />
    </div>
  );
};

export default Home;