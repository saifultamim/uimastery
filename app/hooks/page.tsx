"use client";
import React, { useState } from "react";
import useCounter from "./_comp/UseCounter";

function CounterComponent() {
  // Use the custom hook
  const { count, increment, decrement, reset } = useCounter(0);
  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => increment(3)}>Increment</button>
      <button onClick={() => decrement(0)}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default CounterComponent;
