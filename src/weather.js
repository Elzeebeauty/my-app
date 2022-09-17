import React from "react";
import "./weather.css";

export default function Weather() {
  return (
    <div className="weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <h1>Nigeria</h1>
      <ul>
        <li>Monday 10:16</li>
        <li>Mostly cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="cloudy"
          />
          6℃
        </div>
        <div className="col-4">
          <ul>
            <li>Precipitation 12%</li>
            <li>Humidity: 65%</li>
            <li>Wind: 13%</li>
          </ul>
        </div>
      </div>
    </div>
  );
}