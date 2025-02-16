import { TodoCommonPropsType, TodoListType } from "../types/common";
import TodoItem from "./TodoItem";

type Props = TodoCommonPropsType & {
  todoList: TodoListType;
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
