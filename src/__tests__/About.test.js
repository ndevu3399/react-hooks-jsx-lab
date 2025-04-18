import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'; // Ensure jest-dom is imported

import About from "../components/About";
import { image } from "../data/data"; // Ensure the image data is correct

test("renders a <div> with the ID of 'about'", () => {
  render(<About />);
  const about = screen.getByTestId('about');
  expect(about).toBeInTheDocument();
});

test("the <div> has three child elements", () => {
  render(<About />);
  const about = screen.getByTestId('about');
  expect(about.children).toHaveLength(3);
});

test("renders a <h2> with the text 'About Me'", () => {
  render(<About />);
  const h2 = screen.getByText("About Me");
  expect(h2).toBeInTheDocument();
  expect(h2.tagName).toBe("H2");
});

test("renders a <p> element", () => {
  render(<About />);
  const p = screen.getByText(/some information about me/i);
  expect(p).toBeInTheDocument();
});

test("renders a <img> element with the correct attributes", () => {
  render(<About />);
  const img = screen.getByAltText("I made this");
  expect(img).toBeInTheDocument();
  expect(img).toHaveAttribute("src", image);
});
