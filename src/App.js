import Intro from "./components/intro";
import GlobalStyle from "./Global.style";
import "normalize.css";
import About from "./components/about";
import Projects from "./components/projects";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Intro />
      <About />
      <Projects />
    </div>
  );
}

export default App;
