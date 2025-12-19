import { useState } from "react";
import type { FormEvent } from "react";
import { useTodos } from "../store/todos";

const AddTodo = () => {
  const [task, setTask] = useState("");
  const { handleAddToDo } = useTodos();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!task.trim()) return;

    handleAddToDo(task);
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add todo"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodo;
