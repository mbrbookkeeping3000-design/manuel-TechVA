import Nav from './components/Nav';
import Hero from './components/Hero';
import SkillsTicker from './components/SkillsTicker';
import Services from './components/Services';
import Process from './components/Process';
import Experience from './components/Experience';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen" style={{ background: '#0a0a0a' }}>
      <Nav />
      <main>
        <Hero />
        <SkillsTicker />
        <Services />
        <Process />
        <Experience />
        <Work />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
