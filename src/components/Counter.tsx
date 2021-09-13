import { useState } from "react";

export const Counter = () => {
  const [counter, setCounter] = useState<number>(0);

  return (
    <button onClick={() => setCounter(counter + 1)}>Counter: {counter}</button>
  );
};
