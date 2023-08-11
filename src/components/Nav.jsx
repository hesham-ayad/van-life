import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav>
            <Link to="/" className="main-header-link" >#VANLIFE</Link>
            <div className="sec-header-links-cont">
                <Link to="/about" >About</Link>
                <Link to="/vans" >Vans</Link>
            </div>
        </nav>
    )
}

export default Nav;