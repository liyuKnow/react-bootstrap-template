import React from 'react';
import BaseMap from './BaseMap/BaseMap';

const Address = () => {


    return (
        <section id="address" className="p-5 ">
            <div className="container">
                <div className="row g-4">
                    <div className="col-md">
                        <h3 className="text-center text-uppercase">Contact Info</h3>
                        <ul className="list-group list-group-flush lead">
                            <li className="list-group-item">
                                <span className="fw-bold">Main Location:</span> 50 Main st Boston MA
                            </li>
                            <li className="list-group-item">
                                <span className="fw-bold">Enrollment Phone:</span> (555) 555-5555
                            </li>
                            <li className="list-group-item">
                                <span className="fw-bold">Student Phone:</span> (333) 333-3333
                            </li>
                            <li className="list-group-item">
                                <span className="fw-bold">Enrollment Email:</span> (555)
                                enroll@frontendbc.test
                            </li>
                            <li className="list-group-item">
                                <span className="fw-bold">Student Email:</span>
                                student@frontendbc.test
                            </li>
                        </ul>
                    </div>
                    <div className="col-md">
                        {/* <BaseMap /> */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Address;
