import { useState } from "react";
import NumButton from "../atoms/NumButton";

const Calculator = () => {
  const [result, setResult] = useState("");
  const numsArray = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "0"];
  return (
    <div>
      <div className="main-container">
        <div className="calculator-container">
          <div className="input-field">
            <p>{result}</p>
          </div>
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            {numsArray.map((num) => (
              <NumButton num={num} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
