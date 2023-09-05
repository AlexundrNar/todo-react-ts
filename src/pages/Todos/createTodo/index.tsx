import { Button } from '../../../UI/button/Button';
import { Input } from "../../../UI/input/Input";
import { createTodoProps } from '../../../models/todo';

import "./style.css";

export const CreateTodo = ({onChangeHandler, onClickAddTask}: createTodoProps) => {
  return (
    <div className="todo__task-add">
        <Input onChange={onChangeHandler} />
        <Button data-testid="btn_create-task"
          label={"Создать задачу"}
          className="btn-primary"
          onClick={onClickAddTask}
        />
      </div>
  )
}
