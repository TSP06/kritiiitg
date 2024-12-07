import Kritilogo from "./Kritilogo.png";
import "./Navbar.css"
function Navbar() {
    return(
        <nav className="navbar">
            <img src={Kritilogo} alt='logo' className="nav-logo"/>
            <div className="nav-element">
                <div>Announcements</div>
                <div>Guidelines</div>
                <div>Problem Statements</div>
                <div>FAQs</div>
                <button >Login</button>
            </div>
        </nav>
    )
}
export default Navbar;