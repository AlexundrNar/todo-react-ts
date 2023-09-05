import * as ReactDom from "react-dom";
import { InputCheckBox } from "./InputCheckBox";
import { act, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  e.target.checked;
};

describe("InputCheckBox", () => {
  let container: HTMLElement;

  beforeAll(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
    ReactDom.render(<InputCheckBox onChange={onChange} />, container);
  });

  afterAll(() => {
    document.body.removeChild(container);
    container.remove();
  });

  it("checkbox can be checked", async () => {
    const checkbox = screen.queryAllByRole("checkbox");
    checkbox.forEach((item) => {
      expect(item).not.toBeChecked();
    });
    await act(async () => {
      await userEvent.click(screen.getByRole("checkbox"));
    });
    expect(
      checkbox.forEach((item) => {
        expect(item).toBeChecked();
      })
    );
  });
});
