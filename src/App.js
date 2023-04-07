import { useState } from "react";

function App() {
  const [value, setValue] = useState("");

  const inputValue = (e) => {
    setValue(e.target.value);
  };

  const send = () => {
    window.ue.testwebbrowser.testfn(value);
    console.log(value);
  };
  console.log(value);
  return (
    <div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <input
          style={{ width: 500, fontSize: 18, marginRight: 5 }}
          type="text"
          onChange={inputValue}
          value={value}
        />
        <button onClick={send}>전송</button>
      </div>
    </div>
  );
}

export default App;
