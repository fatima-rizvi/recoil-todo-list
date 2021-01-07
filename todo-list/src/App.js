import React from 'react';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import './App.css';

// Atoms
// They represent a piece of state
// Can be read from and written to from any component
// Components that read the value of an atom are implicitly subscribed to an atom, so anytime the atom updates all, all components subscribed to it will rerender
// An atom contains the source of truth for the application state. In this todo list, the source of truth is going to be an array of objects, and each object will represent a todo item
// Create the list atom called todoListState using the atom() function

const todoListState = atom({
  key: 'todoListState', // unique id (in respect to other atoms/selectors)
  default: [],  // default value aka initial value
});

// Create the ToDoList component
function ToDoList() {
  const todoList = useRecoilValue(todoListState)  // Use the useRecoilValue hook in order to read the contents of the todoListState atom

  return (
    <div>
      {/* <ToDoListStats /> */}
      {/* <ToDoListFilters /> */}
      <TodoItemCreator />

      {todoList.map((todoItem) => (
        <TodoItem key = {todoItem.id} item = {todoItem} />
      ))}
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <ToDoList />
      </RecoilRoot>
    </div>
  );
}

export default App;
