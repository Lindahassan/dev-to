import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Auth/Login";
import Createacount from "./pages/Auth/Createacount";
import NotFound from "./pages/common/NotFound";
import Home from "./pages/Home/Home";



import "./App.css";


function App() {
 
  return (
    <div className="app">
      <Home/>
    </div>
  );
}
const MainApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Createacount />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainApp;
