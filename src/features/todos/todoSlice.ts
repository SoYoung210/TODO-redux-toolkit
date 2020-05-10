import { createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit'
import { RootState } from '..'

export interface Item {
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
    add(state: TodoState, { payload }: PayloadAction<Omit<Item, 'completed'>>) {
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

const todoSelector = (state: RootState) => state[TODO]
const getItems = createSelector(
  todoSelector,
  todo => todo.items
)

// TODO: Implement
// const createSelectorCreator = (name: string) => (
//   (state: RootState) => state[name]
// )

// const todoSelector2 = createSelectorCreator(name)
// const getItems2 = todoSelector(todo => todo.items)

export const todoSelectors = {
  items: getItems,
};

export const TODO = todoSlice.name;
export const todoReducer = todoSlice.reducer;
export const todoActions = todoSlice.actions;
