
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Contact from "../src/components/Contact";


test("Should render Contact Us Page heading", () => {
  render(<Contact />);
  const heading = screen.getByRole("heading");
  expect(heading).toBeInTheDocument()
});
