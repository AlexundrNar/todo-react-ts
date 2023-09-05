import { TodoItemProps } from "../../models/todo"
import "./style.css"


export const TodoItem = ({item, className}: TodoItemProps) => {
  return (
    <p className={`todo__item + ${className}`}>{item}</p>
  )
}
