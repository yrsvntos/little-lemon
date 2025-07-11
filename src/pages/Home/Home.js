
import { Link } from 'react-router-dom';
import banner from '../../assets/restauranfood.jpg';
import salad from '../../assets/greek salad.jpg';
import bruchecta from '../../assets/bruchetta.svg';
import desert from '../../assets/lemon dessert.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './home.css';

export default function Home(){
    return(
        <>
            <div className='banner'>
                <div className='container py-5'>
                    <div className='row'>
                        <div className='col-md-7'>
                            <div className='banner-info'>
                                <h1 className='text-yellow fw-bold'>Little Lemon</h1>
                                <h3>Chicago</h3>
                                <p className='text-light'>Lorem ipsum dolor sut amet consecutetur
                                    adiscipling elit, sed  eiusmod tempor
                                    incididunt lanort de magna aliqua ipsum dolor sut amet consecutetur
                                    adiscipling elit, sed  eiusmod tempor
                                    incididunt lanort de magna aliqua
                                </p>
                                <Link to="/reservation" className="btn btn-md btn-yellow">
                                    Reserve Table
                                </Link>

                            </div>
                        </div>
                        <div className='col-md-5'>
                            <div className='banner-img'>
                                <img src={banner}  alt='Restaurant Banner' className='w-100'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='menu'>
                <div className='container py-5'>
                    <div className='menu-info my-4 d-flex align-items-center justify-content-between'>
                        <div>
                            <h2 className='fw-bold'>This Week specials!!</h2>
                        </div>
                        <div>
                            <Link to="/menu" className='btn btn-md btn-yellow'>Online Menu</Link>
                        </div>
                    </div>
                    <div className='row mt-5'>
                        <div className='col-md-4'>
                            <article>
                                <div className='menu-img'>
                                    <img src={salad} className='w-100' alt='menu-img'/>
                                </div>
                                <div className='menu-content bg-menu-box p-3'>
                                    <div className='d-flex justify-content-between mb-2'>
                                        <div className='menu-title'>
                                            <h5 className='fw-bold'>Greek Salad</h5>
                                        </div>
                                        <div className='menu-preco fw-bold text-yellow'>
                                            $12.99
                                        </div>
                                    </div>
                                    <p className='text-muted'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>
                                    <Link to={'/menu/id'} className='text-black mb-2'>Order a delivery</Link>
                                </div>
                            </article>
                        </div>
                        <div className='col-md-4'>
                            <article>
                                <div className='menu-img'>
                                    <img src={bruchecta} className='w-100' alt='menu-img'/>
                                </div>
                                <div className='menu-content bg-menu-box p-3'>
                                    <div className='d-flex justify-content-between mb-2'>
                                        <div className='menu-title'>
                                            <h5 className='fw-bold'>Bruchecta</h5>
                                        </div>
                                        <div className='menu-preco fw-bold text-yellow'>
                                            $9.99
                                        </div>
                                    </div>
                                    <p className='text-muted'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>
                                    <Link to={'/menu/id'} className='text-black mb-2'>Order a delivery</Link>
                                </div>
                            </article>
                        </div>
                        <div className='col-md-4'>
                            <article>
                                <div className='menu-img'>
                                    <img src={desert} className='w-100' alt='menu-img'/>
                                </div>
                                <div className='menu-content bg-menu-box p-3'>
                                    <div className='d-flex justify-content-between mb-2'>
                                        <div className='menu-title'>
                                            <h5 className='fw-bold'>Lemon Desert</h5>
                                        </div>
                                        <div className='menu-preco fw-bold text-yellow'>
                                            $5.99
                                        </div>
                                    </div>
                                    <p className='text-muted'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>
                                    <Link to={'/menu/id'} className='text-black mb-2'>Order a delivery</Link>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
            <div className='testimonials'>
                <div className='container py-5'>
                    <div className='testimonials-header text-center'>
                        <h2 className='fw-bold'>Testimonials</h2>
                        <p>lorem ipsum dolor sit amet consectetur</p>
                    </div>
                    <div className='testimonials-card mt-4'>
                        <div className='row'>
                            <div className='col-md-4'>
                                <div className='testimonial-box bg-menu-box p-4 rounded-3'>
                                    <small className='text-yellow'><FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> </small>
                                    <p className='mt-3 text-muted'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fringilla dui id hendrerit rutrum. Nunc rutrum malesuada lectus, ac blandit eros condimentum sed. Pellentesque ultricies neque lorem, eget tincidunt est vestibulum et. Aliquam tempor sodales ipsum ut blandit. </p>
                                    <h6>John Doe</h6>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className='testimonial-box bg-menu-box p-4 rounded-3'>
                                    <small className='text-yellow'><FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> </small>
                                    <p className='mt-3 text-muted'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fringilla dui id hendrerit rutrum. Nunc rutrum malesuada lectus, ac blandit eros condimentum sed. Pellentesque ultricies neque lorem, eget tincidunt est vestibulum et. </p>
                                    <h6>Paul Smith</h6>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className='testimonial-box bg-menu-box p-4 rounded-3'>
                                    <small className='text-yellow'><FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> </small>
                                    <p className='mt-3 text-muted'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fringilla dui id hendrerit rutrum. Nunc rutrum malesuada lectus, ac blandit eros condimentum sed. Pellentesque ultricies neque lorem, eget tincidunt est vestibulum et. Aliquam tempor sodales ipsum ut blandit. Donec sit amet neque vitae nisi volutpat ultrices scelerisque iaculis nibh.</p>
                                    <h6>Jorge KiddMan</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}