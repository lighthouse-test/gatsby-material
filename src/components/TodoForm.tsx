import React, { FunctionComponent, useState } from "react";
import { Todo, TYPES, TodoErrorStatus } from "./todos";

interface Props {
  todo: Partial<Todo>;
  onAddOrUpdate: Function;
}

export const TodoForm: FunctionComponent<Props> = (props: Props) => {
  const [todo, setTodo] = useState<Partial<Todo>>(props.todo);
  const [types] = useState<string[]>(TYPES);
  const [errors, setErrors] = useState<TodoErrorStatus>({ status: false });

  const formChangeHandler = (event: any) => {
    const target = event.target;
    const name = target.name;
    let value: boolean;
    switch (target.type) {
      case "checkbox":
        value = target.checked;
        break;

      default:
        value = target.value;
        break;
    }
    setTodo({
      ...Object.assign(todo, { [name]: value }),
    });
  };

  const updateTodoHandler = (event: React.FormEvent) => {
    event.preventDefault();
    setErrors({ status: false });
    if (!todo.name) {
      setErrors({
        ...Object.assign(errors, {
          name: "Name is required.",
          status: true,
        }),
      });
    }
    if (!todo.description) {
      setErrors({
        ...Object.assign(errors, {
          description: "Description is required.",
          status: true,
        }),
      });
    }
    if (!todo.type) {
      setErrors({
        ...Object.assign(errors, {
          type: "Type is required.",
          status: true,
        }),
      });
    }
    if (!todo.date) {
      setErrors({
        ...Object.assign(errors, {
          date: "Date is required.",
          status: true,
        }),
      });
    }
    setTimeout(() => {
      if (!errors.status) {
        props.onAddOrUpdate(todo);
      } else {
        alert("All Fields are required");
      }
    });
  };

  return (
    <>
      <h4>{todo.id ? "Update" : "Add"} Todo</h4>
      <form onSubmit={updateTodoHandler} noValidate>
        <table>
          <tbody>
            <tr>
              <th align="left">
                <label htmlFor="name">Name</label>
              </th>
              <td>
                <input
                  id="name"
                  type="text"
                  name="name"
                  onChange={formChangeHandler}
                  value={todo.name}
                  required
                />
              </td>
              <td>{errors.name}</td>
            </tr>
            <tr>
              <th align="left">
                <label htmlFor="description">Description</label>
              </th>
              <td>
                <textarea
                  id="description"
                  name="description"
                  onChange={formChangeHandler}
                  value={todo.description}
                  required
                ></textarea>
              </td>
              <td>{errors.description}</td>
            </tr>
            <tr>
              <th align="left">
                <label>Type</label>
              </th>
              <td>
                <select
                  id="type"
                  name="type"
                  onChange={formChangeHandler}
                  value={todo.type}
                  required
                >
                  {types.map((type: string) => (
                    <option value={type} key={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </td>
              <td>{errors.type}</td>
            </tr>
            <tr>
              <th align="left">
                <label>Confidential</label>
              </th>
              <td>
                <label htmlFor="confidential1">Yes</label>
                <input
                  id="confidential1"
                  type="radio"
                  name="confidential"
                  value="Yes"
                  onChange={formChangeHandler}
                  checked={todo.confidential === "Yes"}
                />
                <label htmlFor="confidential2">No</label>
                <input
                  id="confidential2"
                  type="radio"
                  name="confidential"
                  value="No"
                  onChange={formChangeHandler}
                  checked={todo.confidential === "No"}
                />
              </td>
              <td></td>
            </tr>
            <tr>
              <th align="left">
                <label>Remind</label>
              </th>
              <td>
                <label htmlFor="remind">Yes</label>
                <input
                  id="remind"
                  type="checkbox"
                  name="remind"
                  onChange={formChangeHandler}
                  checked={todo.remind}
                />
              </td>
              <td></td>
            </tr>
            <tr>
              <th align="left">
                <label htmlFor="date">Date</label>
              </th>
              <td>
                <input
                  id="date"
                  type="date"
                  name="date"
                  onChange={formChangeHandler}
                  value={todo.date}
                  required
                />
              </td>
              <td>{errors.date}</td>
            </tr>
            <tr>
              <th colSpan={2} align="right">
                <button type="submit">{todo.id ? "Update" : "Add"}</button>
              </th>
            </tr>
          </tbody>
        </table>
      </form>
    </>
  );
};

export default TodoForm;
