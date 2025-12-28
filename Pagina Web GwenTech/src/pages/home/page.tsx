
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Services from './components/Services';
import ComingSoon from './components/ComingSoon';
import About from './components/About';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import ServiceRequest from './components/ServiceRequest';
import Footer from './components/Footer';

const Home = () => {
  return (
    <div className="relative min-h-screen bg-black text-white">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Floating Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-float-slower"></div>
        
        {/* Floating Rubik's Cube */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 opacity-5">
          <img 
            src="https://readdy.ai/api/search-image?query=floating%20rubiks%20cube%20in%20space%20with%20purple%20and%20violet%20glow%20cosmic%20background%203D%20render%20transparent%20PNG%20style%20minimalist%20tech%20aesthetic%20holographic%20effect&width=512&height=512&seq=rubiks-cube-float-001&orientation=squarish"
            alt="Floating Rubik's Cube"
            className="w-full h-full object-contain animate-float-cube"
          />
        </div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Header />
        <Hero />
        <Features />
        <Services />
        <ComingSoon />
        <About />
        <Testimonials />
        <CTA />
        <ServiceRequest />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
