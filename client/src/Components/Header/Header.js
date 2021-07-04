
import { NavLink, withRouter } from 'react-router-dom';
import { useContext } from 'react';
import UserContext from '../Contexts/UserContext';

import style from './Header.module.css'

const Header = () => {
    const [user, setUser] = useContext(UserContext);

    const onLogoutClick = () => {
        setUser(null);
        sessionStorage.clear();
    }

    return (
        <header className={style["site-header"]}>
            <nav className={style["main-nav"]}>
                <div><NavLink className={style["site-name"]} to="/">BlogIt</NavLink></div>
                {user
                    ?
                    <ul className={style["nav-items"]}>
                        {/* <li><NavLink className={style["nav-menu-item"]} to="/blog">'Blog|</NavLink></li> */}
                        <li><NavLink className={style["nav-menu-item"]} to="/create-blog">Add Blog Post|</NavLink></li>
                        <li onClick={onLogoutClick}><NavLink className={style["nav-menu-item"]} to="/logout">Logout</NavLink></li>
                    </ul>
                    :
                    <ul className={style["nav-items"]}>
                        <li><NavLink className={style["nav-menu-item"]} to="/register">Register|</NavLink></li>
                        <li><NavLink className={style["nav-menu-item"]} to="/login">Login</NavLink></li>
                    </ul>
                }
            </nav>
        </header>
    )
}

export default withRouter(Header);