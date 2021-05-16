import React, { FunctionComponent, useState } from "react";

import {
  Todo,
  getTodos,
  getTodo,
  addTodo,
  updateTodo,
  deleteTodo,
} from "./todos";

import TodoView from "./TodoView";
import TodoForm from "./TodoForm";

export const Todos: FunctionComponent = () => {
  const [currentTodo, setCurrentTodo] = useState<Partial<Todo> | null>(null);
  const [currentEvent, setCurrentEvent] = useState<string | null>(null);
  const [todos, setTodos] = useState<Todo[]>(getTodos());

  const addTodoHandler = () => {
    setCurrentEvent("edit");
    setCurrentTodo({
      name: "",
      description: "",
      type: "",
      confidential: "No",
      remind: false,
      date: "",
    });
  };

  const selectTodoHandler = (id: number, currentEvent: string) => {
    setCurrentEvent(currentEvent);
    setCurrentTodo(getTodo(id));
  };

  const onUpdateTodoHandler = (todo: Partial<Todo>) => {
    if (!todo.id) {
      addTodo(todo);
    } else {
      updateTodo(todo as Todo);
    }
    setCurrentTodo(null);
    setTodos(new Array(...getTodos()));
  };

  const deleteTodoHandler = (id: number) => {
    deleteTodo(id);
    setTodos(new Array(...getTodos()));
  };

  return (
    <>
      <h3>
        Todos <button onClick={addTodoHandler}>New</button>
      </h3>
      {currentTodo && currentEvent === "view" && (
        <TodoView todo={currentTodo} onClose={() => setCurrentEvent(null)} />
      )}
      {currentTodo && currentEvent === "edit" && (
        <TodoForm todo={currentTodo} onAddOrUpdate={onUpdateTodoHandler} />
      )}
      <br />
      <table width="100%">
        <thead>
          <tr>
            <th align="left">Id</th>
            <th align="left">Name</th>
            <th align="left">description</th>
            <th align="left">Type</th>
            <th align="left">Confidential</th>
            <th align="left">Remind</th>
            <th align="left">Date</th>
            <th align="left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.id}</td>
              <td>{todo.name}</td>
              <td>{todo.description}</td>
              <td>{todo.type}</td>
              <td>{todo.confidential}</td>
              <td>{todo.remind.toString()}</td>
              <td>{todo.date}</td>
              <td>
                <button
                  type="button"
                  onClick={() => selectTodoHandler(todo.id, "view")}
                >
                  View
                </button>
                &nbsp;
                <button
                  type="button"
                  onClick={() => selectTodoHandler(todo.id, "edit")}
                >
                  Edit
                </button>
                &nbsp;
                <button
                  type="button"
                  onClick={() => deleteTodoHandler(todo.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Todos;
