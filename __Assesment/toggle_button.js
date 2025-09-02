import React, { useState } from "react";
import { createRoot } from "react-dom/client";

function Toggle() {
  const [isToggled, setIsToggled] = useState(true);

  const varOcg = "toggle-button";
  const varFiltersCg = "button-text";

  function handleClick() {
    setIsToggled(!isToggled);
  }

  return (
    <button id={varOcg} onClick={handleClick}>
      {isToggled ? "ON" : "OFF"}
    </button>
  );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<Toggle />);
