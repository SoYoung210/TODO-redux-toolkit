import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Item {
  id: string;
  content: string;
  completed: boolean;
}

interface TodoState {
  items: Item[];
}

const todoSlice = createSlice({
  name: 'todos',
  initialState: { items: [] },
  reducers: {
    addTodo(state: TodoState, { payload }: PayloadAction<Item>) {
      const { id, content } = payload
      state.items.push({ id, content, completed: false })
    },
    toggleTodo(state: TodoState, { payload }: PayloadAction<string>) {
      const todo = state.items.find((todo: Item) => todo.id === payload)
      if (todo) {
        todo.completed = !todo.completed
      }
    }
  }
})

export const TODO = todoSlice.name;
export const todoReducer = todoSlice.reducer;
export const todoActions = todoSlice.actions;
