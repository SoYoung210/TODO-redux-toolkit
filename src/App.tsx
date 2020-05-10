import React from 'react';
import logo from './logo.svg';
import './App.css';

import './styles/colors.pcss'
import { TodoList } from './features/todos/Todos';

function App() {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

export default App;
