import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Home from "../components/Home/Home";
import { fetchWeather } from "../api/fetchWeather";

jest.mock("../api/fetchWeather");

describe("Home Component", () => {
  it("renders the input field and search button", () => {
    render(<Home />);
    const input = screen.getByLabelText("Search City");
    const button = screen.getByText("Search");

    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it("calls fetchWeather function when search button is clicked", async () => {
    fetchWeather.mockResolvedValueOnce({ city: "Test City", temperature: 20 });

    render(<Home />);
    const input = screen.getByLabelText("Search City");
    const button = screen.getByText("Search");

    fireEvent.change(input, { target: { value: "Test City" } });
    fireEvent.click(button);

    await waitFor(() => {
      expect(fetchWeather).toHaveBeenCalledWith("Test City");
    });
  });

  it("disables search button when input field is empty", () => {
    render(<Home />);
    const button = screen.getByText("Search");

    expect(button).toBeDisabled();
  });

  it("enables search button when input field is not empty", () => {
    render(<Home />);
    const input = screen.getByLabelText("Search City");
    const button = screen.getByText("Search");

    fireEvent.change(input, { target: { value: "Test City" } });

    expect(button).toBeEnabled();
  });
});
