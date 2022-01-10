import React from "react";
import Layer from "./Layer";

const Alert = ({ layerCount, neuronCount }) => {
  let arr = [];

  for (let i = 0; i < layerCount; i++) {
    arr = [...arr, <Layer neuronCount={neuronCount} layerIndex={i} />];
  }

  return (
    <div className="NeuralNetModel">
      <Layer neuronCount={2} type="enter" />
      {arr}
      <Layer neuronCount={1} type="exit" />
    </div>
  );
};

export default Alert;
