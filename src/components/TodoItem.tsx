import { useState } from "react";
import styled from "styled-components";
import { TodoItemType } from "../App";

type Props = {
  todoItem: TodoItemType;
  onDelete: (id: number) => void;
};

const TodoItem = ({ todoItem, onDelete }: Props) => {
  const [isComplete, setIsComplete] = useState(false);

  return (
    <Container $isComplete={isComplete}>
      <input
        type="checkbox"
        className="complete-check"
        checked={isComplete}
        onChange={() => null}
      />

      <div className="content">
        <h3 className="title">{todoItem.title}</h3>
      </div>

      {!isComplete && (
        <div className="button-group">
          <button>수정</button>
          <button onClick={() => onDelete(todoItem.id)}>삭제</button>
        </div>
      )}
    </Container>
  );
};

export default TodoItem;

const Container = styled.div<{ $isComplete: boolean }>`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;

  .complete-check {
    width: 16px;
    height: 16px;
  }

  .title {
    min-width: 380px;
  }

  .title,
  .message {
    font-size: 18px;
    ${({ $isComplete }) => $isComplete && "text-decoration: line-through"};
  }

  .content,
  .button-group {
    display: flex;
    gap: 10px;
  }

  .content {
    margin-right: 40px;
  }

  .button-group > button {
    width: max-content;
  }
`;
