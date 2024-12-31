import { useState } from "react";

function ToDoList() {
    const [toDo, setToDo] = useState([]);
    const [newToDo, setNewToDo] = useState("");

    const handleInput = (e) => {
        setNewToDo(e.target.value);
    }
    const handelAddToDo = () => {
        if(newToDo.trim() !== "") {
            setToDo(preToDo => [newToDo, ...preToDo]);
            //document.getElementById('addTask').value="";
            setNewToDo("");
        }
    }
    const handleEnter = (e) => {
        if(e.key === "Enter"){
            handelAddToDo();
        }
    }
    const handelRemoveToDo = (index) => {
        setToDo((preToDo) => preToDo.filter((_,i) => i != index));
    }
    const handelMoveUp = (index) => {
        if(index>0){
            setToDo((preToDo) => {
                const updateToDo = [...preToDo];
                // const element = updateToDo.splice(index, 1);
                // updateToDo.splice(index - 1, 0, element[0]);
                [updateToDo[index-1],updateToDo[index]] = [updateToDo[index], updateToDo[index-1]]
                return updateToDo;
                }
            );
        }
    }
    const handelMoveDown = (index) => {
        if(index < toDo.length - 1){
            setToDo((preToDo) => {
                const updateToDo = [...preToDo];
                [updateToDo[index+1], updateToDo[index]] = [updateToDo[index], updateToDo[index+1]];
                return updateToDo;
                }
            );
        }
    }


    return(<div className="toDoList">
        <h1 className="title">Todo List</h1>
        <input type="text" id="addTask" placeholder="Enter the task to do" value={newToDo} onChange={handleInput} onKeyPress={handleEnter} /> <button onClick={handelAddToDo}>Add</button>
        <ol>
            {toDo.map((toDo, index) => <li key={index}>
                <label className="task">{toDo} </label>
                <div className="controllers">
                    <button className="remove" onClick={() => handelRemoveToDo(index)}>Remove</button> 
                    <button className="moveUp" onClick={() => handelMoveUp(index)}>Move Up /\</button> 
                    <button className="moveDown" onClick={() => handelMoveDown(index)}>Move Down \/</button>
                </div>
            </li>)}
        </ol>
    </div>);
}

export default ToDoList