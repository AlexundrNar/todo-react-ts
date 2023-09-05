export interface todosProps {
  taskName: string | null;
}

export interface ListProps<T> {
  caption: string,
  className: string,
  items: T[],
  renderItem: (item: T, idx: number) => React.ReactNode
}

export interface TodoItemProps {
  item: React.ReactNode,
  className?: string
}

export interface createTodoProps {
  onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void,
  onClickAddTask: () => void
}
