import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Contact from "../src/components/Contact";

describe("Test cases of Contact Component", () => {
  // contact us heading

  it("Should load heading in  Contact componentr", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  // submit button is there or not

  it("Should  load button in contact component", () => {
    render(<Contact />);

    // querying
    const button = screen.getByRole("button");

    // Assertion

    expect(button).toBeInTheDocument();
  });

  // submit text

  it("Should  load submit text  in contact component", () => {
    render(<Contact />);

    const submitText = screen.getByText("Submit");

    expect(submitText).toBeInTheDocument();
  });

  // input text is there pr not

  it("Should load  input in contact component", () => {
    render(<Contact />);

    const textbox = screen.getAllByRole("textbox");
   

    // expect().toBeInTheDocument();
  });

  // placeholder name check

  it("Should  load placeholder  name  in contact component", () => {
    render(<Contact />);

    const placeholder = screen.getByPlaceholderText("name");

    expect(placeholder).toBeInTheDocument();
  });
});
