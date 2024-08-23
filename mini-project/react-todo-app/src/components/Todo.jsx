import { useState } from "react";
import "./todo.css";
import { TodoList } from "./TodoList";

export const Todo = () => {
  const [todo, setTodo] = useState([]);
  const [item, setItem] = useState("");
  const [editItemId, setEditItemId] = useState("");
  const [editingItem,setEditingItem]=useState("");

  const handleChange = (e) => {
    setItem(e.target.value);
  };

  const addTask = (e) => {
    if (!item) {
      alert("Please enter item");
      return;
    }
    e.preventDefault();
    let copyArr = [...todo];
    let obj = {
      id: Math.floor(Math.random() * 100000),
      item,
    };
    console.log("obj=>", obj);
    copyArr.push(obj);
    copyArr.reverse();
    setTodo(copyArr);
    setItem("");
  };

//   const deleteTask = (i) => {
//     let updArr = [...todo];
//     updArr.splice(i, 1);
//     setTodo(updArr);
//   };

  // Most preferred to remove items from array use filter method
  const deleteByFilter = (id) => {
    let updArr = todo.filter((obj) => obj.id !== id);
    setTodo(updArr);
  };

  console.log(todo);

  const editTask = (id) => {
    setEditItemId(id);
  };

  const saveEditedItem=(id)=>{
    if(!editingItem){
        alert("Please enter a value")
        return;
    }
    let updArr=todo.map((obj)=>{

        if(obj.id===id){
            obj.item=editingItem
        }
        return obj

    })
    setTodo(updArr)
    setEditItemId("");
  }

  console.log("edit id=>", editItemId);
  return (
    <div className="todo-section">
      <h1>TODO LIST</h1>
      <form onSubmit={addTask}>
        <input
          value={item}
          type="text"
          placeholder="add item..."
          onChange={handleChange}
        />
        <button type="submit" className="add-btn">
          Add
        </button>
      </form>
      <div className="task-list">
        {todo.map((obj,index) => {
          return (
             <TodoList 
                key={index}
                obj={obj}
                editItemId={editItemId}
                setEditingItem={setEditingItem}
                saveEditedItem={saveEditedItem}
                setEditItemId={setEditItemId}
                editTask={editTask}
                deleteByFilter={deleteByFilter}
                />
          );
        })}
      </div>
    </div>
  );
};
