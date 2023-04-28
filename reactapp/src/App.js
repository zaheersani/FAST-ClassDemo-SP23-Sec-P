import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [isLogin, setLogin] = useState(false)
  
  const loginHandler = () => {
    setLogin(true)
  }

  return (
    <>
    {/* <nav>
      <ul>
          <li><Link to="/" >Home</Link></li>
          <li><Link to="/login">Login</Link></li>
      </ul>
      </nav> */}
      <Nav isLogin={isLogin} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setLogin={loginHandler} />} />
        <Route path="/signup" element={<Signup />} />
        {isLogin && 
          <>
          <Route path="/todos">
            <Route path="" element={<Todos />} />
            <Route path=":id" element={<Todo />} />
            <Route path="add" element={<h3>Add New</h3>} />
          </Route>
          </>
        }

        <Route path="*" element={<h3>Page Not Found</h3>} />
      </Routes>
    </>
  );
}

const Nav = ({isLogin}) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="#">Navbar</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            {isLogin &&
              <li className="nav-item">
                <Link className="nav-link" to="/todos">TODOs</Link>
              </li>
            }
            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/signup">Signup</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

const Home = () => {
  return <h3>Home Component</h3>
}

const Login = ({setLogin}) => {
  return (
    <>
      <h3>Login Component</h3>
      <button
        className='btn btn-primary'
        onClick={setLogin}
      >Login</button>
      <Link to="/signup">Signup</Link>
    </>
  )
}

const Signup = () => {
  const navigate = useNavigate()
  return (
    <>
      <h3>Signup Component</h3>
      <button
        className='btn btn-primary'
        onClick={() => navigate('/')}
      >Signup</button>
      <Link to="/login">Login</Link>
    </>
  )
}

const Todos = () => {
  return (
    <>
      <Link to="/todos/1">TODO # 1</Link><br />
      <Link to="/todos/2">TODO # 2</Link><br />
      <Link to="/todos/3">TODO # 3</Link>
    </>
  )
}

const Todo = () => {
  const { id } = useParams()
  return (
    <h3>TODO Details of # {id}</h3>
  )
}

export default App;
