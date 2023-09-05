import * as ReactDom from "react-dom";
import { Input } from "./Input";
import { fireEvent, screen } from "@testing-library/react";

const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  e.target.value = "12345";
};

describe("input", () => {
  let container: HTMLElement;

  beforeAll(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
    ReactDom.render(<Input onChange={onChange} />, container);
  });

  afterAll(() => {
    document.body.removeChild(container);
    container.remove();
  });

  it("input to be in the doc with value", () => {
    screen.queryAllByRole("input").forEach((item) => {
      expect(item).toBeInTheDocument()
      expect(item).toContainHTML("");
      fireEvent.input(item, {
        target: { value: "12345" },
      });
      expect(item).toContainHTML("12345");
    });
  });
});
