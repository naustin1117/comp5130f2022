import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Layout from "./components/layout/Layout";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";

function App() {
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
  }
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Signin" element={<Signin />} />
      </Routes>
    </Layout>
  );
}

export default App;
