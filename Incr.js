import React, { useState } from "react";

function Incr() {
  var [count, setCount] = useState(0);
  return (
    <div className="container">
     
      <h1>React Web</h1>
      <h3>{count}</h3>
      <div className="btn">
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button id="in" onClick={() => setCount(count + 1)}>
          Increment
        </button>
      </div>
      <div className="reset">
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
}

export default Incr;
