import { Link } from "react-router-dom"
import "./login.scss"
import { AuthContext } from "../../context/authContext"
import { useContext } from "react"

function Login() {
  const {login}=useContext(AuthContext)
const handleLogin=()=>{
  login()
}
  return (
    <div className="login">
    <div className="card">
        <div className="left">

            <h1>Hello World</h1>
            <p>This is going to be the description page of the social media application's login page's left side container</p>
            <span>Don't have an account?</span>
            <Link to="/register">
            <button>Register Here</button>

            </Link>
        </div>
        <div className="right">
            <h1>Login</h1>
            <form action="">
                <input type="text" placeholder="username" />
                <input type="password" placeholder="password"/>
                
                <button onClick={handleLogin}>Login</button>
            </form>
        </div>
    </div>
    </div>
  )
}

export default Login