import React from "react";
import Neuron from "./Neuron";

const Alert = ({ neuronCount, type, layerIndex }) => {
  let arr = [];

  for (let i = 0; i < neuronCount; i++) {
    arr = [...arr, <Neuron type={type} index={i} layerIndex={layerIndex} />];
  }

  return <div className="layer">{arr}</div>;
};

export default Alert;
