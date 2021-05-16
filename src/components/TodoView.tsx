import React, { FunctionComponent, useState } from "react";
import { Todo } from "./todos";

interface Props {
  todo: Partial<Todo>;
  onClose: Function;
}

export const TodoForm: FunctionComponent<Props> = (props: Props) => {
  const [todo] = useState<Partial<Todo>>(props.todo);

  const closeTodoHandler = () => {
    props.onClose();
  };

  return (
    <>
      <h4>Todo</h4>
      <table>
        <tbody>
          <tr>
            <th align="left">Name</th>
            <td>{todo.name}</td>
          </tr>
          <tr>
            <th align="left">Description</th>
            <td>{todo.description}</td>
          </tr>
          <tr>
            <th align="left">Type</th>
            <td>{todo.type}</td>
          </tr>
          <tr>
            <th align="left">Confidential</th>
            <td>{todo.confidential}</td>
          </tr>
          <tr>
            <th align="left">Remind</th>
            <td>{todo.remind?.toString()}</td>
          </tr>
          <tr>
            <th align="left">Date</th>
            <td>{todo.date}</td>
          </tr>
          <tr>
            <th colSpan={2} align="right">
              <button type="button" onClick={closeTodoHandler}>
                Close
              </button>
            </th>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default TodoForm;
