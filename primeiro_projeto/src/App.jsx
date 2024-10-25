import "./App.css";
import Header from "./Componentes/Header";
import Home from "./Componentes/Home";
import Escocia from "./Componentes/Escocia";
import Footer from "./Componentes/Footer";
import Grand_Canyon from "./Componentes/Grand_Canyon";
import Muralha from "./Componentes/Muralha";
import Aruba from "./Componentes/Aruba";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Escocia" element={<Escocia />} />
          <Route path="/Grand_canyon" element={<Grand_Canyon />} />
          <Route path="/Muralha" element={<Muralha />} />
          <Route path="/Aruba" element={<Aruba />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
