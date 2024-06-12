/* eslint-disable */
import { createSpace } from "@/helper/createSpace";
import DefaultLayout from "@/layouts/default";
import { useEffect, useRef } from "react";
// import axios from "axios";
import "@/styles/Planets.css";
export default function PlanetsPage({ getData }: getData[] | any) {
  console.log("getData", getData);

  const spaceRef = useRef(null);
  useEffect(() => {
    // axios
    //   .get("/api/planetData")
    //   .then((res) => res.data)
    //   .then((data) => createSpace(data, spaceRef));
    createSpace(getData, spaceRef);
  });
  return (
    <DefaultLayout>
      <h2>planets</h2>
      <main className="main-container" ref={spaceRef}></main>
    </DefaultLayout>
  );
}
