import './App.css'
import AddToDo from './components/AddToDo.tsx'
import Navbar from './components/Navbar.tsx'
import Todos from './components/Todos.tsx'
import { TodosProvideer } from './store/todos'


function App() {

  return (
    <TodosProvideer>
      <main>
        <h1>TODO REACT + TYPESCRIPT</h1>
        <Navbar />

        <AddToDo />
        <Todos />

      </main>
    </TodosProvideer>
  );
}

export default App;




