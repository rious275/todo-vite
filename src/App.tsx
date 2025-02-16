import { FormEvent, useState } from "react";
import styled from "styled-components";
import TodoList from "./components/TodoList";
import { TodoListType } from "./types/common";

const INITIAL_TODO = {
  id: Date.now(),
  title: "첫 번째 할 일 입니다.",
};

function App() {
  const [todoList, setTodoList] = useState<TodoListType>([INITIAL_TODO]);
  const [inputText, setInputText] = useState("");

  const createTodo = (e: FormEvent) => {
    e.preventDefault();
    setTodoList([
      ...todoList,
      {
        id: Date.now(),
        title: inputText,
      },
    ]);
    setInputText("");
  };

  const onDelete = (todoId: number) => {
    setTodoList(todoList.filter(todoItem => todoItem.id !== todoId));
  };

  const onEdit = (todoId: number, title: string) => {
    setTodoList(
      todoList.map(todoItem => {
        if (todoItem.id !== todoId) return todoItem;
        return { ...todoItem, title };
      })
    );
  };

  return (
    <Container>
      <h1>todo list</h1>
      <form onSubmit={createTodo}>
        <input
          type="text"
          className="create-input"
          value={inputText}
          onChange={e => setInputText(e.target.value)}
        />
      </form>
      <TodoList
        todoList={todoList}
        onDelete={todoId => onDelete(todoId)}
        onEdit={(todoId, title) => onEdit(todoId, title)}
      />
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 500px;
  max-width: 500px;

  form {
    margin-bottom: 20px;

    .create-input {
      width: 100%;
      height: 40px;
      outline: none;
      font-size: 20px;
    }
  }
`;
