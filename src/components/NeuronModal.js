import React from "react";
import ContentEnter from "./ContentEnter";
import ContentExit from "./ContentExit";
import ContentHidden from "./ContentHidden";
import { ReactComponent as Cross } from "../assets/cross.svg";

const NeuronModal = ({ type, isOpen, setIsOpen, pos }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="NeuronModal">
      <div className="NeuronModalContent">
        {type === "enter" && <ContentEnter />}
        {type === "exit" && <ContentExit />}
        {type !== "exit" && type !== "enter" && <ContentHidden />}
      </div>
      <div className="NeuronModalBack" onClick={() => setIsOpen(false)} />
      <button className="crossIcon" onClick={() => setIsOpen(false)}>
        <Cross />
      </button>
    </div>
  );
};

export default NeuronModal;
