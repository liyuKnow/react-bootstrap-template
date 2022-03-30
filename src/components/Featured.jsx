import React from 'react';
import { FaChevronCircleRight, FaChevronRight } from 'react-icons/fa';

const Featured = () => {
    return (
        <div id="featured" className="row p-5 bg-dark text-white">
            <div className="container">
                <div className="row align-items-center justify-content-between">
                    <div className="col-md p-5">
                        <h2>Learn React In Practical Way</h2>
                        <p className="lead">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque deleniti doloribus repellat? Voluptas, aliquam repellat!
                        </p>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum totam nostrum eligendi itaque. Incidunt, eum.
                        </p>
                        <a href="" className="btn btn-light mt-3">
                            <FaChevronCircleRight /> Read More
                        </a>
                    </div>
                    <div className="col-md">
                        <img src={`./images/reactImg.svg`} alt="" className='img-fluid' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;
