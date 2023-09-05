import { FC } from "react"
import "./style.css"

interface ButtonProps {
  label: string,
  className?: string,
  onClick?: () => void
}

export const Button: FC<ButtonProps> = ({label, className, onClick}: ButtonProps) => {
  return (
    <>
      <button className={`btn + ${className}`} onClick={onClick}>{label}</button>
    </>
  )
}
