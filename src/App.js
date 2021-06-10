import { useState } from "react";
import { Globo } from "./components/Globo";
import { Puntuacion } from "./components/Puntuacion";

function App() {
  const [posicionTop, setPosicionTop] = useState(window.innerHeight / 3);
  const [posicionLeft, setPosicionLeft] = useState(window.innerWidth / 2.33);
  const [tamanyo, setTamanyo] = useState(5);
  let [puntuacion, setPuntuacion] = useState(0);

  const moverGlobo = () => {
    setTamanyo(Math.floor(Math.random() * (10 + 1) + 1));
    const maxPosicionLeft = window.innerWidth - 100;
    const maxPosicionTop = window.innerHeight - 100;
    let randomPosicionLeft = Math.floor(Math.random() * window.innerWidth);
    let randomPosicionTop = Math.floor(Math.random() * window.innerHeight);
    if (randomPosicionLeft > maxPosicionLeft) {
      randomPosicionLeft = window.innerWidth - 200;
    }
    if (randomPosicionTop > maxPosicionTop) {
      randomPosicionTop = window.innerHeight - 200;
    }
    setPosicionLeft(100 + randomPosicionLeft);
    setPosicionTop(100 + randomPosicionTop);
  };
  const cambiarGlobo = () => {
    setTimeout(moverGlobo, 300);
  };
  const puntuacionUp = () => {
    console.log(puntuacion);
    setPuntuacion(puntuacion++);
  };
  return (
    <>
      <Puntuacion puntuacion={puntuacion} />
      <Globo
        puntuacionUp={puntuacionUp}
        cambiarGlobo={cambiarGlobo}
        posicionTop={posicionTop}
        posicionLeft={posicionLeft}
        tamanyo={tamanyo}
      />
    </>
  );
}

export default App;
