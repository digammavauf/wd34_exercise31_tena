import { Link } from "react-router-dom";

const NavigationBar = () => {
    return (
        <div className="navbar fixed-top navbar-dark bg-dark border-bottom border-5 border-success b-shadow-success py-0">
            <h2 class="navbar-brand me-auto px-2 py-0 my-0">
                <span class="blast">J</span>
                <span class="blast">O</span>
                <span class="blast">H</span>
                <span class="blast">N</span>
            </h2>
            <nav className="ms-auto px-2">
                <ul className="navbar-nav d-flex flex-row justify-content-around align-items-center gap-4">
                    <li className="nav-item position-relative"><Link className="nav-link stretched-link" to="/">Home</Link></li>
                    <li className="nav-item position-relative"><Link className="nav-link stretched-link" to="/Work">React Works</Link></li>
                    <li className="nav-item position-relative"><Link className="nav-link stretched-link" to="/Contact">Contacts</Link></li>
                    <li className="nav-item position-relative"><Link className="nav-link stretched-link" to="/Cart">Cart</Link></li>
                    <li className="nav-item position-relative"><Link className="nav-link stretched-link" to="/HookUseRef">HookUseRef</Link></li>
                    <li className="nav-item position-relative"><Link className="nav-link stretched-link" to="/HookUseReducer">HookUseReducer</Link></li>
                </ul>
            </nav>
        </div>
    );
}
 
export default NavigationBar;