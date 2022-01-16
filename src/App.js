import { useContext } from "react";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import ProductList from "./components/productList/ProductList";
import Skills from "./components/skills/Skills";
import Toggle from "./components/toggle/Toggle";
import ThemeContext from "./context";

const App = () => {
  const {darkMode} = useContext(ThemeContext);
  return (
    <main style={{backgroundColor: darkMode ? "#222831" : "white"}}>
      <Intro />
      <ProductList />
      <Skills />
      <Contact />
      <Toggle />
    </main>
  );
};

export default App;
