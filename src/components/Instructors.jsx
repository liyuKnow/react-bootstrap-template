import React from 'react';
import { FaFacebook, FaInstagram, FaTelegram, FaTwitter } from 'react-icons/fa';

const Instructors = () => {
    return (
        <section id="instructors" className="p-5 bg-warning">
            <div className="container">
                <h2 className="text-center text-dark">Our Instructors</h2>
                <p className="lead text-dark mb-4">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non, aliquam.
                </p>
                <div className="row g-4">
                    <div className="col-md-6 col-lg-3">
                        <div className="card bg-light">
                            <div className="card-body text-center">
                                <img src="https://i.pravatar.cc/400?img=48" alt="" className='rounded-circle mb-3 img-fluid' />
                                <h3 className='card-title mb-3'>Jean Doe</h3>
                                <p className="card-text">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </p>
                                <a className='text-primary mx-2' href=""><FaFacebook /></a>
                                <a className='text-info mx-2' href=""><FaTwitter /></a>
                                <a className='text-danger mx-2' href=""><FaInstagram /></a>
                                <a className='text-info mx-2' href=""><FaTelegram /></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="card bg-light">
                            <div className="card-body text-center">
                                <img src="https://i.pravatar.cc/400?img=34" alt="" className='rounded-circle mb-3 img-fluid' />
                                <h3 className='card-title mb-3'>Jean Doe</h3>
                                <p className="card-text">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </p>
                                <a className='text-primary mx-2' href=""><FaFacebook /></a>
                                <a className='text-info mx-2' href=""><FaTwitter /></a>
                                <a className='text-danger mx-2' href=""><FaInstagram /></a>
                                <a className='text-info mx-2' href=""><FaTelegram /></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="card bg-light">
                            <div className="card-body text-center">
                                <img src="https://i.pravatar.cc/400?img=10" alt="" className='rounded-circle mb-3 img-fluid' />
                                <h3 className='card-title mb-3'>Jean Doe</h3>
                                <p className="card-text">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </p>
                                <a className='text-primary mx-2' href=""><FaFacebook /></a>
                                <a className='text-info mx-2' href=""><FaTwitter /></a>
                                <a className='text-danger mx-2' href=""><FaInstagram /></a>
                                <a className='text-info mx-2' href=""><FaTelegram /></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="card bg-light">
                            <div className="card-body text-center">
                                <img src="https://i.pravatar.cc/400?img=62" alt="" className='rounded-circle mb-3 img-fluid' />
                                <h3 className='card-title mb-3'>Jean Doe</h3>
                                <p className="card-text">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </p>
                                <a className='text-primary mx-2' href=""><FaFacebook /></a>
                                <a className='text-info mx-2' href=""><FaTwitter /></a>
                                <a className='text-danger mx-2' href=""><FaInstagram /></a>
                                <a className='text-info mx-2' href=""><FaTelegram /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Instructors;
