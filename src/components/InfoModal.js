import React from "react";

const Modal = ({ isOpen }) => {
  const openStyle = !isOpen && "hide";
  return (
    <div className={`${openStyle} infoModal`}>
      <span style={{ fontWeight: "bold" }}>Нейронная сеть</span> — это
      последовательность нейронов, соединенных между собой синапсами. Структура
      нейронной сети пришла в мир программирования прямиком из биологии.
      Благодаря такой структуре, машина обретает способность анализировать и
      даже запоминать различную информацию. Нейронные сети также способны не
      только анализировать входящую информацию, но и воспроизводить ее из своей
      памяти. Другими словами, нейросеть это машинная интерпретация мозга
      человека, в котором находятся миллионы нейронов передающих информацию в
      виде электрических импульсов.
      <span style={{ display: "block" }}>
        Нейронные сети используются для решения сложных задач, которые требуют
        аналитических вычислений подобных тем, что делает человеческий мозг.
        Самыми распространенными применениями нейронных сетей является:
        <span style={{ display: "block", marginTop: "10px" }}>
          <span style={{ fontWeight: "bold" }}>Классификация</span>
          &nbsp;— распределение данных по параметрам. Например, на вход дается
          набор людей и нужно решить, кому из них давать кредит, а кому нет. Эту
          работу может сделать нейронная сеть, анализируя такую информацию как:
          возраст, платежеспособность, кредитная история и тд.
        </span>
        <span style={{ display: "block", marginTop: "10px" }}>
          <span style={{ fontWeight: "bold" }}>Предсказание</span>
          &nbsp;— возможность предсказывать следующий шаг. Например, рост или
          падение акций, основываясь на ситуации на фондовом рынке.
        </span>
        <span style={{ display: "block", marginTop: "10px" }}>
          <span style={{ fontWeight: "bold" }}>Распознавание</span>
          &nbsp;— в настоящее время, самое широкое применение нейронных сетей.
          Используется в Google, когда вы ищете фото или в камерах телефонов,
          когда оно определяет положение вашего лица и выделяет его и многое
          другое. Теперь, чтобы понять, как же работают нейронные сети, давайте
          взглянем на ее составляющие и их параметры.
        </span>
      </span>
    </div>
  );
};

export default Modal;