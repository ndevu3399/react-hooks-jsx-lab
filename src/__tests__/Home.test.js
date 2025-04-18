import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'; // Ensure jest-dom is imported

import Home from "../components/Home";

test("renders a div with the correct ID", () => {
  render(<Home name="John" city="New York" />);
  expect(screen.getByText(/John is a Web Developer from New York/i)).toBeInTheDocument();
});

test("renders the h1 with the text 'Name is a Web Developer from City'", () => {
  render(<Home name="John" city="New York" />);
  const h1 = screen.getByText("John is a Web Developer from New York");
  expect(h1).toBeInTheDocument();
  expect(h1.tagName).toBe("H1"); // check that it's a <h1>
});

test("the h1 has an inline style attribute with a color of 'firebrick'", () => {
  render(<Home name="John" city="New York" />);
  const h1 = screen.getByText("John is a Web Developer from New York");
  expect(h1).toHaveStyle({ color: "firebrick" });
});
