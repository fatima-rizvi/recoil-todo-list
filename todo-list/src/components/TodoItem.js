import React from 'react';
import {
//   RecoilRoot,
//   atom,
  // selector,
  useRecoilState,
//   useRecoilValue,
} from 'recoil';

// This component will display the value of the todo item AND allow us to edit and delete the item

// Create a function to replace the item at an index postion (edit)
function replaceItemAtIndex(arr, index, newValue) {
    return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

// Create a function that will remove the item an an index position (delete)
function removeItemAtIndex(arr, index) {
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
}

// We'll use the useRecoilState function to read the state that we're passing in from ToDoList and to get a setter function that we use to edit the item, mark it as complete, and delete it

function TodoItem({item, listState}) {
    const [todoList, setTodoList] = useRecoilState(listState);
    const index = todoList.findIndex((listItem) => listItem === item);

    const editItemText = ({target : {value}}) => {
        const newList = replaceItemAtIndex(todoList, index, {
            ...item,
            text: value,
        });
        
        setTodoList(newList);
    };

    const toggleItemCOmpletion = () => {
        const newList = replaceItemAtIndex(todoList, index, {
            ...item,
            isComplete: !item.isComplete,
        });

        setTodoList(newList);
    }

    const deleteItem = () => {
        const newList = removeItemAtIndex(todoList, index);

        setTodoList(newList);
    }

    return (
        <div>
            <input
                type = "text"
                value = {item.text}
                onChange = {editItemText}
            />
            <input 
                type = "checkbox"
                checked = {item.isComplete}
                onChange = {toggleItemCOmpletion}
            />
            <button onClick = {deleteItem}>Complete!!</button>
        </div>
    )

};

export default TodoItem;