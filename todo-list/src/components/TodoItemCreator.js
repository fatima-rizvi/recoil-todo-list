import React, {useState} from 'react';
import {
//   RecoilRoot,
//   atom,
  selector,
//   useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from 'recoil';
import { getFID } from 'web-vitals';

//Utility for creating a new id
let id = 0;
function getId() {
    return id++;
}

// To create new todo items, we need to access a setter function that can update the contents of the todoListState (the atom we made in the ToDoList component)
// Use the useSetRecoilState hook to get a setter function in this component
// Note: We use the updater form of the setter function sp that we can create a new todoList based on the old todo list

function TodoItemCreator({listState}) {
    const [inputValue, setInputValue] = useState('');
    const setTodoList = useSetRecoilState(listState);

    const addItem = () => {
        setTodoList((oldTodoList) => [
            ...oldTodoList,
            {
                id: getFID(),
                text: inputValue,
                isComplete: false,
            },
        ]);
        setInputValue('');
    };

    const onChange = ({target: {value}}) => {
        setInputValue(value);
    };

    return (
        <div>
            <input
                type = "text"
                value = {inputValue}
                onChange = {onChange}
            />
            <button onClick = {addItem}>Add task</button>
        </div>
    );
}

export default TodoItemCreator;