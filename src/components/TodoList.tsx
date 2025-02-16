import { TodoItemType } from "../App";
import TodoItem from "./TodoItem";

type Props = {
  todoList: TodoItemType[];
};

const TodoList = ({ todoList }: Props) => {
  return todoList.map(todoItem => {
    return <TodoItem key={`${todoItem.id}`} todoItem={todoItem} />;
  });
};

export default TodoList;
