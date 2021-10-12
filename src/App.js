import React, { useState, useEffect } from "react";

//COMPONENTS
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import TodoItem from "./components/TodoItem";
import Actions from "./components/Actions"

const App = () => {
  const [todoTitle, setTodoTitle] = useState("");
  const [todoArray, setTodoArray] = useState([]);
  const [pestañaActual, setPestañaActual] = useState("pendientes")

  const handleAddTodo = () => {
    if (todoArray.length === 0){
      setTodoArray([...todoArray, { title: todoTitle, status: "pendientes" }]);
      setTodoTitle("");}
    else{
    for (let i = 0; i < todoArray.length; i++) {
    if(todoArray[i].status === "pendientes" || 
    todoArray[i].status === "completadas"){
      if(todoArray[i].title === todoTitle){
        alert("You have already written this task ")
        break
      }
      if(todoTitle===""){
        alert("Write some task")
      }
      else{
        setTodoArray([...todoArray, { title: todoTitle, status: "pendientes" }]);
        setTodoTitle("");}
      };
    }}
  }

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("todoList"))) {
      setTodoArray(JSON.parse(localStorage.getItem("todoList")));
      console.log("Si existe");
    } else {
      setTodoArray(localStorage.setItem("todoList", JSON.stringify([])));
      console.log("No existe");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoArray));
  }, [todoArray]);


  return (
    <div className="h-screen bg-second flex justify-center items-center">
      <div className="bg-main w-full text-white px-10 py-10 rounded sm:w-10/12 md:w-6/12 h-2/3	overflow-scroll	">
        <h2 className="text-left text-3xl">TODO List</h2>
        <AddTodo
          todoTitle={todoTitle}
          setTodoTitle={setTodoTitle}
          handleAddTodo={handleAddTodo}
        />
        <Actions setPestaña={setPestañaActual}/>
        {
          (pestañaActual === "Todas") ? (
            <TodoList>
            {todoArray?.length > 0 &&
              todoArray.map((task, index) => {
                if(task.status === "pendientes" ||
                task.status === "completadas"){
                return <TodoItem
                  title={task.title}
                  status={task.status}
                  setTodoArray={setTodoArray}
                  index={index}
                  todoArray={todoArray}
                  key={index}
                />}
                else{
                  return null
                }
                })
            }
          </TodoList>
          ) :           
          (pestañaActual === "Pendientes") ? (
            <TodoList>
            {todoArray?.length > 0 &&
              todoArray.map((task, index) => {
                if(task.status === "pendientes"){
                return <TodoItem
                  title={task.title}
                  status={task.status}
                  setTodoArray={setTodoArray}
                  index={index}
                  todoArray={todoArray}
                  key={index}
                />}
                else{
                  return null
                }
                })}
          </TodoList>
          ) :           
           (pestañaActual === "Completadas") ? (
             <TodoList>
             {todoArray?.length > 0 &&
               todoArray.map((task, index) => {
                 if(task.status === "completadas"){
                 return <TodoItem
                   title={task.title}
                   status={task.status}
                   setTodoArray={setTodoArray}
                   index={index}
                   todoArray={todoArray}
                   key={index}
                 />}
                 else{
                  return null 
                }
                 })}
           </TodoList>
           ) : 
           (pestañaActual === "Eliminadas") ? (
            <TodoList>
            {todoArray?.length > 0 &&
              todoArray.map((task, index) => {
                if(task.status === "eliminadas"){
                return <TodoItem
                  title={task.title}
                  status={task.status}
                  setTodoArray={setTodoArray}
                  index={index}
                  todoArray={todoArray}
                  key={index}
                />}
                else{
                  return null 
                }
                })}
          </TodoList>
          ) :
          <></>
        }    
      </div>
    </div>
  )
};

export default App;