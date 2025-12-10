import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="section contact-section">
            <div className="container">
                <div className="contact-grid">
                    <div className="contact-info">
                        <h2 className="title">Get in <span className="text-gradient">Touch</span></h2>
                        <p className="subtitle">Have questions about our latest devices? Visit us or send a message.</p>

                        <div className="info-items">
                            <div className="info-item">
                                <div className="icon">📍</div>
                                <div>
                                    <h4>Visit Us</h4>
                                    <p>123 Tech Avenue, Silicon Valley, CA</p>
                                </div>
                            </div>
                            <div className="info-item">
                                <div className="icon">📞</div>
                                <div>
                                    <h4>Call Us</h4>
                                    <p>+1 (555) 123-4567</p>
                                </div>
                            </div>
                            <div className="info-item">
                                <div className="icon">✉️</div>
                                <div>
                                    <h4>Email Us</h4>
                                    <p>support@gbrmobilehub.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form-wrapper glass-panel">
                        <form className="contact-form">
                            <div className="form-group">
                                <label htmlFor="name">Full Name</label>
                                <input type="text" id="name" placeholder="John Doe" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input type="email" id="email" placeholder="john@example.com" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Your Message</label>
                                <textarea id="message" rows="4" placeholder="How can we help you?"></textarea>
                            </div>
                            <button type="button" className="btn btn-full">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
