import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="overflow-hidden bg-gradient-to-br from-slate-950 via-purple-900 to-slate-950">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
