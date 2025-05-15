'use client'
import { useState } from 'react';

// Custom hook to manage a counter
const  useCounter = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue);

  // Function to increment the counter
  const increment = (initialValue:number=0) => setCount((prevCount) => prevCount + initialValue);

  // Function to decrement the counter
  const decrement = (initialValue:number) => setCount((prevCount) => prevCount - 1);

  // Function to reset the counter
  const reset = () => setCount(initialValue);

  // Return the state and functions
  return { count, increment, decrement, reset };
}

export default useCounter;




