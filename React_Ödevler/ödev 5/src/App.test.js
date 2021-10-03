import ReactDOM from "react-dom";
import App from "./App";
import { render,screen } from "@testing-library/react";
import React from "react";
import '@testing-library/jest-dom/extend-expect';
import userEvent from "@testing-library/user-event";
import Clipboard from "clipboard";
import "@testing-library/jest-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
});

beforeEach(()=>{
  render(<App/>)

})
test("header testing",()=>{
    let head=screen.getByText(/emoji search/i)
    expect(head).toBeInTheDocument()

})
test("Emoji list test",()=>{
  
  expect(screen.getByAltText("100")).toBeInTheDocument()
  expect(screen.getByAltText("1234")).toBeInTheDocument()
  expect(screen.getByAltText("Kissing Heart")).toBeInTheDocument()
  expect(screen.getByAltText("Yum")).toBeInTheDocument()
})
test("Filter testing",()=> {
  let inputt=screen.getByLabelText(/input/i)
  userEvent.type(inputt,"Kissing")
  expect(screen.getByAltText("Kissing Heart")).toBeInTheDocument()
  expect(screen.getByAltText("Kissing Smiling Eyes")).toBeInTheDocument()
 
})
test("Copied testing", () => {
  const copy = new Clipboard(".copy-to-clipboard");
  const emoji = screen.getByTitle("emoji-results");
  userEvent.click(emoji[1]);
  console.log(copy.clipboardAction.text);
  expect(copy.clipboardAction.text).toBe("🔢");
});
test("input testing",()=>{
    
  let inputt=screen.getByLabelText(/input/i)
    expect(inputt).toHaveValue("")
})


test("input value testing",()=>{
  
  let inputt=screen.getByLabelText(/input/i)
  userEvent.type(inputt,"Test")
  expect(inputt).toHaveValue("Test")

})
