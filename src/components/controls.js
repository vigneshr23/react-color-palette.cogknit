import React, { Component, useState } from "react";

const Controls = ({ onClick, selected }) => {
  const [state, setState] = useState(0);
  const handleInput = (e) => {
    setState(e.target.value);
    //onChange(e.target.value);
  };
  const handleClick = () => {
    if (state) onClick({ count: state });
  };
  const clear = () => {
    setState(0);
    onClick({ type: "CLEAR", count: 0 });
  };

  return (
    <div className="container controls">
      <h3 className="control-heading">Config Panel</h3>
      <fieldset className="input-field">
        <input
          type="number"
          min="1"
          max="100"
          value={state}
          onChange={handleInput}
        />
      </fieldset>
      <div className="btn-container">
        <button
          className="btn btn-primary"
          onClick={handleClick}
          disabled={!state}
        >
          Generate
        </button>
        <button className="btn btn-danger" onClick={clear}>
          Clear
        </button>
      </div>
      <div className="preview">
        <h3>Selected</h3>
        <div
          className="result"
          style={{ backgroundColor: selected ? selected : "#FFF" }}
        ></div>
        <div className="hex">
          <code>
            <h5 style={{ color: selected ? selected : "inherit" }}>
              Hex: {selected ? selected : "Nothing Selected"}
            </h5>
          </code>
        </div>
      </div>
    </div>
  );
};

export default Controls;
