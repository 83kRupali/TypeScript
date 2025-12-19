import { useState} from "react";
import type {FormEvent} from "react";
import { useTodos} from "../store/todos";


/*
    Component to add a new todo
*/

const AddToDo = () =>{

    // local state for input  field
    const [todo, setTodo] = useState("");

    // get add function from context
    const{handleAddToDo} = useTodos()

    // handle form submit
    const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();          // prevent page reload
   
    if (!todo.trim()) return;    // avoid empty todos  
    
    handleAddToDo(todo);         // add todo to global state
    setTodo("");                 // clear input
};

    return (
        <form onSubmit={handleFormSubmit}>
            <input 
                type="text" 
                value={todo} 
                onChange={(e) => setTodo(e.target.value)}    // update state on  typing
                placeholder="Add todo..."
            />
            <button type="submit">Add</button>
        </form>
    )
}


export default AddToDo;





