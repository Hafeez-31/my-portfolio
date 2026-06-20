import React, { forwardRef, useState } from "react";
import {
    FaGithub,
    FaInstagram,
    FaTwitter,
    FaFacebook
} from "react-icons/fa";
import "./contact.css";

const Contact = forwardRef((_, ref) => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const phoneNumber = "917339468772";

        const text = `
Portfolio Contact

Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone}

Message:
${form.message}
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
        <section ref={ref} className="contact-section">
            <h1 className="contact-title">CONTACT ME</h1>

            <div className="contact-container">
                <div className="contact-card">
                    <form
                        className="contact-form"
                        onSubmit={handleSubmit}
                    >
                        <h2>Let's Work Together</h2>

                        <div className="row">
                            <div className="field">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Enter your name"
                                    value={form.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="field">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    value={form.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="field">
                            <input
                                type="text"
                                name="phone"
                                placeholder="Enter your phone number"
                                value={form.phone}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="field">
                            <textarea
                                rows="7"
                                name="message"
                                placeholder="Tell me about your project..."
                                value={form.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="submit-btn"
                        >
                            SEND MESSAGE
                        </button>
                    </form>
                </div>
                <div className="contact-info">
                    <h2>Let's Connect</h2>

                    <div className="info-card">
                        <span>Email</span>
                        <p>fasthafeezahamed21@gmail.com</p>
                    </div>

                    <div className="info-card">
                        <span>Phone</span>
                        <p>+91 73394 68772</p>
                    </div>

                    <a
                        href="https://maps.google.com/?q=Hasthinapuram,Chromepet,Chennai,Tamil Nadu,India"
                        target="_blank"
                        rel="noreferrer"
                        className="info-card location-card"
                    >
                        <span>Location</span>
                        <p>
                            Chromepet, Chennai.
                        </p>
                    </a>

                    <div className="quick-contact">
                        <div className="contact-btn">
                            Email Me
                        </div>

                        <a
                            href="https://wa.me/917339468772"
                            target="_blank"
                            rel="noreferrer"
                            className="contact-btn"
                        >
                            WhatsApp
                        </a>
                    </div>

                    <div className="follow-section">
                        <h3>Follow Me</h3>

                        <div className="socials">
                            <a
                                href="https://github.com/Hafeez-31"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaGithub />
                            </a>

                            <a
                                href="https://www.instagram.com/ahamed_hafeez_21"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaInstagram />
                            </a>

                            <a
                                href="https://www.facebook.com"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaFacebook />
                            </a>

                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaTwitter />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
});

export default Contact;