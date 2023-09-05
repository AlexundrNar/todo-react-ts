import { FC } from "react";
import "./style.css"

interface InputProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input: FC<InputProps> = ({ onChange }: InputProps) => {
  return (
    <>
      <input className="input-text" type="text" onChange={onChange} />
    </>
  );
};
