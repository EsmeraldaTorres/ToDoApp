import React from "react";

const TodoItem = ({ title, status, setTodoArray, index, todoArray }) => {

const completeOrDeleteTodo = () => {

if (status === "completadas") {

const quitTodos = [...todoArray];

quitTodos[index].status = "eliminadas"

setTodoArray(quitTodos);

} else if(status === "pendientes") {

const updatedTodos = [...todoArray]; //<----- Array original

updatedTodos[index].status = "completadas"; //<----- El "mismo" array, pero con un valor actualizado

setTodoArray(updatedTodos);

console.log(updatedTodos[index])

} else if(status === "eliminadas"){

const deletedDefinitly = [...todoArray];

deletedDefinitly.splice(index, 1);

setTodoArray(deletedDefinitly);

}else{

setTodoArray(todoArray)

}

};

return (

<div className="flex justify-between item-center w-full mt-5 border-b-2 border-third_blue py-3">

<p className={`${status === "completadas" ? "line-through" : ""}`}>{title}</p>

<button

className={`${status === "pendientes" ? "bg-green" : status === "eliminadas" ? "bg-red" : "bg-cream"} py-2 px-5`}

onClick={completeOrDeleteTodo}

>

{status === "completadas"? "Remover" : status === "eliminadas" ? "Eliminar" : "Completar"}

</button>

</div>

);

};

export default TodoItem;