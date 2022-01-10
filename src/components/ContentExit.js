import React from "react";

const ContenrExit = () => {
  return (
    <div className="ContentHiddenContent">
      <span className="ContentHiddenTitle">Нейрон скрытыго слоя</span>
      <img src={Image} alt="" className="hiddenImage" />
      <span className="ContentHiddenLabel">структура нейрона</span>
      <span className="ContentHiddenText">
        В данном примере изображена часть нейронной сети, где буквами I
        обозначены входные нейроны, буквой H — скрытый нейрон, а буквой w —
        веса. Из формулы видно, что входная информация — это сумма всех входных
        данных, умноженных на соответствующие им веса. Теперь когда у нас есть
        входные данные, мы можем получить выходные данные, подставив входное
        значение в функцию активации. Теперь, когда у нас есть выходные данные,
        мы передаем их дальше. И так, мы повторяем для всех слоев, пока не
        дойдем до выходного нейрона.
      </span>
    </div>
  );
};

export default ContenrExit;
