import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../authContext/AuthContext'

const Header = () => {

    const { user } = useContext(AuthContext)
    const guest =
        <div id="guest">
            <Link className="button" to="/login">Login</Link>
            <Link className="button" to="/register">Register</Link>
        </div>
    const userInfo =
        <div id="user">
            <span>Welcome, {user.email && user.email}</span>
            <Link className="button" to="/my-books-page">My Books</Link>
            <Link className="button" to="/create">Add Book</Link>
            <Link className="button" to="/logout">Logout</Link>
        </div>
        
    return (
        <header id="site-header">
            <nav className="navbar">
                <section className="navbar-dashboard">
                    <Link to="/">Dashboard</Link>
                    {user.email ? userInfo : guest}
                </section>
            </nav>
        </header>
    )
}
export default Header