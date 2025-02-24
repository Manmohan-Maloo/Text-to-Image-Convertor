import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Home from "./Pages/Home";
import Result from "./Pages/Result";
import BuyCredit from "./Pages/BuyCredit";
import NavBar from "./Componants/NavBar";
import Footer from "./Componants/Footer";
import Login from "./Componants/Login";
import { AppContext } from "./Context/AppContext.jsx";

const App = () => {
  const { showLogin } = useContext(AppContext);

  return (
    <div className="px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-gradient-to-b from-teal-50 to-orange-50">
      <ToastContainer position="bottom-right"/>
      <NavBar />
      {showLogin && <Login />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result" element={<Result />} />
        <Route path="/buy" element={<BuyCredit />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
