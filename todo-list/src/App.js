import React from 'react';
import {
  RecoilRoot,
  // atom,
  // selector,
  // useRecoilState,
  // useRecoilValue,
} from 'recoil';
import ToDoList from './components/ToDoList';
import './App.css';

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
