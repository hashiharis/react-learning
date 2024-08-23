/* eslint-disable react/prop-types */

export const TodoList=({obj,editItemId,setEditingItem,saveEditedItem,setEditItemId,editTask,deleteByFilter})=>{

  return(
 <div className="todo-item">
    {editItemId === obj.id ? (
      <div style={{display:"flex"}}>
        <input type="text" onChange={(e)=>setEditingItem(e.target.value)}/>
        <button
          onClick={() => {
            saveEditedItem(obj.id)
          }}
        >
          Save
        </button>
        <button
          onClick={() => {
            setEditItemId("");
          }}
        >
          Cancel
        </button>
      </div>
    ) : (
      <>
        <p id="todo-title" key={obj.id}>
          {obj.item}{" "}
        </p>
        <div className="button-class">
          <button
            onClick={() => {
              editTask(obj.id);
            }}
          >
            Edit
          </button>
          <button
            onClick={() => {
              deleteByFilter(obj.id);
            }}
          >
            Delete
          </button>
        </div>
      </>
    )}
  </div>
  )

}