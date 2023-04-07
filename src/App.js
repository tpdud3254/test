import { useEffect, useState } from "react";

function App() {
  const [value, setValue] = useState("");
  const [receiveData, setReceiveData] = useState("");

  useEffect(() => {
    getData();
  }, []);

  const inputValue = (e) => {
    setValue(e.target.value);
  };

  const send = () => {
    window.ue.testwebbrowser.testfn(value);
  };

  const getData = () => {
    window.ue.testwebbrowser.testfunc().then(function (returnValue) {
      setReceiveData(returnValue);
    });
  };

  return (
    <div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <input
          style={{ width: 500, fontSize: 18, marginRight: 5 }}
          type="text"
          onChange={inputValue}
          value={value}
        />
        <button onClick={send}>값 전송</button>
      </div>
      <div>receive data : {receiveData}</div>
    </div>
  );
}

export default App;
