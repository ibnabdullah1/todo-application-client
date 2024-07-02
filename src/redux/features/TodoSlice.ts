import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface TTodo {
  id: string;
  titles: string;
  descriptions: string;
  priority: string;
  isCompleted?: boolean;
}
interface TInitialState {
  todos: TTodo[];
  filter?: string;
}
const initialState: TInitialState = {
  todos: [],
  filter: "",
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TTodo>) => {
      state.todos.push({ ...action.payload, isCompleted: false });
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    toggleComplete: (state, action: PayloadAction<string>) => {
      const task = state.todos.find((todo) => todo.id === action.payload);
      task!.isCompleted = !task?.isCompleted;
    },
    updateTask: (state, action: PayloadAction<TTodo>) => {
      const task = state.todos.find((todo) => todo.id === action.payload.id);
      task!.title = action?.payload?.title;
      task!.description = action?.payload?.description;
    },
    taskFilter: (state, action: PayloadAction<string>) => {
      state.filter = action?.payload;
    },
  },
});
export const { addTodo, removeTodo, toggleComplete, updateTask, taskFilter } =
  todoSlice.actions;

export default todoSlice.reducer;
