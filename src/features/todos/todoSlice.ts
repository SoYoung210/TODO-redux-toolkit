import {
  createSlice,
  PayloadAction,
  createSelector,
  createAsyncThunk
} from '@reduxjs/toolkit'
import { RootState } from '..'

const actionPrefix = 'todos'

export interface Item {
  id: string;
  content: string;
  completed: boolean;
}

interface TodoState {
  items: Item[];
  isLoading: boolean;
}

function timeout(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// For fake loading
const fakeAddLoading = createAsyncThunk(
  `${actionPrefix}/fakeAddLoading`,
  async () => {
    await timeout(500)

    return
  }
)

const todoSlice = createSlice({
  name: actionPrefix,
  initialState: { items: [], isLoading: false },
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
  },
  extraReducers: {
    [`${fakeAddLoading.fulfilled}`]: (state: TodoState, { payload }: PayloadAction<string>) => {
      state.isLoading = false
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
