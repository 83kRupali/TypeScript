import { createContext, useContext, useState, type ReactNode } from "react";

/*
Provider Props
*/ 

// createcontext - is use to store the data

export type TodosProviderProps = { 
    children : ReactNode;

}

// Todo model

export type Todo = {
    id:string;
    task:string;
    completed:boolean;
    createdAt:Date;
}

/*
Context shape 
*/

export type TodosContext = {
    todos: Todo[];
    handleAddToDo:(task:string) => void;    
    toggleTodosAsCompleted: (id:string) => void;
    handleDeleteToDo: (id:string) => void;
}

export const todosContext = createContext<TodosContext | null>(null)

/**
 * TODOS PROVIDER
 */
export const TodosProvideer = ({children}:TodosProviderProps) =>{
    
    // Load todos from LocalStorage
    const[todos, setTodos] = useState<Todo[]>(() =>{
        try{
            const newTodos = localStorage.getItem("todos") || "[]";
            return JSON.parse(newTodos) as Todo[]

        }
        catch{
            return [];
        }
    })

    // add todo
    const handleAddToDo = (task:string) => {
        const newTodos = [
            {
                id:crypto.randomUUID(),
                task,
                completed:false,
                createdAt: new Date(),
            },
            ...todos,
        ];

        setTodos(newTodos);
        localStorage.setItem("todos", JSON.stringify(newTodos));
    };
    
    // toggle completed
    const toggleTodosAsCompleted = (id:string) => {
        const newTodos = todos.map((todo) => 
            todo.id === id ? {...todo, completed: !todo.completed}:todo
        )

        setTodos(newTodos);
        localStorage.setItem("todos", JSON.stringify(newTodos));
    };

   // Delete the indivisual data
    const handleDeleteToDo = (id: string) => {
        const newTodos = todos.filter((todo) => todo.id !== id);

        setTodos(newTodos);

        localStorage.setItem("todos", JSON.stringify(newTodos));
    };

    return (
        <todosContext.Provider 
            value={{todos, 
                    handleAddToDo, 
                    toggleTodosAsCompleted, 
                    handleDeleteToDo
                    }}
            >
            {children}
        </todosContext.Provider>
    );
}
                                                 


// custom hook

export const useTodos = () => {
    const todosConsumer  = useContext(todosContext);

    if(!todosConsumer){
        throw new Error("useTodos must be used TodosProvider");
    }

    return todosConsumer;
}





