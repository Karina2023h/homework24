import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="mt-5">SWAPI Інтерфейс</h1>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="apiUrl"
            placeholder="Введіть URL SWAPI"
          />
        </div>
        <button className="btn btn-primary">Отримати інформацію</button>
        <div id="result" className="mt-4">
          {}
        </div>
      </div>
    </div>
  );
}

export default App;
