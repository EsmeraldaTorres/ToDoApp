import React from "react";

const AddTodo = ({ todoTitle, setTodoTitle, handleAddTodo }) => {

return (

<div className="flex w-full mt-5">

<input

type="text"

className="w-3/4 p-2 text-black"

onChange={e =>

setTodoTitle(e.target.value) }

value={todoTitle}

/>

<button className="bg-yellow w-1/4" onClick={handleAddTodo}>

Agregar +

</button>

</div>

);

};

export default AddTodo;