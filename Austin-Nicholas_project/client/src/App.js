import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import React, {useState} from 'react';

import Homepage from "./pages/Homepage";
import Layout from "./components/layout/Layout";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";

function App() {
  const[returnData, setReturnData] = useState(['hi there']);
  const getData = async (url) => {
    const newData = await fetch(url, {
      method: "GET",
      headers: {
        'content-type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(res => res.json());
    console.log(newData);
    setReturnData(newData.result);
  }
  return (
    <Layout>
      <div>
        <button onClick={() => getData('/quit')}> Click Me!</button>
        <h1>{returnData}</h1>
      </div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Signin" element={<Signin />} />
      </Routes>
    </Layout>
  );
}

export default App;
