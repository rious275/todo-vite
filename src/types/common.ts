export type TodoListType = TodoItemType[];

export type TodoItemType = {
  id: number;
  title: string;
};

export type TodoCommonPropsType = {
  onDelete: (todoId: number) => void;
  onEdit: (todoId: number, title: string) => void;
};
