import React from 'react';

const NewsLetter = () => {
    return (
        <section id='newsLetter' className="bg-primary text-light p-5">
            <div className="container">
                <div className="d-md-flex justify-content-between align-items-center">
                    <h3 className="mb-3 mb-md-0">Sign Up for Our Newsletter</h3>
                    <div className="input-group news-letter-input">
                        <input type="text" className="form-control" placeholder='email@site.com' />
                        <button className="btn btn-dark btn-lg">Sign Up</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewsLetter;
