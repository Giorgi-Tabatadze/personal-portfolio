import Intro from "./components/intro";
import GlobalStyle from "./Global.style";
import "normalize.css";
import About from "./components/about";
import Projects from "./components/projects";
import ContactUs from "./components/contact";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Intro />
      <About />
      <Projects />
      <ContactUs />
    </div>
  );
}

export default App;
