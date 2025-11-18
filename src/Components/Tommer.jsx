import { useState } from 'react';

function Tommer() {
  const [inches, setInches] = useState(""); // Input for tommer
  const [cm, setCm] = useState(null);       // Resultat i cm

  const convert = () => {
    const result = Number(inches) * 2.54;  // 1 tomme = 2,54 cm
    setCm(result.toFixed(2));
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Tommer til Cm</h2>

      <input
        type="number"
        value={inches}
        onChange={(e) => setInches(e.target.value)}
        placeholder="Skriv inn tommer"
      />

      <button onClick={convert} style={{ marginLeft: "10px" }}>
        Konverter
      </button>

      {cm !== null && (
        <p>{inches} tommer = <strong>{cm} cm</strong></p>
      )}
    </div>
  );
}

export default Tommer;
