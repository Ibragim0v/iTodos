import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export function Form({ input, setInput, todos, setTodos, edit, setEdit }) {
  function updateTodo(title, id, isCompleted) {
    const newTodo = todos.map((todo) =>
      todo.id === id ? { title, id, isCompleted } : todo
    );
    setTodos(newTodo);
    setEdit("");
  }

  useEffect(() => {
    if (edit) {
      setInput(edit.title);
    } else {
      setInput("");
    }
  }, [setInput, edit]);

  const onInputChange = (e) => {
    setInput(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();

    if (!edit) {
      setTodos([...todos, { id: uuidv4(), title: input, isCompleted: false }]);
      setInput("");
    } else {
      updateTodo(input, edit.id, edit.isCompleted);
    }
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        required
        value={input}
        type='text'
        placeholder='Enter a Todo...'
        className='task-input'
        onChange={onInputChange}
      />
      <button className='button-add' type='submit'>
        {edit ? "Ok" : "Add"}
      </button>
    </form>
  );
}
