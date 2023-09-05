import { FC } from "react";
import "./style.css"

interface ChboxProps {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
  checked?: boolean,
  disabled?: boolean,
}

export const InputCheckBox: FC<ChboxProps> = ({ onChange, checked, disabled }: ChboxProps) => {
  return (
    <>
      <input onChange={onChange} disabled={disabled} checked={checked} type={"checkbox"} />
    </>
  );
};
