import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Land from "./views/Land";

import './App.css';

function App() {
  return (
      <BrowserRouter>
          <div>
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/land" element={<Land />} />
              </Routes>
          </div>
      </BrowserRouter>
  );
}

export default App;