import { TodoItemType } from "../App";
import TodoItem from "./TodoItem";

type Props = {
  todoList: TodoItemType[];
  onDelete: (id: number) => void;
};

const TodoList = ({ todoList, onDelete }: Props) => {
  return todoList.map(todoItem => {
    return (
      <TodoItem
        key={`${todoItem.id}`}
        todoItem={todoItem}
        onDelete={onDelete}
      />
    );
  });
};

export default TodoList;
