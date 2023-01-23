// import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./app.scss";

import Home from "./pages/home/Home";
import Topbar from "./components/topbar/Topbar";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <div className="app">
      <Topbar />

      <Home />
      <Footer />
    </div>
  );
}

export default App;
