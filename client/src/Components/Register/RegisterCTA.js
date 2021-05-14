import { NavLink } from 'react-router-dom';
import './RegisterCTA.css'
const RegisterCTA = () => {
    return (
        <div>
        <button className="register">
            <NavLink to="/register">
                Register now and gain access to great offers and improved experience
            </NavLink>
        </button>
        <p>Or</p>
        <button className="sign-in">
            <NavLink to="/sign-in">
                Sign In
            </NavLink>
        </button>
        </div>
    );
}

export default RegisterCTA