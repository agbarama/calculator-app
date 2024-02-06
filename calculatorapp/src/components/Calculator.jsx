import React, { useEffect } from "react";
import { useState } from "react";
import styles from "../styles/calculator.module.css";

const Calculator = () => {
  const [input, setInput] = useState([]);
  const savedMemory = JSON.parse(localStorage.getItem("memory"));
  const savedPlans = JSON.parse(localStorage.getItem("summaryPlan"));

  const [memory, setMemory] = useState(savedMemory || []);
  const [storage, setStorage] = useState("");
  const [isMemory, setIsMemory] = useState(false);

  // undo
  const undo = () => {
    setInput(input.slice(0, -1));
  };

  // input delete function
  const deleteInput = () => {
    setInput(input.slice(0, -1));
  };

  // 'AC' function
  const allClear = () => {
    setInput("");
    setMemory("");
  };

  //  'MC' function
  const memoryClear = () => {
    if (isMemory) {
      setInput("");
    }
    localStorage.clear("memory");
  };

  // 'M+' function
  const memoryAdd = () => {
    setMemory([...memory, { storage }]);
    setStorage("");
  };

  useEffect(() => {
    localStorage.setItem("memory", JSON.stringify(memory));
  }, [storage]);

  // 'M-' function
  const deleteItem = () => {
    console.log("deleted");
    setMemory(memory.slice(0, -1));
    localStorage.setItem("memory", JSON.stringify(memory));
  };

  // 'MR' function
  const restoreMemory = () => {
    setIsMemory(true);
    if (isMemory) {
      memory.map((item) => setInput(item.storage));
    }
  };

  const handleClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const calculate = () => {
    try {
      setInput(eval(input).toString());
      setStorage(`${input} = ${eval(input).toString()}`);
    } catch (error) {
      setInput("Error");
    }
  };

  const square = () => {
    try {
      setInput(Math.pow(eval(input), 2));
      setStorage(`${input} x ${input}  = ${Math.pow(eval(input), 2)}`);
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
      setStorage(`√${input}  = ${Math.pow(eval(input), 2)}`);
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
          <button
            className={`${styles.button} ${styles.peach} ${styles.icon}`}
            onClick={undo}
          >
            ⟲
          </button>

          <button
            className={`${styles.button} ${styles.peach} ${styles.icon}`}
            onClick={deleteInput}
          >
            ￩
          </button>
          <button
            className={`${styles.button} ${styles.peach}`}
            onClick={() => setInput("")}
          >
            C
          </button>
          <button
            className={`${styles.button} ${styles.peach}`}
            onClick={allClear}
          >
            AC
          </button>
        </div>
        <div className={styles.div1}>
          <button
            className={`${styles.button} ${styles.green}`}
            onClick={memoryClear}
          >
            mc
          </button>
          <button
            className={`${styles.button} ${styles.green}`}
            onClick={memoryAdd}
          >
            m+
          </button>
          <button
            className={`${styles.button} ${styles.green}`}
            onClick={deleteItem}
          >
            m-
          </button>
          <button
            className={`${styles.button} ${styles.green}`}
            onClick={restoreMemory}
          >
            mr
          </button>
        </div>
        <div className={styles.div2}>
          <button
            className={`${styles.button} ${styles.blue}`}
            onClick={() => handleClick(7)}
          >
            7
          </button>
          <button
            className={`${styles.button} ${styles.blue}`}
            onClick={() => handleClick(8)}
          >
            8
          </button>
          <button
            className={`${styles.button} ${styles.blue}`}
            onClick={() => handleClick(9)}
          >
            9
          </button>
          <button
            className={`${styles.button} ${styles.grey}`}
            onClick={() => handleClick("/")}
          >
            /
          </button>
          <button
            className={`${styles.button} ${styles.grey}`}
            onClick={squareRoot}
          >
            R
          </button>
        </div>
        <div className={styles.div2}>
          <button
            className={`${styles.button} ${styles.blue}`}
            onClick={() => handleClick(4)}
          >
            4
          </button>
          <button
            className={`${styles.button} ${styles.blue}`}
            onClick={() => handleClick(5)}
          >
            5
          </button>
          <button
            className={`${styles.button} ${styles.blue}`}
            onClick={() => handleClick(6)}
          >
            6
          </button>
          <button
            className={`${styles.button} ${styles.grey}`}
            onClick={() => handleClick("*")}
          >
            x
          </button>
          <button
            className={`${styles.button} ${styles.grey}`}
            onClick={() => square()}
          >
            x^2
          </button>
        </div>
        <div className={styles.div2}>
          <button
            className={`${styles.button} ${styles.blue}`}
            onClick={() => handleClick("1")}
          >
            1
          </button>
          <button
            className={`${styles.button} ${styles.blue}`}
            onClick={() => handleClick(2)}
          >
            2
          </button>
          <button
            className={`${styles.button} ${styles.blue}`}
            onClick={() => handleClick(3)}
          >
            3
          </button>
          <button
            className={`${styles.button} ${styles.grey}`}
            onClick={() => handleClick("-")}
          >
            -
          </button>
          <button
            className={`${styles.button} ${styles.grey}`}
            onClick={() => reciprocal()}
          >
            1/x
          </button>
        </div>
        <div className={styles.div2}>
          <button
            className={`${styles.button} ${styles.blue}`}
            onClick={() => handleClick(0)}
          >
            0
          </button>
          <button
            className={`${styles.button} ${styles.grey}`}
            onClick={() => handleClick(".")}
          >
            .
          </button>
          <button
            className={`${styles.button} ${styles.grey}`}
            onClick={toggleSign}
          >
            +-
          </button>
          <button
            className={`${styles.button} ${styles.grey}`}
            onClick={() => handleClick("+")}
          >
            +
          </button>
          <button
            className={`${styles.button} ${styles.red}`}
            onClick={calculate}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
