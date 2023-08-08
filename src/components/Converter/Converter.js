/* eslint-disable react/prop-types */
import React, { useState } from "react";
function Converter(props) {
  const API_URL_FAVOURITE = `${process.env.REACT_APP_API_URL}/measure`;
  const [result, setResult] = useState();

  function calculateConverter() {
    const decimalResult = props.inputRef?.current.value * props.selectedMeasure.calculated;
    setResult(Number.parseFloat(decimalResult).toFixed(2));
  }

  function favouriteMeasure() {
    if (props.selectedMeasure.from === undefined) {
      alert("Debe seleccionar una opción");
    } else if (props.inputRef.current.value === "") {
      alert("Debe introducir un número valido");
    } else {
      const newFavouriteMeasure = {
        numConverter: props.inputRef?.current.value,
        fromConverter: props.selectedMeasure.from,
        resultConverter: result,
        toConverter: props.selectedMeasure.to
      };

      fetch(API_URL_FAVOURITE, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newFavouriteMeasure),
      })
        .then(async (response) => {
          console.log(response.json)
          return await response.json();
        })
        .then(() => {
          props.fetchMeasure();
        })
        .catch((error) => {
          alert("Ha ocurrido un error en la petición");
          console.error(error);
        });
      props.inputRef.current.value = "";
    }
  }

  return (
    <div className="converter">
      <div className="converter__numberToCal">
        <input ref={props.inputRef} type="number" onChange={() => calculateConverter()} className="converter__input"></input> {props.selectedMeasure.from}
      </div>
      <div className="converter__calcule">
        <button onClick={() => favouriteMeasure()} className="converter__calcule--favourite">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.25 10.0298C3.25 7.3293 5.61914 5.25 8.4 5.25C9.83347 5.25 11.0948 5.92214 12 6.79183C12.9052 5.92214 14.1665 5.25 15.6 5.25C18.3809 5.25 20.75 7.3293 20.75 10.0298C20.75 11.8797 19.9611 13.5064 18.8682 14.8815C17.7771 16.2543 16.35 17.4193 14.9835 18.366C14.4615 18.7276 13.9335 19.0611 13.4503 19.3072C12.9965 19.5383 12.4747 19.75 12 19.75C11.5253 19.75 11.0035 19.5383 10.5497 19.3072C10.0665 19.0611 9.53846 18.7276 9.01653 18.366C7.65005 17.4193 6.22287 16.2543 5.13182 14.8815C4.03888 13.5064 3.25 11.8797 3.25 10.0298ZM8.4 6.75C6.32075 6.75 4.75 8.2791 4.75 10.0298C4.75 11.4333 5.34579 12.74 6.30609 13.9482C7.26828 15.1588 8.56292 16.2269 9.87074 17.133C10.3656 17.4758 10.8317 17.7675 11.2305 17.9706C11.6586 18.1886 11.9067 18.25 12 18.25C12.0933 18.25 12.3414 18.1886 12.7695 17.9706C13.1683 17.7675 13.6344 17.4758 14.1293 17.133C15.4371 16.2269 16.7317 15.1588 17.6939 13.9482C18.6542 12.74 19.25 11.4333 19.25 10.0298C19.25 8.2791 17.6792 6.75 15.6 6.75C14.4058 6.75 13.2908 7.46342 12.5946 8.36892C12.4526 8.55356 12.2329 8.66176 12 8.66176C11.7671 8.66176 11.5474 8.55356 11.4054 8.36892C10.7092 7.46342 9.59415 6.75 8.4 6.75Z"
              fill="white"
            />
          </svg>
        </button>
        <div className="converter__result">
          <p className="converter__result--title">{result}</p>
          <p className="converter__result--measureTo">{props.selectedMeasure.to}</p>
        </div>
      </div>
    </div>
  );
}

export default Converter;
