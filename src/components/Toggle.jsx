import { useState } from "react";

function Toggle() {
  const [isLight, setIsLight] = useState(true);

  return (
    <div className="toggle-container">
      <h1>Toggle Component</h1>

      <h2>{isLight ? "Light Mode" : "Dark Mode"}</h2>

      <button onClick={() => setIsLight(!isLight)}>
        Switch Mode
      </button>
    </div>
  );
}

export default Toggle;