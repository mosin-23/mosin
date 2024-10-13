import './App.css';
import { NavBar, Home, Portfolio } from './Components';
import AboutMe from './Components/AboutMe';
import Companies from './Components/Companies';
import ContactUs from './Components/ContactUs';
import Footer from './Components/Footer';
import Skills from './Components/Skills';

function App() {
  return (
    <div className="App">
      {/* NavBar */}
      <NavBar />
      
      {/* Home Section */}
      <section id="home">
        <Home />
      </section>

      {/* About Me Section */}
      <section id="aboutme">
        <AboutMe />
      </section>

      {/* Skills Section */}
      <section id="skills">
        <Skills />
      </section>

      {/* Portfolio Section */}
      <section id="portfolio">
        <Portfolio />
      </section>

      {/* Companies Section */}
      <section id="certifications">
        <Companies />
      </section>

      {/* Contact Us Section */}
      <section id="contact">
        <ContactUs />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
