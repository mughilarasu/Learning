import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import CityCard from "../components/Home/CityCard";

describe("CityCard Component", () => {
  const testData = {
    coord: {
      lon: 80.2785,
      lat: 13.0878,
    },
    weather: [
      {
        id: 801,
        main: "Clouds",
        description: "few clouds",
        icon: "02d",
      },
    ],
    base: "stations",
    main: {
      temp: 20,
      feels_like: 36.46,
      temp_min: 31.99,
      temp_max: 31.99,
      pressure: 1011,
      humidity: 58,
    },
    visibility: 6000,
    wind: {
      speed: 4.63,
      deg: 150,
    },
    clouds: {
      all: 20,
    },
    dt: 1711440650,
    sys: {
      type: 1,
      id: 9218,
      country: "TC",
      sunrise: 1711413533,
      sunset: 1711457398,
    },
    timezone: 19800,
    id: 1264527,
    name: "Test City",
    cod: 200,
  };

  it("renders city name and country", () => {
    render(<CityCard data={testData} />);
    const cityName = screen.getByText("Test City");
    const country = screen.getByText("TC");

    expect(cityName).toBeInTheDocument();
    expect(country).toBeInTheDocument();
  });

  it("renders temperature with degree symbol", () => {
    render(<CityCard data={testData} />);
    const temperature = screen.getByText("20");
    const degree = screen.getByText("°C");
    expect(temperature).toBeInTheDocument();
    expect(temperature.tagName).toBe("DIV"); // Temperature should be wrapped in a div
    expect(degree).toBeInTheDocument();
  });

  it("renders weather description", () => {
    render(<CityCard data={testData} />);
    const weatherDescription = screen.getByText("few clouds");

    expect(weatherDescription).toBeInTheDocument();
  });

  it("renders weather icon with alt text", () => {
    render(<CityCard data={testData} />);
    const weatherIcon = screen.getByAltText("few clouds");

    expect(weatherIcon).toBeInTheDocument();
    expect(weatherIcon.tagName).toBe("IMG"); // Weather icon should be an img tag
    expect(weatherIcon.src).toContain("02d"); // Ensure correct icon is displayed
  });
});
