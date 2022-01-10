import React from "react";

const Modal = ({ text, isOpen }) => {
  const openStyle = !isOpen && "hide";
  return <div className={`${openStyle} modal`}>{text}</div>;
};

export default Modal;
