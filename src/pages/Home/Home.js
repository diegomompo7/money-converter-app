/* eslint-disable react/no-unknown-property */
/* eslint-disable no-undef */
/* eslint-disable no-sequences */
import "../../styles/layouts/home-layout.scss";
import React, { useRef, useState } from "react";

function Home() {
  const [fromConverter, setFromConverter] = useState();
  const fromRef = useRef(null)

  function medidas() {
    setFromConverter(fromRef?.current.value)
    console.log(fromRef?.current)
  }
  return (
    <div className="home">
      <p className="home__title">convert</p>
      <select ref={fromRef} onChange={() => medidas()}>
        <option value="km"> km --{">"} miles</option>
        <option value="miles">miles --{">"} Km</option>
        <option value="feet">feet --{">"} metres</option>
        <option value="metres">metres --{">"} feet</option>
        <option value="cm">cm --{">"} inches</option>
        <option value="inches">inches--{">"} cm</option>
      </select>
      <input></input> {fromConverter}
    </div>
  );
}

export default Home;
