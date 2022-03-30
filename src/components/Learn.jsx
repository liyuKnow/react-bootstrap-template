import React from 'react';
import { FaChevronRight } from 'react-icons/fa'
const Learn = () => {
    return (
        <div id="learn" className="row p-5">
            <div className="container">
                <div className="row align-items-center justify-content-between">
                    <div className="col-md">
                        <img src={`./images/fundamentals.svg`} alt="" className='img-fluid' />
                    </div>
                    <div className="col-md p-5">
                        <h2>Learn The Fundamentals</h2>
                        <p className="lead">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque deleniti doloribus repellat? Voluptas, aliquam repellat!
                        </p>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum totam nostrum eligendi itaque. Incidunt, eum.
                        </p>
                        <a href="#" className="btn btn-light mt-3">
                            <FaChevronRight /> Read More
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Learn;
