import React, { useState } from 'react';
import Component from './components/Component/Component';
import './App.css';

function App() {
  const [contadorGlobal, setContadorGlobal] = useState(0);
  const [historial, setHistorial] = useState([]);

  // Función que se ejecuta cuando cambia el contador del componente
  const handleCountChange = (nuevoValor) => {
    setContadorGlobal(nuevoValor);
    
    // Agregar al historial
    setHistorial(prev => [
      ...prev, 
      { valor: nuevoValor, timestamp: new Date().toLocaleTimeString() }
    ].slice(-5)); // Mantener solo los últimos 5 valores
  };

  // Función para resetear ambos contadores
  const handleReset = () => {
    setContadorGlobal(0);
    setHistorial([]);
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Mi Aplicación React</h1>
        <p>Contador Global: {contadorGlobal}</p>
      </header>

      <main className="app-main">
        <section className="component-section">
          <h2>Componente de Contador</h2>
          <Component 
            initialCount={0}
            onCountChange={handleCountChange}
          />
        </section>

        <section className="info-section">
          <h3>Información del Estado Global</h3>
          <div className="info-card">
            <p><strong>Valor actual:</strong> {contadorGlobal}</p>
            <button onClick={handleReset} className="reset-button">
              Reiniciar Todo
            </button>
          </div>

          <div className="historial">
            <h4>Últimos 5 cambios:</h4>
            {historial.length === 0 ? (
              <p>No hay historial aún</p>
            ) : (
              <ul>
                {historial.map((item, index) => (
                  <li key={index}>
                    {item.valor} - {item.timestamp}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
