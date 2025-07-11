import { Link } from "react-router-dom";

export default function Footer (){
    return(
        <>
            <div id="footer" className="footer-bg">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-md-3">
                            <h4 className="fw-bold text-white">Little Lemon</h4>
                            <h6 className="fw-bold text-amarelo">Chicago</h6>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                        <div className="col-md-3">
                            <h4 className="fw-bold mb-3 text-yellow">
                                Navigation
                            </h4>
                            <nav>
                                <ul>
                                    <li><Link to="/">HOME</Link></li>
                                    <li><Link to="/about">ABOUT</Link></li>
                                    <li><Link to="/menu">MENU</Link></li>
                                    <li><Link to="/order">ORDER ONLINE</Link></li>
                                    <li><Link to="/login">LOGIN</Link></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="col-md-3">
                            <h4 className="fw-bold mb-3 text-yellow">
                                Contacts
                            </h4>
                            <nav>
                                <ul>
                                    <li>ADDRESS</li>
                                    <li>PHONE NUMBER</li>
                                    <li>EMAIL</li>
                                </ul>
                            </nav>
                        </div>
                        <div className="col-md-3">
                            <h4 className="fw-bold mb-3 text-yellow">
                                Social Media
                            </h4>
                            <nav>
                                <ul>
                                    <li>Facebook</li>
                                    <li>Instagram</li>
                                    <li>X</li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}