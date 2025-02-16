import styled from "styled-components";
import TodoList from "./components/TodoList";

function App() {
  return (
    <Container>
      <h1>todo list</h1>
      <TodoList />
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
`;
