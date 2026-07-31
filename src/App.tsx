import "./App.css";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Info from "./components/Info";
import Footer from "./components/Footer";
import Impressum from "./components/Impressum";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Hero />
            <Projects />
            <Info />
            <Footer />
          </>
        }
      />
      <Route path="/Impressum" element={<Impressum />} />
    </Routes>
  );
}

export default App;
