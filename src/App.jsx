import { useState } from "react";

function App() {
  const [bill, setBill] = useState(0);
  const [tip1, setTip1] = useState(0);
  const [tip2, setTip2] = useState(0);

  return (
    <div className="App">
      <Bill bill={bill} setBill={setBill} />
      <Tip tip={tip1} setTip={setTip1}>
        How much you like the service?
      </Tip>
      <Tip tip={tip2} setTip={setTip2}>
        How much your friend likes the service?
      </Tip>
      <CalcTip bill={bill} tip1={tip1} tip2={tip2} />
      <Reset setBill={setBill} setTip1={setTip1} setTip2={setTip2} />
    </div>
  );
}

function Bill({ bill, setBill }) {
  return (
    <div className="input-container">
      <span className="label">How much was your bill?</span>
      <input
        className="input-field"
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />
    </div>
  );
}

function Tip({ tip, setTip, children }) {
  return (
    <div className="input-container">
      <span className="label">{children}</span>
      <select
        className="select-field"
        value={tip}
        onChange={(e) => setTip(Number(e.target.value))}
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing (20%)</option>
      </select>
    </div>
  );
}

function CalcTip({ bill, tip1, tip2 }) {
  const totalBill = bill + (tip1 / 100) * bill + (tip2 / 100) * bill;

  return <div className="total-bill">Total: ${totalBill.toFixed(2)}</div>;
}

function Reset({ setBill, setTip1, setTip2 }) {
  function handleReset() {
    const confirm = window.confirm(
      "Are you sure you want to reset everything?"
    );

    if (confirm) {
      setBill(0);
      setTip1(0);
      setTip2(0);
    }
  }

  return (
    <button className="reset-button" onClick={handleReset}>
      Reset
    </button>
  );
}

export default App;
