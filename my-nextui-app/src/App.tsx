import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import BornPage from "@/pages/Born";
import PlanetsPage from "@/pages/Planets";
import StockPage from "@/pages/Stock";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<BornPage />} path="/born" />
      <Route element={<PlanetsPage />} path="/planets" />
      <Route element={<StockPage />} path="/stock" />
    </Routes>
  );
}

export default App;
