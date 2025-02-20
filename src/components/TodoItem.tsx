import { useState } from "react";
import styled from "styled-components";
import { useTodoListStore } from "../store/useTodoListStore";
import { TodoItemType } from "../types/common";

type Props = {
  todoItem: TodoItemType;
};

const TodoItem = ({ todoItem }: Props) => {
  const [isComplete, setIsComplete] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [editText, setEditText] = useState(todoItem.title);

  const editTodo = useTodoListStore(state => state.editTodo);
  const deleteTodo = useTodoListStore(state => state.deleteTodo);

  return (
    <Container $isComplete={isComplete}>
      <input
        type="checkbox"
        className="complete-check"
        checked={isComplete}
        onChange={e => {
          setIsComplete(e.target.checked);
        }}
      />

      <div className="content">
        {isEdit ? (
          <input
            type="text"
            className="edit-input"
            value={editText}
            onChange={e => {
              setEditText(e.target.value);
            }}
          />
        ) : (
          <p className="title">{todoItem.title}</p>
        )}
      </div>

      {!isComplete && (
        <div className="button-group">
          {isEdit ? (
            <button
              className="primary"
              onClick={() => {
                editTodo(todoItem.id, editText);
                setIsEdit(false);
              }}
            >
              완료
            </button>
          ) : (
            <button onClick={() => setIsEdit(true)}>수정</button>
          )}
          <button onClick={() => deleteTodo(todoItem.id)}>삭제</button>
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
    width: 100%;

    .edit-input {
      margin: 17px 0;
      width: 90%;
      height: 23px;
      font-size: 16px;
      outline: none;
    }
  }

  .button-group {
    margin-left: auto;

    > button {
      width: max-content;
    }

    .primary {
      background-color: #0f7aed;
    }
  }
`;
