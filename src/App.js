import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
//Import Components
import Characters from "./components/Characters";
import Header from "./components/Header";
//Import Pages
import Comics from "./pages/Comics";
// import Favorites from "./pages/Favorites";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="*" element={<Characters />} />
        <Route path="/characters" />
        <Route path="/comics" element={<Comics />} />
        <Route path="/favorites" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
