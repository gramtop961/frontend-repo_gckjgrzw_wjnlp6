import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';
import './styles.css';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* global neon ambience */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_-10%,rgba(124,58,237,0.15),transparent_70%)]" />
        <div className="absolute inset-0 mix-blend-screen opacity-30" style={{background:"radial-gradient(50%_40%_at_50%_120%,rgba(192,132,252,0.2)_0%,rgba(0,0,0,0)_70%)"}} />
      </div>

      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </div>
  );
}
