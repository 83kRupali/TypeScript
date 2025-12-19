import {Link, useSearchParams} from 'react-router-dom';

/*

Navbar for filtering todos using URL query params

*/

const Navbar = () => {

    const [searchParams] = useSearchParams();

    // read ?todos=active / completed
    let todosData = searchParams.get("todos");

    
    return (
    <nav>
        <Link to="/" className={todosData === null ? "active":""}>
          All
        </Link>
        
        <Link 
          to="/?todos=active" 
          className={todosData === "active" ? "active" : ""}
        >
          Active
        </Link>
        
        <Link 
          to="/?todos=completed" 
          className={todosData === "completed" ? "active" : ""}
        >
          Completed
        </Link>
    </nav>
  );
};

export default Navbar;


