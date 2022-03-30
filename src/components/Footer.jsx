import React from 'react';
import { FaArrowAltCircleUp } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer id="footer" className="bg-dark text-white mt-5 p-2 position-relative">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <p className="lead text-center">
                            Copyright &copy; | 2022 Fendisha Tech
                        </p>
                        <a href="#" className="position-absolute bottom-0 end-0 p-5 ">
                            <FaArrowAltCircleUp size="3rem" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
