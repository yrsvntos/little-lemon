import { Link } from 'react-router-dom';
import saladImg from '../../assets/greek salad.jpg';
import chickenImg from '../../assets/chicken_pasta.webp';
import lasagnaImg from '../../assets/lasagna.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './menu.css';


export default function Menu(){
    return(
        <>
            <main>
                <div className='banner-menu d-flex align-items-center'>
                    <div className='container py-4'>
                        <h1>Our Menu</h1>
                        <p>Lorem ipsum dolor sit amet consectur.</p>
                    </div>
                </div>
                <div className='menu-list'>
                    <div className='container py-5'>
                        <div className='menu-categories d-flex align-items-center'>
                            <Link className='btn btn-md btn-dark'>
                                Entries
                            </Link>
                            <Link className='btn btn-md btn-dark mx-4'>
                                Main
                            </Link>
                            <Link className='btn btn-md btn-dark'>
                                Deserts
                            </Link>
                        </div>
                        <div className='row mt-5'>
                            <div className='col-md-12'>
                                <article className='border-bottom py-4'>
                                    <div className='row'>
                                        <div className='col-md-4'>
                                            <article className='menu-img'>
                                                <img src={saladImg} className='w-100' alt='menu-img'/>
                                            </article>
                                        </div>
                                        <div className='col-md-8'>
                                            <div className='menu-content p-3'>
                                                <div className='d-flex justify-content-between mb-2'>
                                                    <div className='menu-title'>
                                                        <h5 className='fw-bold'>Greek Salad</h5>
                                                    </div>
                                                </div>
                                                <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                                </p>
                                                <p className='my-3 fw-bold'>
                                                    $12.99
                                                </p>
                                                <Link to={'/menu/id'} className='btn btn-md btn-dark mb-2'>Order  Online</Link>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    
                                </article>
                            </div>
                            <div className='col-md-12'>
                                <article className='border-bottom py-4'>
                                    <div className='row'>
                                        <div className='col-md-4'>
                                            <article className='menu-img'>
                                                <img src={chickenImg} className='w-100' alt='menu-img'/>
                                            </article>
                                        </div>
                                        <div className='col-md-8'>
                                            <div className='menu-content p-3'>
                                                <div className='d-flex justify-content-between mb-2'>
                                                    <div className='menu-title'>
                                                        <h5 className='fw-bold'>Chicken Pasta</h5>
                                                    </div>
                                                </div>
                                                <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                                </p>
                                                <p className='my-3 fw-bold'>
                                                    $9.99
                                                </p>
                                                <Link to={'/menu/id'} className='btn btn-md btn-dark mb-2'>Order  Online</Link>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    
                                </article>
                            </div>
                            <div className='col-md-12'>
                                <article className='border-bottom py-4'>
                                    <div className='row'>
                                        <div className='col-md-4'>
                                            <article className='menu-img'>
                                                <img src={lasagnaImg} className='w-100' alt='menu-img'/>
                                            </article>
                                        </div>
                                        <div className='col-md-8'>
                                            <div className='menu-content p-3'>
                                                <div className='d-flex justify-content-between mb-2'>
                                                    <div className='menu-title'>
                                                        <h5 className='fw-bold'>Vegan Lasagna</h5>
                                                    </div>
                                                </div>
                                                <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                                </p>
                                                <p className='my-3 fw-bold'>
                                                    $7.99
                                                </p>
                                                <Link to={'/menu/id'} className='btn btn-md btn-dark mb-2'>Order  Online</Link>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}