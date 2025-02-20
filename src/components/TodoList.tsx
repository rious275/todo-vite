import { TodoListType } from "../types/common";
import TodoItem from "./TodoItem";

type Props = {
  todoList: TodoListType;
};

const TodoList = ({ todoList }: Props) => {
  return todoList.map(todoItem => {
    return <TodoItem key={`${todoItem.id}`} todoItem={todoItem} />;
  });
};

export default TodoList;
