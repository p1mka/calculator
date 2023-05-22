import styles from "./App.module.css";
import { useState } from "react";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const operations = ["+", "-", "=", "C"];

export const Calculate = () => {
  const [currentValue, setCurrentValue] = useState("");

  const mathOnClick = (operation) => {
    const input = document.querySelector("#displayBlock");
    input.classList.remove(styles.result);
    if (operation === "C") {
      setCurrentValue("");
    } else if (operation === "=") {
      input.classList.add(styles.result);
      setCurrentValue(eval(currentValue));
    } else {
      setCurrentValue(`${currentValue}${operation}`);
    }
  };

  const numbersOnClick = (number) => {
    setCurrentValue(`${currentValue}${number}`);
  };

  const renderMathOperations = () => {
    return (
      <div className={styles.operationsBlock}>
        {operations.map((operation) => {
          return (
            <button
              key={operation}
              type="submit"
              className={styles.operation}
              onClick={() => {
                mathOnClick(operation);
              }}
            >
              {operation}
            </button>
          );
        })}
      </div>
    );
  };
  const renderDisplay = () => {
    return (
      <>
        <input
          placeholder="Введите число"
          type="text"
          value={currentValue}
          className={styles.displayBlock}
          id="displayBlock"
          onChange={() => null}
        ></input>
      </>
    );
  };

  const renderNumbersBlock = () => {
    return (
      <div className={styles.numbersBlock}>
        {numbers.map((number) => {
          return (
            <button
              key={number}
              type="submit"
              className={styles.number}
              onClick={() => numbersOnClick(number)}
            >
              {number}
            </button>
          );
        })}
      </div>
    );
  };

  return (
    <div className={styles.app}>
      <header className={styles.appHeader}>
        <h1>Калькулятор на React</h1>
        <div className={styles.container}>
          {renderDisplay()}
          {renderMathOperations()}
          {renderNumbersBlock()}
        </div>
      </header>
    </div>
  );
};
