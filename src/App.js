import React from "react";
import Weather from "./weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          Weather App
        </header>
        <Weather />
        <footer>
          This Project was coded by{" "}
          <a href="https://www.linkedin.com/in/wofai-martins-77537894">
            Wofai Elizabeth Martins
          </a>
          ,{" "}
          <a
            href="https://github.com/Elzeebeauty/weather-react"
            target="_blank"
            rel="noreferrer"
          >
            open-source on GitHub,
          </a>{" "}
          <a
            href="https://luminous-marigold-c22555.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}