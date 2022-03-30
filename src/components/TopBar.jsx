import React from 'react';

const TopBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 fixed-top">
            <div className="container">
                {/* brand */}
                <a href="#" className="navbar-brand">Single Page App</a>

                {/* toggle collapse */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"

                    data-bs-target="#navMenu"
                ><span className='navbar-toggler-icon'></span></button>

                {/* collapsing and right end navbar */}
                <div className="collapse navbar-collapse" id="navMenu">
                    <ul className="navbar-nav ms-auto">
                        <li className="navbar-item">
                            <a href="#showCase" className="nav-link">Home</a>
                        </li>
                        <li className="navbar-item">
                            <a href="#newsLetter" className="nav-link">News</a>
                        </li>
                        <li className="navbar-item">
                            <a href="#services" className="nav-link">Services</a>
                        </li>
                        <li className="navbar-item">
                            <a href="#learn" className="nav-link">Learn</a>
                        </li>
                        <li className="navbar-item">
                            <a href="#featured" className="nav-link">Featured</a>
                        </li>
                        <li className="navbar-item">
                            <a href="#questions" className="nav-link">Questions</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default TopBar;
