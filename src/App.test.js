import { render, screen } from "@testing-library/react";
import App from "./App";

describe("APP", () => {
  test("text di app", () => {
    render(<App/>);
    expect(screen.getByText("Belajar Deployment")).toBeInTheDocument();
  })
})