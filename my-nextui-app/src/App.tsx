/* eslint-disable */
import { Route, Routes } from "react-router-dom";
import IndexPage from "@/pages/index";
import BornPage from "@/pages/Born";
import PlanetsPage from "@/pages/Planets";
import StockPage from "@/pages/Stock";
import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "@/pages/Loading";

function App() {
  const [getData, setGetData] = useState<getData[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("/api/planetData")
      .then((res) => res.data)
      .then((data) => {
        setGetData(data);
        setTimeout(function () {
          setLoading(false);
        }, 3000);
      });
  }, []);

  if (loading) {
    return (
      <>
        <Loading setLoading={setLoading} />
      </>
    );
  } else {
    return (
      <Routes>
        <Route element={<IndexPage />} path="/" />
        <Route
          element={
            <BornPage
              setGetData={setGetData}
              setLoading={setLoading}
              loading={loading}
              getData={getData}
            />
          }
          path="/born"
        />
        <Route
          element={<PlanetsPage getData={getData} setLoading={setLoading} />}
          path="/planets"
        />
        <Route
          element={<StockPage getDataState={[getData, setGetData]} />}
          path="/stock"
        />
      </Routes>
    );
  }
}
export default App;
