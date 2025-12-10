import React from 'react';

const Footer = () => {
    return (
        <footer id="contact" className="footer">
            <div className="container">
                <div className="footer-content flex-between">
                    <div className="brand">
                        <h2><span className="text-gradient">GBR</span> Mobile Hub</h2>
                        <p>Your premium destination for mobile technology.</p>
                    </div>

                    <div className="footer-links">
                        <div className="link-group">
                            <h4>Shop</h4>
                            <ul>
                                <li><a href="#">All Phones</a></li>
                                <li><a href="#">Accessories</a></li>
                                <li><a href="#">New Arrivals</a></li>
                            </ul>
                        </div>

                        <div className="link-group">
                            <h4>Support</h4>
                            <ul>
                                <li><a href="#">FAQ</a></li>
                                <li><a href="#">Shipping</a></li>
                                <li><a href="#">Returns</a></li>
                            </ul>
                        </div>

                        <div className="link-group">
                            <h4>Company</h4>
                            <ul>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Contact</a></li>
                                <li><a href="#">Careers</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom flex-center">
                    <p>&copy; {new Date().getFullYear()} GBR Mobile Hub. All rights reserved.</p>
                </div>
            </div>

        </footer>
    );
};

export default Footer;
