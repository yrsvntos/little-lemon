import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faHandshake, faBullseye } from '@fortawesome/free-solid-svg-icons';
import bannerIMG from '../../assets/restaurant.jpg';
import galleryIMG1 from '../../assets/restaurant chef B.jpg';
import galleryIMG2 from '../../assets/Mario and Adrian A.jpg';
import galleryIMG3 from '../../assets/Mario and Adrian b.jpg';
import galleryIMG4 from '../../assets/restauranfood.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './about.css';

export default function About(){
    return(
        <>
            <main>
                <div className='banner'>
                    <div className='py-5 container'>
                        <div className='row'>
                            <div className='col-md-6 banner-info'>
                                <h1 className='fw-bold'>Little Lemon</h1>
                                <h4 className='fw-bold text-amarelo'>Chicago</h4>
                                <p>
                                Lorem ipsum dolor sit amet consecutetur adiscipling elit, sed eiusmod tempor incididunt lanort de magna aliqua. 
                                Lorem ipsum dolor sit amet consecutetur adiscipling elit, sed eiusmod tempor incididunt lanort de magna aliqua 
                                </p>
                            </div>
                            <div className='col-md-6 banner-img'>
                                <figure>
                                    <img src={bannerIMG} alt="restaurant-img" className='w-100'/>
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='history'>

                    <div className='container py-5'>
                        <div className='history-header text-center'>

                            <h1 className='fw-bold'>Our History</h1>
                            <p>Lorem ipsum dolor sit amet consecutetur adiscipling elit, sed eiusmod tempor incididunt lanort de magna aliqua</p>
                        </div>

                        <div className='row mt-5'>
                            <div className='col-md-4'>
                                <div className='history-box border rounded-3 bg-light text-center p-4'>
                                    <FontAwesomeIcon icon={faBullseye} size='2x' />
                                    <h4 className='fw-bold my-3'>Mission</h4>
                                    <p>
                                    Lorem ipsum dolor sit amet consecutetur adiscipling elit, sed eiusmod tempor incididunt lanort de magna aliqua
                                    </p>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className='history-box border rounded-3 bg-light text-center p-4'>
                                    <FontAwesomeIcon icon={faEye} size='2x' />
                                    <h4 className='fw-bold my-3'>Vision</h4>
                                    <p>
                                    Lorem ipsum dolor sit amet consecutetur adiscipling elit, sed eiusmod tempor incididunt lanort de magna aliqua
                                    </p>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className='history-box border rounded-3 bg-light text-center p-4'>
                                    <FontAwesomeIcon icon={faHandshake} size='2x' />
                                    <h4 className='fw-bold my-3'>Values</h4>
                                    <p>
                                    Lorem ipsum dolor sit amet consecutetur adiscipling elit, sed eiusmod tempor incididunt lanort de magna aliqua
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='gallery'>
                    <div className='container py-5'>
                        <div className='gallery-header text-center'>
                            <h1 className='fw-bold'>Gallery</h1>
                            <p>Lorem ipsum dolor sit amet consecutetur adiscipling elit, sed eiusmod tempor incididunt lanort de magna aliqua</p>
                        </div>
                        <div className='gallery-content mt-5'>
                            <div className='row'>
                                <div className='col-md-3'>
                                    <figure>
                                        <img src={galleryIMG1} alt='IMG-1' className='w-100'/>
                                    </figure>
                                </div>
                                <div className='col-md-3'>
                                    <figure>
                                        <img src={galleryIMG2} alt='IMG-2' className='w-100'/>
                                    </figure>
                                </div>
                                <div className='col-md-3'>
                                    <figure>
                                        <img src={galleryIMG3} alt='IMG-3' className='w-100'/>
                                    </figure>
                                </div>
                                <div className='col-md-3'>
                                    <figure>
                                        <img src={galleryIMG4} alt='IMG-4' className='w-100'/>
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        
        </>
    );
}