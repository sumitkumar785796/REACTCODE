import React, { useState } from "react";
import Design from './Design'
const Example = () => {

  const [num, setNum] = useState(0);
  const inc = (n) => {
    setNum(num + n);
  };
  const dec = (n) => {
    setNum(num - n);
  };
  return (
    <>
      <Design/>
      <h1
        style={{
          color: "white",
          backgroundColor: "black",
          width: "40px",
          padding: "200px",
          margin: "10px 26px 0px 500px",
        }}
      >
        {num}
      </h1>
      <button
        style={{
          color: "white",
          backgroundColor: "black",
          width: "40px",
          padding: "50px",
          margin: "10px 26px 0px 500px",
          fontSize: "x-large",
          cursor: "pointer",
        }}
        onClick={() => inc(2)}
      >
        +
      </button>
      <button
        style={{
          color: "white",
          backgroundColor: "black",
          width: "40px",
          padding: "50px",
          margin: "10px 26px 0px 210px",
          fontSize: "x-large",
          cursor: "pointer",
        }}
        onClick={() => dec(1)}
      >
        -
      </button>
    </>
  );
};

export default Example;
