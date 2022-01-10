import React, { useState } from "react";
import Slider from "@mui/material/Slider";
import "./App.css";

import NeuralNetModel from "./components/NeuralNetModel";
import InfoModal from "./components/InfoModal";
import Alert from "./components/Alert";
import { ReactComponent as InfoIcon } from "./assets/info.svg";

const maxLayerCount = 8;
const minLayerCount = 2;

const maxNeuronCount = 8;
const minNeuronCount = 3;

const minLayerText =
  "Слишком мало слоев! Такой нейросети просто нечем анализировать.";
const maxLayerText =
  "Слишком много слоев! При такой настройке есть вероятность что нейросеть слишком подробно проанализирует данные, что приведет к потере результата.";
const minNeuronText =
  "Слишком мало нейронов! Такой нейросети просто нечем анализировать.";
const maxNeuronText =
  "Слишком много нейронов! Такой нейросети сложно работать, при анализе данных каждым слоем.";
const draw = () => {
  const canvas = document.querySelector("#canvas");

  if (!canvas.getContext) {
    return;
  }

  const ctx = canvas.getContext("2d");
  ctx.strokeStyle = "black";
  ctx.lineWidth = 1;
  const dot1 = document
    .getElementById("enter-0-undefined")
    .getBoundingClientRect();
  const dot2 = document.getElementById("undefined-0-0").getBoundingClientRect();
  const dot3 = document.getElementById("undefined-1-0").getBoundingClientRect();

  console.log(dot1, dot2, dot3);
  ctx.beginPath();
  ctx.moveTo(dot1.x + 13, dot1.y + 13);
  ctx.lineTo(dot2.x + 13, dot2.y + 13);
  ctx.moveTo(dot1.x + 13, dot1.y + 13);
  ctx.lineTo(dot3.x + 13, dot3.y + 13);
  ctx.stroke();
};

const App = () => {
  const [layerCount, setLayerCount] = useState(2);
  const [neuronCount, setNeuronCount] = useState(2);
  const [infoOpen, setIsInfoOpen] = useState(false);

  setTimeout(() => {
    // draw();
  }, 500);

  return (
    <div className="main">
      <div className="layerSliderWrapper">
        <Slider
          className="layerSlider"
          defaultValue={2}
          step={2}
          min={1}
          max={20}
          onChange={(e) => setLayerCount(e.target.value)}
          marks
        />
        <Alert
          className="minLayerAlert"
          display={layerCount <= minLayerCount}
          text={minLayerText}
        />
        <Alert
          className="maxLayerAlert"
          display={layerCount >= maxLayerCount}
          text={maxLayerText}
        />
      </div>
      <div className="asd">
        <div className="neuronSliderWrapper">
          <Slider
            className="neuronSlider"
            orientation="vertical"
            defaultValue={2}
            step={1}
            min={1}
            max={9}
            onChange={(e) => setNeuronCount(e.target.value)}
            marks
            sx={{
              '& input[type="range"]': {
                WebkitAppearance: "slider-vertical",
              },
            }}
          />

          <Alert
            className="minNeuronAlert"
            display={neuronCount >= maxNeuronCount}
            text={maxNeuronText}
          />
          <Alert
            className="maxNeuronAlert"
            display={neuronCount <= minNeuronCount}
            text={minNeuronText}
          />
        </div>
        <NeuralNetModel layerCount={layerCount} neuronCount={neuronCount} />
      </div>

      <InfoIcon
        className="InfoIcon"
        display={infoOpen}
        text={minNeuronText}
        onMouseEnter={() => setIsInfoOpen(true)}
        onMouseLeave={() => setIsInfoOpen(false)}
      />
      <InfoModal isOpen={infoOpen} />
    </div>
  );
};

export default App;
