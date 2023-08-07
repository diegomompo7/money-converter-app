import Header from "../../components/Header/Header";
import Favourite from "../../components/Favourite/Favourite";
import Footer from "../../components/Footer/Footer";
import React, { useState } from "react";
import SelectConverter from "../../components/SelectConverter/SelectConverter";

function Home() {
  const [savedMeasure, setSavedMeasure] = useState([]);
  return (
    <div className="home">
      <Header></Header>
      <SelectConverter savedMeasure={savedMeasure} setSavedMeasure={setSavedMeasure}></SelectConverter>
      <Favourite savedMeasure={savedMeasure} setSavedMeasure={setSavedMeasure}></Favourite>
      <Footer></Footer>
    </div>
  );
}
export default Home;
