import React, { forwardRef } from "react";
import { FaGithub, FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import './contact.css'

const Contact = forwardRef((_, ref) => {
    return (
        <div ref={ref} className="contact-section">

            <h1 className="contact-title">CONTACT ME</h1>
            <div className="contact-wrapper">
                <div className="contact-card">

                    <div className="contact-form">
                        <h2>Send us a message</h2>

                        <div className="row">
                            <div className="field">
                                <label>Your name</label>
                                <input type="text" placeholder="Enter your name" />
                            </div>

                            <div className="field">
                                <label>Your email</label>
                                <input type="email" placeholder="Enter your email" />
                            </div>
                        </div>

                        <div className="field phone">
                            <label>Phone number</label>
                            <input type="text" placeholder="Enter phone number" />
                        </div>

                        <div className="field">
                            <label>Message</label>
                            <textarea rows="6" placeholder="Type your message"></textarea>
                        </div>

                        <button className="submit-btn">SUBMIT</button>
                    </div>

                    <div className="contact-info">
                        <h2>Contact info</h2>

                        <div className="map-box">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15554.19494086742!2d80.13965672522897!3d12.936699661225193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525e559242a1bd%3A0x6b70bdfe68e633c6!2sHasthinapuram%2C%20Chromepet%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1766514234586!5m2!1sen!2sin"
                                loading="lazy" />
                        </div>
                        <div className="follow">
                            <p>Follow us on</p>

                            <div className="socials">
                                <a href="http://linkedin.com/in/hafeez-ahamed-69473427a" target="_blank" rel="noreferrer">
                                    <FaGithub />
                                </a>

                                <a href="https://www.instagram.com/ahamed_hafeez_21" target="_blank" rel="noreferrer">
                                    <FaInstagram />
                                </a>

                                <a href="https://www.facebook.com/ahamed.hafeez.312003" target="_blank" rel="noreferrer">
                                    <FaFacebook />
                                </a>

                                <a href="https://twitter.com/hafeez_silent" target="_blank" rel="noreferrer">
                                    <FaTwitter />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
});

export default Contact;