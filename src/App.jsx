import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Details from "./Components/Details";
import Favorites from "./Components/Favorites";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipe-item/:id" element={<Details />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
        
      </div>
    </>
  );
}

export default App;
