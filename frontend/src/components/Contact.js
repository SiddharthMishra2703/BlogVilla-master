import React from 'react'
import './css/Contact.css'

export default function Contact() {
    return (
        <>
            {/* <div className="card">
                <span className="big-circle"></span>
                <img src="img/shape.png" className="square" alt="" /> 
                <div className="row">
                    <div className="form">
                        <div className="col-md-6">
                            <div className="contact-info">
                                <h3 className="title">Let's get in touch</h3>
                                <p className="text"></p>

                                <div className="info">
                                    <div className="information">
                                        <img src="" className="icon" alt="" />
                                        <p>Karol Bagh , New Delhi</p>
                                    </div>
                                    <div className="information">
                                        <img src="" className="icon" alt="" />
                                        <p>blogvilla.com</p>
                                    </div>
                                    <div className="information">
                                        <img src="" className="icon" alt="" />
                                        <p>123-456-789</p>
                                    </div>
                                </div>
                            </div>

                            <div className="social-media">
                                <p>Connect with us :</p>
                                <div className="social-icons">
                                    <a href="#">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                    <a href="#">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                    <a href="#">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                    <a href="#">
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-6">
                            <div className="contact-form">
                                <span className="circle one"></span>
                                <span className="circle two"></span>

                                <form action="index.html" autoComplete="off">
                                    <h3 className="title">Contact us</h3>
                                    <div className="input-container">
                                        <input type="text" name="name" className="input" />
                                        <label htmlFor="">Username</label>
                                        <span>Username</span>
                                    </div>
                                    <div className="input-container">
                                        <input type="email" name="email" className="input" />
                                        <label htmlFor="">Email</label>
                                        <span>Email</span>
                                    </div>
                                    <div className="input-container">
                                        <input type="tel" name="phone" className="input" />
                                        <label htmlFor="">Phone</label>
                                        <span>Phone</span>
                                    </div>
                                    <div className="input-container textarea">
                                        <textarea name="message" className="input"></textarea>
                                        <label htmlFor="">Message</label>
                                        <span>Message</span>
                                    </div>
                                    <input type="submit" value="Send" className="btn" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className="text-center my-5">
                <h2 className='fw-bolder'style={{color:"#0062cc"}}>Let's get in touch</h2>
            </div>
            <div className="row mx-auto">
                <div className="col-sm-4 mb-3">
                    <div className="card rounded-pill text-center shadow bgcolor">
                        <div className="card-body ">
                            <h5 className="card-title">Our Phone</h5>
                            <p className="card-text">9568744321</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4 mb-3">
                    <div className="card rounded-pill text-center shadow bgcolor">
                        <div className="card-body">
                            <h5 className="card-title">Our Email</h5>
                            <p className="card-text">blogsvilla2023@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4 mb-3">
                    <div className="card rounded-pill text-center shadow bgcolor">
                        <div className="card-body">
                            <h5 className="card-title">Our Address</h5>
                            <p className="card-text">Vivekanada Institue of Professional Studies</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container shadow rounded contact-form bgcolor">
                <form method="post">
                    <h2 className='fw-bolder'>Contact Us</h2>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <input type="text" name="txtName" className="form-control" placeholder="Your Name" />
                            </div>
                            <div className="form-group">
                                <input type="text" name="txtEmail" className="form-control" placeholder="Your Email" />
                            </div>
                            <div className="form-group">
                                <input type="text" name="txtPhone" className="form-control" placeholder="Your Phone" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <textarea name="txtMsg" className="form-control" placeholder="Your Message *" style={{ width: "100%", height: "150px" }}></textarea>
                            </div>
                        </div>
                        <div className="form-group">
                            <input type="submit" name="btnSubmit" className="btn btn-outline-primary rounded-pill" />
                        </div>
                    </div>
                </form>
            </div>
            
        </>
    )
}



