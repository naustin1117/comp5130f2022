import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import React from 'react';

import Homepage from "./pages/Homepage";
import Layout from "./components/layout/Layout";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Newlisting from "./pages/Newlisting";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/Newlisting" element={<Newlisting />} />
      </Routes>
    </Layout>
  );
}

export default App;
