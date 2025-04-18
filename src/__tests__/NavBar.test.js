import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'; // Ensure jest-dom is imported

import NavBar from "../components/NavBar";

test("renders each <a> element with the correct attributes", () => {
  render(<NavBar />);
  const home = screen.queryByText(/home/i);
  expect(home).toBeInTheDocument();
  expect(home).toHaveAttribute("href", expect.stringContaining("#home"));

  const about = screen.queryByText(/about/i);
  expect(about).toBeInTheDocument();
  expect(about).toHaveAttribute("href", expect.stringContaining("#about"));
});
