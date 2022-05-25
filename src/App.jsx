import "./App.css";
import { Header } from "./components/Header/Header";
import { Form } from "./components/Form/Form";
import { useEffect, useState } from "react";
import { TodoList } from "./components/Todolist/Todolist";

function App() {
  const initialState = JSON.parse(localStorage.getItem("todos")) || [];
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(initialState);
  const [edit, setEdit] = useState(null);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className='container'>
      <div className='app-wrapper'>
        <div className='|'>
          <Header />
          <Form
            input={input}
            setInput={setInput}
            todos={todos}
            setTodos={setTodos}
            edit={edit}
            setEdit={setEdit}
          />
          <TodoList todos={todos} setTodos={setTodos} setEdit={setEdit} />
        </div>
      </div>
    </div>
  );
}

export default App;
