import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./Navbar";
import All from "./All";
import Fsd from "./Fsd";
import DataScience from "./DataScience";
import CyberSecurity from "./CyberSecurity";
import Career from "./Career";
import { Routes, BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<All />}></Route>
          <Route path="/Fsd" element={<Fsd />}></Route>
          <Route path="/DataScience" element={<DataScience />}></Route>
          <Route path="/CyberSecurity" element={<CyberSecurity />}></Route>
          <Route path="/Career" element={<Career />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
