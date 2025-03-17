import s from "./App.module.css";
import { useState, useRef } from "react";

export const UsingRefCompo = () => {
  const [stateCounter, setStateCounter] = useState(0);
  const refCounter = useRef(0);
  const onRefCLick = () => {
    refCounter.current = refCounter.current + 1;
    console.log(`refCounter: ${refCounter.current}`);
  };

  const onStateCLick = () => {
    setStateCounter(stateCounter + 1);
    console.log(`stateCounter: ${stateCounter + 1}`);
  };

  return (
    <>
      <br />
      <div className={s.app}>
        <div
          style={{
            background: "linear-gradient(red,yellow, green)",
            color: "white",
            textDecoration: "underline",
          }}
        >
          <p>Это реф-счётчик: {refCounter.current}</p>
          <button onClick={onRefCLick}>Прибавить в реф-счётчик</button>
        </div>

        <div style={{ background: "linear-gradient(green, yellow)" }}>
          <p>Это стейт-счётчик {stateCounter}</p>
          <button onClick={onStateCLick}>Прибавить в стейт-счётчик</button>
        </div>
        <br />
      </div>
    </>
  );
};
