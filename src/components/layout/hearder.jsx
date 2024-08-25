import { Link, NavLink } from 'react-router-dom';
import './hearder.css';
const Header = () => {
    return (
        <ul>
            <li><NavLink class="active" to="/">Home</NavLink></li>
            <li><NavLink to="/user">User</NavLink></li>
            <li><NavLink to="/product">Product</NavLink></li>
        </ul>
    )
}
export default Header;