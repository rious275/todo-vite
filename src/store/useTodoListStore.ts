import { create } from "zustand";
import { INITIAL_TODO } from "../constants/common";
import { TodoItemType, TodoListType } from "../types/common";

type TodoListStoreType = {
  todoList: TodoListType;
  addTodo: (todo: TodoItemType) => void;
  deleteTodo: (todoId: number) => void;
  editTodo: (todoId: number, title: string) => void;
};

export const useTodoListStore = create<TodoListStoreType>(set => ({
  todoList: [INITIAL_TODO],
  addTodo: (todo: TodoItemType) => {
    set(({ todoList }) => {
      return { todoList: [...todoList, todo] };
    });
  },
  deleteTodo: (todoId: number) => {
    set(({ todoList }) => {
      const filterTodoList = todoList.filter(({ id }) => id !== todoId);
      return { todoList: filterTodoList };
    });
  },
  editTodo: (todoId: number, title: string) => {
    set(({ todoList }) => {
      const editTodoList = todoList.map(todoItem => {
        if (todoItem.id !== todoId) return todoItem;
        return { ...todoItem, title };
      });
      return { todoList: editTodoList };
    });
  },
}));
