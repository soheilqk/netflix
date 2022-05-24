import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Topbar from "./components/Topbar/Topbar";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Topbar />
        <div className="container">
          <Sidebar />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
