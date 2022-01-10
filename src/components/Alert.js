import React, { useState } from "react";
import { ReactComponent as Warning } from "../assets/warning.svg";
import Modal from "./Modal";

const Alert = ({ display = false, text, className }) => {
  const [modalOpen, setIsOpen] = useState(false);

  return (
    <div className={`${!display && "hide"} ${className}`}>
      <Warning
        className="warning"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      />
      <Modal text={text} isOpen={modalOpen} />
    </div>
  );
};

export default Alert;
