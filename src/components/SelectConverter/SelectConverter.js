/* eslint-disable react/prop-types */
import Converter from "../Converter/Converter";
import React, { useRef, useState } from "react";

function SelectConverter(props) {
  const [selectedMeasure, setSelectedMeasure] = useState([]);

  const selectRef = useRef(null);
  const inputRef = useRef(null);

  const options = [
    { value: "0", text: "Select an option" },
    { value: "1", from: "km", to: "miles", calculated: "0.621371", text: "km --> miles" },
    { value: "2", from: "miles", to: "km", calculated: "1.60934", text: "miles --> km" },
    { value: "3", from: "feet", to: "metres", calculated: "0.304", text: "feet --> metres" },
    { value: "4", from: "metres", to: "feet", calculated: "3.28084", text: "metres --> feet" },
    { value: "5", from: "cm", to: "inches", calculated: "0.393701", text: "cm --> inches" },
    { value: "6", from: "inches", to: "cm", calculated: "2.54", text: "inches--> cm" },
  ];

  function measure() {
    const measureValue = parseInt(selectRef.current.value);

    for (let i = 1; i < options.length; i++) {
      if (measureValue === i) {
        setSelectedMeasure(options[selectRef.current.value]);
      }
    }
  }
  function changeOption() {
    const measureValue = parseInt(selectRef.current.value);

    for (let i = 1; i < options.length; i++) {
      console.log(measureValue);
      if (measureValue === i) {
        if (measureValue / 2 !== 0) {
          console.log("baja");
          setSelectedMeasure(options[measureValue + 1]);
          selectRef.current.value++;
          break;
        }
        if (measureValue / 2 === 0) {
          console.log("sube");
          setSelectedMeasure(options[measureValue - 1]);
          selectRef.current.value--;
          break;
        }
      }
    }
    console.log(selectedMeasure);
  }
  return (
    <div className="select">
      <p className="select__title">convert</p>
      <div className="select__options">
        <select id="0" ref={selectRef} onChange={() => measure()} className="select__item">
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.text}
            </option>
          ))}
        </select>
        <button onClick={() => changeOption()} className="select__change">
          <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.53033 1.53033C3.82322 1.23744 3.82322 0.762563 3.53033 0.46967C3.23744 0.176777 2.76256 0.176777 2.46967 0.46967L0.46967 2.46967C0.176777 2.76256 0.176777 3.23744 0.46967 3.53033L2.46967 5.53033C2.76256 5.82322 3.23744 5.82322 3.53033 5.53033C3.82322 5.23744 3.82322 4.76256 3.53033 4.46967L2.81066 3.75H13C13.4142 3.75 13.75 3.41421 13.75 3C13.75 2.58579 13.4142 2.25 13 2.25H2.81066L3.53033 1.53033Z" fill="white" />
            <path d="M12.4697 8.46967C12.1768 8.76256 12.1768 9.23744 12.4697 9.53033L13.1893 10.25H3C2.58579 10.25 2.25 10.5858 2.25 11C2.25 11.4142 2.58579 11.75 3 11.75H13.1893L12.4697 12.4697C12.1768 12.7626 12.1768 13.2374 12.4697 13.5303C12.7626 13.8232 13.2374 13.8232 13.5303 13.5303L15.5303 11.5303C15.8232 11.2374 15.8232 10.7626 15.5303 10.4697L13.5303 8.46967C13.2374 8.17678 12.7626 8.17678 12.4697 8.46967Z" fill="white" />
          </svg>
        </button>
        <Converter selectedMeasure={selectedMeasure} savedMeasure={props.savedMeasure} setSavedMeasure={props.setSavedMeasure} inputRef={inputRef}></Converter>
      </div>
    </div>
  );
}

export default SelectConverter;
