
import bgContact from "../../../public/img/contact-form-bg.jpg"
import bg1 from "../../../public/img/slider-bg-1.jpg";

export default function FooterClient(){

    return (
        <footer className="footer-section">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="map-location">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d33245.297803635964!2d-73.76987401620775!3d40.704774398815005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1575866843291!5m2!1sen!2sbd" style={{border: 0}} allowFullScreen />
                            <div className="map-widget">
                                <i className="fa fa-map-marker" />
                                <div className="map-address">
                                    <img src="img/map-location.jpg" alt="" />
                                    <ul className="map-text">
                                        <li><span>Address:</span> Iris Watson, Box 283, NY</li>
                                        <li><span>Phone:</span> 12-456-791</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="footer-form set-bg" data-setbg="img/contact-form-bg.jpg" style={{backgroundImage: `url(${bgContact.src})`}}>
                            <div className="row">
                                <div className="col-lg-10">
                                    <div className="section-title">
                                        <h2>Request A Call Back</h2>
                                        <p>Shape your body and burn fat with strength training. With the right equipment
                                            such as free weights or resistance machines.</p>
                                    </div>
                                    <form action="#">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <input type="text" placeholder="Name" />
                                            </div>
                                            <div className="col-lg-6">
                                                <input type="text" placeholder="Email" />
                                            </div>
                                            <div className="col-lg-12">
                                                <input type="text" placeholder="Subject" />
                                                <textarea placeholder="Message" defaultValue={""} />
                                                <button type="submit">Submit <i className="ti-angle-double-right" /></button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="register">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="copyright">
                                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                                Copyright © All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                            </div>
                            <div className="footer-widget">
                                <ul>
                                    <li>Privacy Policy</li>
                                    <li>Terms Of Service</li>
                                    <li>Careers</li>
                                </ul>
                            </div>
                            <div className="footer-links">
                                <a href="#"><i className="fa fa-facebook" /></a>
                                <a href="#"><i className="fa fa-twitter" /></a>
                                <a href="#"><i className="fa fa-instagram" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    )
}