import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { CookiesProvider } from "react-cookie";

import Login from "./pages/login";
import Signup from "./pages/signup";
import Main from "./pages/main";
import { useSetRecoilState } from "recoil";
import { locationData } from "./atom/atom";

function App() {
  const setLocation = useSetRecoilState(locationData);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLocation({
        lat: position.coords.latitude,
        long: position.coords.longitude,
      });
    });
  }, [setLocation]);

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
