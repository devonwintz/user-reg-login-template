import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/UserAccount/Login/Login";
import Signup from "./components/UserAccount/Signup/Signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
