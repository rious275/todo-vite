import { FormEvent } from "react";
import styled from "styled-components";
import TodoList from "./components/TodoList";
import { useInputTextStore } from "./store/useInputTextStore";
import { useTodoListStore } from "./store/useTodoListStore";

function App() {
  const { todoList, addTodo } = useTodoListStore();
  const { inputText, setInputText } = useInputTextStore();

  const createTodo = (e: FormEvent) => {
    e.preventDefault();
    addTodo({
      id: Date.now(),
      title: inputText,
    });
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
      <TodoList todoList={todoList} />
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
