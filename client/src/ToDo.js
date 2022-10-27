import React, { useState } from "react";

function ToDo({
  todo,
  updateTodo,
  update,
  setUpdate,
  deleteTodo,
  inputVal,
  setDisable,
  editTodo,
}) {
  const [editMode, setEditMode] = useState(false);
  const [newInputVal, setNewInputVal] = useState(inputVal);

  const editToDoHandler = async (id) => {
    await editTodo(id, newInputVal);
    setEditMode(!editMode);
    setUpdate(!update);
  };

  return (
    <li>
      <input
        type={"checkbox"}
        checked={todo.done}
        onClick={() => updateTodo(todo)}
      />
      <div onClick={setDisable}>
        <div>
          {editMode ? (
            <input
              type="text"
              value={newInputVal}
              onChange={(e) => setNewInputVal(e.target.value)}
            />
          ) : todo.done ? (
            <del>{todo.text}</del>
          ) : (
            <span>{todo.text}</span>
          )}
        </div>

        {editMode ? (
          <button onClick={() => editToDoHandler(todo._id)}>Сохранить</button>
        ) : (
          <button onClick={() => setEditMode(true)}>Редактировать</button>
        )}
        <button onClick={() => deleteTodo(todo._id)}>Удалить</button>
      </div>
    </li>
  );
}

export default ToDo;
