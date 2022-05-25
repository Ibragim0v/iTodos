export function TodoList({ todos, setTodos, setEdit }) {
  const handleComplete = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, isCompleted: !item.isCompleted };
        }

        return item;
      })
    );
  };

  const handlEdit = ({ id }) => {
    const findTodo = todos.find((todo) => todo.id === id);
    setEdit(findTodo);
  };

  const handleDelete = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <ul>
      {todos.map((todo) => (
        <li className='list-item' key={todo.id}>
          <input
            type='text'
            value={todo.title}
            className={`list ${todo.isCompleted ? "complete" : ""}`}
            onChange={(e) => e.preventDefault()}
          />
          <div
            className='button-complete task-button'
            onClick={() => handleComplete(todo)}>
            <i className='fa fa-check-circle'></i>
          </div>

          <div className='button-edit task-button'>
            <i className='fa fa-edit' onClick={() => handlEdit(todo)}></i>
          </div>

          <div
            className='button-delete task-button'
            onClick={() => handleDelete(todo)}>
            <i className='fa fa-trash'></i>
          </div>
        </li>
      ))}
    </ul>
  );
}
