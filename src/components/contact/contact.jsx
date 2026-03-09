import React, { forwardRef, useState } from "react";
import { FaGithub, FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import './contact.css'

const Contact = forwardRef((_, ref) => {

    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const phoneNumber = "917339468772";

        const text = `
            New Protfolio Contact

            Name: ${form.name}
            Email: ${form.email}
            Phone: ${form.phone}
            Message: ${form.message}
            `;

        const encodedText = encodeURIComponent(text);

        window.open(
            `https://wa.me/${phoneNumber}?text=${encodedText}`,
            "_blank"
        );

        setForm({
            name: "",
            email: "",
            phone: "",
            message: ""
        });
    };

    return (
        <div ref={ref} className="contact-section">

            <h1 className="contact-title">CONTACT ME</h1>
            <div className="contact-wrapper">
                <div className="contact-card">

                    <form className="contact-form" onSubmit={handleSubmit}>
                        <h2>Send us a message</h2>

                        <div className="row">
                            <div className="field">
                                <label>Your name</label>
                                <input type="text" name="name" value={form.name} placeholder="Enter your name" onChange={handleChange} required />
                            </div>

                            <div className="field">
                                <label>Your email</label>
                                <input type="email" name="email" value={form.email} placeholder="Enter your email" onChange={handleChange} required />
                            </div>
                        </div>

                        <div className="field phone">
                            <label>Phone number</label>
                            <input type="text" name="phone" value={form.phone} placeholder="Enter phone number" onChange={handleChange} required />
                        </div>

                        <div className="field">
                            <label>Message</label>
                            <textarea rows="6" name="message" value={form.message} placeholder="Type your message" onChange={handleChange} required></textarea>
                        </div>

                        <button className="submit-btn">SUBMIT</button>
                    </form>

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
                                <a href="https://github.com/Hafeez-31?tab=repositories" target="_blank" rel="noreferrer">
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