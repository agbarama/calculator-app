import React from "react";
import { useState } from "react";
import styles from "../styles/calculator.module.css";

const Calculator = () => {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput((prevInput) => prevInput + value);
    console.log(typeof value);
  };

  const calculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput("Error");
    }
  };

  const square = () => {
    try {
      setInput(Math.pow(eval(input), 2));
    } catch (error) {
      setInput("Error");
    }
  };

  const reciprocal = () => {
    try {
      setInput((1 / eval(input)).toString());
    } catch (error) {
      setInput("Error");
    }
  };

  const toggleSign = () => {
    // Toggle the sign of the current input
    setInput((prevInput) => {
      const firstChar = prevInput.charAt(0);
      return firstChar === "-" ? prevInput.slice(1) : `-${prevInput}`;
    });
  };

  const squareRoot = () => {
    try {
      // Use eval() to evaluate the expression and Math.sqrt() for square root
      setInput(Math.sqrt(eval(input)).toString());
    } catch (error) {
      setInput("Error");
    }
  };

  return (
    <div className={styles.container}>
      <input
        type="text"
        className={styles.input}
        value={input}
        onChange={(e) => setInput(e.currentTarget.value)}
      />
      <div className={styles.buttonsContainer}>
        <div className={styles.div1}>
          <button className={styles.button}>@</button>
          <button className={styles.button}>-</button>
          <button className={styles.button} onClick={() => setInput("")}>
            C
          </button>
          <button className={styles.button}>AC</button>
        </div>
        <div className={styles.div1}>
          <button className={styles.button}>mc</button>
          <button className={styles.button}>m+</button>
          <button className={styles.button}>mc</button>
          <button className={styles.button}>mr</button>
        </div>
        <div className={styles.div2}>
          <button className={styles.button} onClick={() => handleClick(7)}>
            7
          </button>
          <button className={styles.button} onClick={() => handleClick(8)}>
            8
          </button>
          <button className={styles.button} onClick={() => handleClick(9)}>
            9
          </button>
          <button className={styles.button} onClick={() => handleClick("/")}>
            /
          </button>
          <button className={styles.button} onClick={squareRoot}>
            R
          </button>
        </div>
        <div className={styles.div2}>
          <button className={styles.button} onClick={() => handleClick(5)}>
            4
          </button>
          <button className={styles.button} onClick={() => handleClick(5)}>
            5
          </button>
          <button className={styles.button} onClick={() => handleClick(6)}>
            6
          </button>
          <button className={styles.button} onClick={() => handleClick("*")}>
            X
          </button>
          <button className={styles.button} onClick={() => square()}>
            x^2
          </button>
        </div>
        <div className={styles.div2}>
          <button className={styles.button} onClick={() => handleClick("1")}>
            1
          </button>
          <button className={styles.button} onClick={() => handleClick(2)}>
            2
          </button>
          <button className={styles.button} onClick={() => handleClick(3)}>
            3
          </button>
          <button className={styles.button} onClick={() => handleClick("-")}>
            -
          </button>
          <button className={styles.button} onClick={() => reciprocal()}>
            1/x
          </button>
        </div>
        <div className={styles.div2}>
          <button className={styles.button} onClick={() => handleClick(0)}>
            0
          </button>
          <button className={styles.button} onClick={() => handleClick(".")}>
            .
          </button>
          <button className={styles.button} onClick={toggleSign}>
            +-
          </button>
          <button className={styles.button} onClick={() => handleClick("+")}>
            +
          </button>
          <button className={styles.button} onClick={calculate}>
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
