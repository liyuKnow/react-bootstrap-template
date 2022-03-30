import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const ShowCase = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <section id="showCase" className="bg-dark text-light p-5 p-lg-0 pt-lg-5 text-center text-sm-start">


            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Enrollment</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p class="lead">Fill out this form and we will get back to you</p>
                    <form>
                        <div class="mb-3">
                            <label for="first-name" class="col-form-label">
                                First Name:
                            </label>
                            <input type="text" class="form-control" id="first-name" />
                        </div>
                        <div class="mb-3">
                            <label for="last-name" class="col-form-label">Last Name:</label>
                            <input type="text" class="form-control" id="last-name" />
                        </div>
                        <div class="mb-3">
                            <label for="email" class="col-form-label">Email:</label>
                            <input type="email" class="form-control" id="email" />
                        </div>
                        <div class="mb-3">
                            <label for="phone" class="col-form-label">Phone:</label>
                            <input type="tel" class="form-control" id="phone" />
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal >
            <div className="container">
                <div className='d-md-flex align-items-center justify-content-between'>
                    <div>
                        <h1>Become a <span className="text-warning">web developer</span></h1>
                        <p className="lead my-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus reprehenderit quas pariatur iste non consectetur laborum sint sit. Nesciunt quos quod sapiente ad quae sit adipisci impedit! Accusantium, iusto harum?
                        </p>
                        <button className="btn btn-primary btn-lg mb-4" onClick={handleShow}>Start The Enrollment</button>
                    </div>
                    <img className='img-fluid w-50' src={`./images/showcase.svg`} alt="" />
                    {/* making it show only after sm breakpoint */}
                    {/* <img className='img-fluid w-50 d-none d-sm-block' src={ShowCaseImg} alt="" /> */}
                </div>
            </div>
        </section >
    );
};

export default ShowCase;
