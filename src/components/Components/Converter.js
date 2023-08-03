/* eslint-disable react/prop-types */
import React, { useState } from "react";
function Converter(props) {
  const [result, setResult] = useState();

  function calculateConverter() {
    const decimalResult = props.InputRef?.current.value * props.selectedMeasure.calculated;
    setResult(Number.parseFloat(decimalResult).toFixed(2));
  }

  function favouriteMeasure() {
    if (props.selectedMeasure.from === undefined) {
      alert("Debe seleccionar una opción");
    } else if (props.InputRef.current.value === "") {
      alert("Debe introducir un número valido");
    } else {
      const saved = props.InputRef?.current.value + " " + props.selectedMeasure.from + " --> " + result + " " + props.selectedMeasure.to;
      props.setSavedMeasure([...props.savedMeasure, saved]);
      props.InputRef.current.value = "";
    }
  }

  return (
    <div className="converter">
      <div>
        <input ref={props.InputRef} type="number" onChange={() => calculateConverter()}></input> {props.selectedMeasure.from}
      </div>
      <div>
        <button onClick={() => favouriteMeasure()}>Corazón</button>
        <p>
          {result} {props.selectedMeasure.to}
        </p>
      </div>
    </div>
  );
}

export default Converter;
