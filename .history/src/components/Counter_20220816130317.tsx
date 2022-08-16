import { useState } from "react";

export const Counter = () => {
    const [counter, setCounter] = useState(0)




  return (
    <div className="mt-5">
      <h3>Counter - {counter}</h3>
    </div>
  );
};
