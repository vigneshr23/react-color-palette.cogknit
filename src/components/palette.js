import React, { Component, useState, useEffect } from "react";

const Palette = ({ count, onColorSelect, selected }) => {
  const [palettes, setPalettes] = useState([]);

  useEffect(() => {
    const generatePalette = () => {
      const palettes = [];
      let _count = count;
      let hexCode = "0123456789ABCDEF";
      while (_count > 0) {
        let color = "#";
        // create a random hex
        for (let i = 0; i < 6; i++)
          color += hexCode[Math.floor(Math.random() * 16)];
        if (palettes.indexOf(color) < 0) {
          palettes.push(color);
          _count--;
        }
      }
      setPalettes(palettes);
    };
    generatePalette();
  }, [count]);

  const getColor = (el) => {
    onColorSelect(el.getAttribute("databgcolor"));
  };

  const generateBox = () => {
    return palettes.map((color, i) => (
      <div
        key={i}
        className="color-box"
        style={{ backgroundColor: color }}
        databgcolor={color}
      ></div>
    ));
  };

  return (
    <div className="container ">
      <h4 className="palette-heading">Palette</h4>
      <div
        className="container palette-container"
        onClick={(e) => getColor(e.target)}
      >
        {generateBox()}
      </div>
    </div>
  );
};
export default Palette;
