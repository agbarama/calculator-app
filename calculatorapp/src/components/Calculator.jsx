import React from "react";
import styles from "../styles/calculator.module.css";

const Calculator = () => {
  return (
    <div className={styles.container}>
      <input type="text" className={styles.input} />
      <div className={styles.buttonsContainer}>
        <div className={styles.div1}>
          <button className={styles.button}>@</button>
          <button className={styles.button}>-</button>
          <button className={styles.button}>C</button>
          <button className={styles.button}>AC</button>
        </div>
        <div className={styles.div1}>
          <button className={styles.button}>mc</button>
          <button className={styles.button}>m+</button>
          <button className={styles.button}>mc</button>
          <button className={styles.button}>mr</button>
        </div>
        <div className={styles.div2}>
          <button className={styles.button}>7</button>
          <button className={styles.button}>8</button>
          <button className={styles.button}>9</button>
          <button className={styles.button}>/</button>
          <button className={styles.button}>R</button>
        </div>
        <div className={styles.div2}>
          <button className={styles.button}>4</button>
          <button className={styles.button}>5</button>
          <button className={styles.button}>6</button>
          <button className={styles.button}>X</button>
          <button className={styles.button}>x^2</button>
        </div>
        <div className={styles.div2}>
          <button className={styles.button}>1</button>
          <button className={styles.button}>2</button>
          <button className={styles.button}>3</button>
          <button className={styles.button}>-</button>
          <button className={styles.button}>1/x</button>
        </div>
        <div className={styles.div2}>
          <button className={styles.button}>0</button>
          <button className={styles.button}>.</button>
          <button className={styles.button}>+-</button>
          <button className={styles.button}>+</button>
          <button className={styles.button}>=</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
