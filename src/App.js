import React from "react";
import { Routes, Route } from "react-router-dom";
import { CookiesProvider } from "react-cookie";

import Login from "./pages/login";
import Signup from "./pages/signup";
import Main from "./pages/main";

function App() {
  return (
    <CookiesProvider>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </CookiesProvider>
  );
}

export default App;
