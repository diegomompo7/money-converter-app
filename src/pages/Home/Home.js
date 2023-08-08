import Header from "../../components/Header/Header";
import Favourite from "../../components/Favourite/Favourite";
import Footer from "../../components/Footer/Footer";
import React, { useState } from "react";
import SelectConverter from "../../components/SelectConverter/SelectConverter";

function Home() {
  const API_URL_FAVOURITE = `${process.env.REACT_APP_API_URL}/measure`;
  const [savedMeasure, setSavedMeasure] = useState([]);
  function fetchMeasure() {
    fetch(API_URL_FAVOURITE)
      .then(async (response) => {
        if (response.status !== 200) {
          alert("Ha ocurrido un error en la petición");
        }
        return await response.json();
      })
      .then((responseParsed) => {
        setSavedMeasure(responseParsed.data);
      })
      .catch((error) => {
        console.error(error);
        alert("Ha ocurrido un error en la petición");
      });
  }
  return (
    <div className="home">
      <Header></Header>
      <SelectConverter fetchMeasure={fetchMeasure}savedMeasure={savedMeasure} setSavedMeasure={setSavedMeasure}></SelectConverter>
      <Favourite fetchMeasure={fetchMeasure} savedMeasure={savedMeasure} setSavedMeasure={setSavedMeasure}></Favourite>
      <Footer></Footer>
    </div>
  );
}
export default Home;
