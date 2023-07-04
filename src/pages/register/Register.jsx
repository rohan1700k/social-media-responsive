import { Link } from "react-router-dom"
import "./register.scss"

function Register() {
  return (
    <div className="register">
    <div className="card">
        <div className="left">

            <h1>Lama sooo</h1>
            <p>This is going to be the description page of the social media application's login page's left side container</p>
            <span>Do you have an account?</span>
            <Link to="/login">
            <button>Login</button>
            </Link>
        </div>
        <div className="right">
            <h1>Register</h1>
            <form action="">
                <input type="text" placeholder="username" />
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <input type="text" placeholder="Name"/>
                <button>Register</button>
            </form>
        </div>
    </div>
    </div>
  )
}

export default Register