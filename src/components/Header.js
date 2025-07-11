import { NavLink } from 'react-router-dom';
import logo from '../assets/Logo.svg';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Header(){
    return(
        <div className=" container py-3">
            <div className='menu-nav'>
                <div className="logo">
                    <img src={logo} alt='Logo img'/>
                </div>
                <div className="menu">
                    <nav>
                        <ul>
                            <li><NavLink to="/" className='nav-link'>Home</NavLink></li>
                            <li><NavLink to="/about" className='nav-link'>About</NavLink></li>
                            <li><NavLink to="/menu" className='nav-link'>Menu</NavLink></li>
                            <li><NavLink to="/reservation" className='nav-link'>Reservation</NavLink></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
}