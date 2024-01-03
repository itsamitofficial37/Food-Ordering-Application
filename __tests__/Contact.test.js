import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Contact from "../src/components/Contact";

// contact us heading 

test("Should render Contact Us Page heading", () => {
  render(<Contact />);
  const heading = screen.getByRole("heading");
  expect(heading).toBeInTheDocument();
});

// submit button is there or not 

test("Should button is there in contact component", ()=> {
  render(<Contact/>);

  // querying 
  const button = screen.getByRole("button");

  // Assertion 

  expect(button).toBeInTheDocument();
});

// submit text 

test("Should submit text is there in contact component", ()=> {
  render(<Contact/>);

  const submitText = screen.getByText("Submit");

  expect(submitText).toBeInTheDocument();
})

// input text is there pr not 

test("Should input is there in contact component", ()=> {
  render(<Contact/>)

  const textbox = screen.getAllByRole("textbox");
  console.log(textbox[1]);

  // expect().toBeInTheDocument();
})

// placeholder name check 

test("Should placeholder have name  is there in contact component", ()=> {
  render(<Contact/>)

  const placeholder = screen.getByPlaceholderText("name");
  

  expect(placeholder).toBeInTheDocument();
})
