import React from "react";

const ContentEnter = () => {
  return (
    <div className="ContentHiddenContent">
      <span className="ContentHiddenTitle">Нейрон входного слоя</span>
      <span className="ContentHiddenText">
        <span style={{ fontWeight: "bold" }}>Входной слой</span> – это первый
        слой в нейронной сети, который принимает входящие сигналы и передает их
        на последующие уровни.
        <span style={{ display: "block", marginTop: "10px" }}>
          Сигнал является числом в диапазоне от 0 до 1. Для того что бы
          перевести сигнал в такой формат, нужно провести процесс
          <a
            href="https://ru.wikipedia.org/wiki/%D0%9D%D0%BE%D1%80%D0%BC%D0%B0%D0%BB%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D1%8F"
            target="_blank"
            rel="noreferrer"
          >
            &nbsp;нормализации
          </a>
          .
        </span>
      </span>
    </div>
  );
};

export default ContentEnter;
