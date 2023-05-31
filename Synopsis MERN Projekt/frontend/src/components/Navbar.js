import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar bg-success" data-bs-theme="dark">
            <div className="container">
                <Link to="/">Home</Link>
                <Link to="/create">Create Experience</Link>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
                <Link to="/about">About</Link>
            </div>
        </nav>
    );
}

export default Navbar;