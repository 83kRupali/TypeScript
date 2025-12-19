import { useTodos} from '../store/todos'
import { useSearchParams } from 'react-router-dom'

/*
 * List of todos 
 */

const Todos = () => {

    const {todos, toggleTodosAsCompleted, handleDeleteToDo} = useTodos()

    const [searchParams] = useSearchParams();
    let todosData = searchParams.get("todos")

    console.log(" ~file: todos.tsx ~Todos ~ todosData:", todosData)

    let filterData = todos;

    //filter active todos
    if(todosData === 'active'){
        filterData = todos.filter((task) => !task.completed)
    }

    //filter completed todos
    if(todosData === 'completed'){
        filterData = todos.filter((task) => task.completed)
    }

  return (
    <ul>
        {
            filterData.map((todo) =>{
                return <li key={todo.id}>
                    <input 
                        type="checkbox" 
                        id={`todo-${todo.id}`} 
                        checked = {todo.completed}
                        onChange={() => toggleTodosAsCompleted(todo.id)}
                    />
                    <label htmlFor={`todo-${todo.id}`} >{todo.task}</label>

                    {todo.completed && (
                        <button 
                            type='button' 
                            onClick={() => toggleTodosAsCompleted(todo.id)}
                        >
                            Delete
                        </button>
                    )}
                </li>
            })
        }
    </ul>
  );
}

export default Todos;


