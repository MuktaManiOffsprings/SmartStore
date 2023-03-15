import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Landing from "./views/Landing";
import Login from "./views/Login";
import LoginWithOTP from "./views/LoginwithOTP";

import "./App.css"

function App() {
    const user = false;

    return (
        <BrowserRouter>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/landing" element={<Landing />} />
                    <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
                    <Route path="/loginwithOTP" element={<LoginWithOTP />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
