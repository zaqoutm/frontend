"use client";
import { useState } from "react";

export default function Bla() {
  const [x, setX] = useState(1);

  function counter() {
    setX(x + 1);
  }

  return (
    <div>
      <button onClick={counter}>Click</button>
      {" Hello from Articles" + x}
    </div>
  );
}
