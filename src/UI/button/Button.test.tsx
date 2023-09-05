import * as ReactDom from "react-dom";
import { Button } from "./Button";
import { fireEvent } from "@testing-library/react";

const onClick = () => {
  console.log("it's done");
};

describe("button", () => {
  let container: HTMLElement;

  beforeAll(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
    ReactDom.render(<Button label={"Это кнопка"} className="btn-primary" onClick={onClick} />, container);
  });

  afterAll(() => {
    document.body.removeChild(container);
    container.remove();
  });

  it("button with functionality", () => {
    const button = container.querySelector('.btn-primary')!
    expect(button).toBeInTheDocument()
    fireEvent.click(button)
    expect(button).toReturn
  });
});
