import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Topbar from "./components/Topbar/Topbar";
import Home from "./pages/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Topbar />
        <div className="container">
          <Sidebar />
          <Home />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
