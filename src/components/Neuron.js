import React, { useState } from "react";
import NeuronModal from "./NeuronModal";

const Alert = ({ type, index, layerIndex }) => {
  const [modalOpen, setIsOpen] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  return (
    <div
      className={`Neuron ${type}`}
      onClick={({ target }) => {
        const { x, y } = target.getBoundingClientRect();
        setPos({ x, y });
        setIsOpen(!modalOpen);
      }}
      id={`${type}-${index}-${layerIndex}`}
    >
      <NeuronModal
        type={type}
        isOpen={modalOpen}
        setIsOpen={setIsOpen}
        pos={pos}
      />
    </div>
  );
};

export default Alert;
