import React from "react";
import styles from "../styles/calculator.module.css";

const Calculator = () => {
  return (
    <div className={styles.container}>
      <input type="text" className={styles.input} />
      <div className={styles.buttonsContainer}>
        <div className={styles.div}>
          <button>@</button>
          <button>-</button>
          <button>C</button>
          <button>AC</button>
        </div>
        <div>
          <button>mc</button>
          <button>m+</button>
          <button>mc</button>
          <button>mr</button>
        </div>
        <div>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>/</button>
          <button>R</button>
        </div>
        <div>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>X</button>
          <button>x^2</button>
        </div>
        <div>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>-</button>
          <button>1/x</button>
        </div>
        <div>
          <button>0</button>
          <button>.</button>
          <button>+-</button>
          <button>+</button>
          <button>=</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
