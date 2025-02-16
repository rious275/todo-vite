import { FormEvent, useState } from "react";
import styled from "styled-components";
import TodoList from "./components/TodoList";

export type TodoItemType = {
  id: number;
  title: string;
};

const INITIAL_TODO = {
  id: Date.now(),
  title: "첫 번째 할 일 입니다.",
};

function App() {
  const [todoList, setTodoList] = useState<TodoItemType[]>([INITIAL_TODO]);
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
        onDelete={todoId => {
          setTodoList(todoList.filter(todoItem => todoItem.id !== todoId));
        }}
        onEdit={(todoId, title) => {
          setTodoList(
            todoList.map(todoItem => {
              if (todoItem.id === todoId) {
                return { ...todoItem, title };
              }
              return todoItem;
            })
          );
        }}
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
