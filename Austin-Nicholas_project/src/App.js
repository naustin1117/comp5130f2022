import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </Layout>
  );
}

export default App;
