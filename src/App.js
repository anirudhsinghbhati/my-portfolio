import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
import Certification from './components/Certification';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <>
      <Navbar />
      <Hero />

      <main>
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certification />
        <Contact />
      </main>
    </>
  );
}

export default App;