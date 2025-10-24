import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("Cargando...");

  useEffect(() => {
    // 🔗 Llamada al backend
    fetch("http://localhost:3001/api/ping")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => setMessage("Error al conectar con el backend 😥"));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "4rem", fontSize: "1.5rem" }}>
      <h1>Frontend conectado al Backend</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;


/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
*/