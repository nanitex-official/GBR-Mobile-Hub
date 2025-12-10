import React from 'react';

const Features = () => {
    return (
        <section id="features" className="section bg-card">
            <div className="container">
                <div className="grid-2">
                    <div className="feature-content">
                        <h2 className="title">Engineered for <br /><span className="text-gradient">Perfection</span></h2>
                        <p className="description">
                            We bring you the pinnacle of mobile technology. Every device is selected for its
                            superior build quality, performance, and groundbreaking features.
                        </p>

                        <ul className="feature-list">
                            <li>
                                <span className="icon">🚀</span>
                                <div>
                                    <h4>Ultra-Fast Performance</h4>
                                    <p>Next-gen processors for seamless multitasking.</p>
                                </div>
                            </li>
                            <li>
                                <span className="icon">📸</span>
                                <div>
                                    <h4>Pro-Grade Cameras</h4>
                                    <p>Capture cinematic moments with AI-enhanced lenses.</p>
                                </div>
                            </li>
                            <li>
                                <span className="icon">🔋</span>
                                <div>
                                    <h4>All-Day Battery</h4>
                                    <p>Power that lasts as long as your day does.</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="feature-visual flex-center">
                        <div className="circle-glow"></div>
                        <div className="glass-card animate-float">
                            <h3>Next Gen</h3>
                            <p>Ready</p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Features;
