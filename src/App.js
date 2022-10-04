import Intro from "./components/intro";
import GlobalStyle from "./Global.style";
import "normalize.css";
import About from "./components/about";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Intro />
      <About />
    </div>
  );
}

export default App;
