import { useState } from "react";
import TodoItem from "./TodoItem";

export type TodoItemType = {
  id: number;
  title: string;
  message: string;
};

const TodoList = () => {
  const [todoList, setTodoList] = useState<TodoItemType[]>([
    {
      id: 1,
      title: "첫 번째 할 일 입니다.",
      message: "프로젝트 생성하고 기능 개발",
    },
  ]);

  return todoList.map(todoItem => {
    return <TodoItem todoItem={todoItem} />;
  });
};

export default TodoList;
