import { TodoItemType } from "../App";
import TodoItem from "./TodoItem";

type Props = {
  todoList: TodoItemType[];
  onDelete: (todoId: number) => void;
  onEdit: (todoId: number, title: string) => void;
};

const TodoList = ({ todoList, onDelete, onEdit }: Props) => {
  return todoList.map(todoItem => {
    return (
      <TodoItem
        key={`${todoItem.id}`}
        todoItem={todoItem}
        onDelete={onDelete}
        onEdit={onEdit}
      />
    );
  });
};

export default TodoList;
