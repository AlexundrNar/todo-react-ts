import React, { useState } from "react";
import List from "../../components/List";
import { todosProps } from "../../models/todo";
import { TodoItem } from "../../components/todoItem";
import { data } from "../../data/todosData";
import { Button } from "../../UI/button/Button";
import { InputCheckBox } from "../../UI/inputCheckBox/InputCheckBox";
import { CreateTodo } from "./createTodo";

import "./style.css";

export const Todos = () => {
  const [inputVal, setInputVal] = useState<string | null>("");
  const [todos, setTodos] = useState<todosProps[]>(data);
  const [todosDone, setTodosDone] = useState<todosProps[]>([]);

  // ------------- получение значения инпута для наименования задачи
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputVal(e.target.value);
  };

  // ------------- функционал добавления задачи в общий список
  const onClickAddTask = () => {
    setTodos([...todos, { taskName: inputVal }]);
  };

  // ------------- функционал удаления задачи из списка выполненных
  const onClickDeleteTask = (idx: number) => {
    const spliceArray = [...todosDone].filter(
      (item) => item !== todosDone[idx]
    );
    setTodosDone(spliceArray);
  };

  // ------------- функционал смены статуса задачи и отправки ее в список выполненных
  const checkedHandler = (idx: number) => {
    setTodosDone([...todosDone, todos[idx]]);
    const spliceArray = [...todos].filter((item) => item !== todos[idx]);
    setTodos(spliceArray);
  };

  return (
    <>
      <CreateTodo
        onChangeHandler={onChangeHandler}
        onClickAddTask={onClickAddTask}
      />

      <List
        caption="Список задач в работе"
        className="todo__task-list"
        items={todos}
        renderItem={(todo, idx) => (
          <div key={idx}>
            <InputCheckBox data-testid="checkbox__change-status"
              checked={false}
              onChange={() => checkedHandler(idx)}
            />
            <TodoItem item={todo.taskName} />
          </div>
        )}
      />

      <List
        caption="Список выполненных задач"
        className="todo__task-list"
        items={todosDone}
        renderItem={(todo, idx) => (
          <div key={idx}>
            <InputCheckBox disabled={true} checked={true} />
            <TodoItem className="task-done" item={todo.taskName} />
            <Button data-testid="btn_delete-task"
              label={"Удалить"}
              className="btn-danger"
              onClick={() => onClickDeleteTask(idx)}
            />
          </div>
        )}
      />
    </>
  );
};
