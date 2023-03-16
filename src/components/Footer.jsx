import { Link } from "react-router-dom";
import * as Icon from 'react-bootstrap-icons';

const Footer = () => {
    return (
        <div className="navbar navbar-dark bg-dark border-top border-5 border-warning b-shadow-warning">
            <div className="container align-items-stretch">
                <nav className="col-lg-2 col-md-3 col-sm-4 col-12 text-sm-start text-center">
                    <ul className="navbar-nav">
                        <li className="nav-item position-relative"><Link className="nav-link stretched-link" to="/">Home</Link></li>
                        <li className="nav-item position-relative"><Link className="nav-link stretched-link" to="/Work">React Works</Link></li>
                        <li className="nav-item position-relative"><Link className="nav-link stretched-link" to="/Contact">Contacts</Link></li>
                    </ul>
                </nav>
                <nav className="col-lg-2 col-md-3 col-sm-4 col-12 text-sm-start text-center">
                    <ul className="navbar-nav">
                        <li className="nav-item position-relative"><Link className="nav-link stretched-link" to="/">Home</Link></li>
                        <li className="nav-item position-relative"><Link className="nav-link stretched-link" to="/Work">React Works</Link></li>
                        <li className="nav-item position-relative"><Link className="nav-link stretched-link" to="/Contact">Contacts</Link></li>
                    </ul>
                </nav>
                <nav className="col-lg-2 col-md-3 col-sm-4 col-12 text-sm-start text-center">
                    <ul className="navbar-nav">
                        <li className="nav-item position-relative"><Link className="nav-link stretched-link" to="/">Home</Link></li>
                        <li className="nav-item position-relative"><Link className="nav-link stretched-link" to="/Work">React Works</Link></li>
                        <li className="nav-item position-relative"><Link className="nav-link stretched-link" to="/Contact">Contacts</Link></li>
                    </ul>
                </nav>
                <nav className="col-lg-2 col-md-3 col-12 text-sm-start text-center ms-auto">
                    <ul className="navbar-nav flex-row gap-2 fs-1 justify-content-center">
                        <li className="nav-item position-relative"><Link className="nav-link stretched-link" to="/"><Icon.Facebook /></Link></li>
                        <li className="nav-item position-relative"><Link className="nav-link stretched-link" to="/Work"><Icon.Twitter /></Link></li>
                        <li className="nav-item position-relative"><Link className="nav-link stretched-link" to="/Contact"><Icon.Youtube /></Link></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}
 
export default Footer;