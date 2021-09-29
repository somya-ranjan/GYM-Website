import React from 'react'
import "./Footer.css"
function Footer() {
    return (
        <div className="footer_comp">
            <div className="footer_comp_content">
                <div className="logo">
                    <h1><span>S2</span> brute</h1>
                </div>
                <div className="opening_time">
                <h2>Openning Time</h2>
                    <div className="openning_time_data">
                        <div className="day">
                            <h4>monday</h4> <hr />
                            <h4>Tuesday</h4> <hr />
                            <h4>Wednesday</h4> <hr />
                            <h4>Thursday</h4> <hr />
                            <h4>Friday</h4> <hr />
                            <h4>Saturday</h4>  <hr />
                            <h4>Sunday</h4> <hr />
                        </div>
                        <div className="time">
                            <h4>7.00-22.00</h4> <hr />
                            <h4>7.00-22.00</h4> <hr />
                            <h4>7.00-22.00</h4> <hr />
                            <h4>7.00-22.00</h4> <hr />
                            <h4>7.00-22.00</h4> <hr />
                            <h4>7.00-18.00</h4> <hr />
                            <h4>Closed</h4> <hr />
                        </div>
                    </div>
                </div>
                <div className="social_media">
                    <h2>Social media</h2>
                    <a href="https://www.facebook.com/ranjansomya.sethy" target="_blank"><h3><i className="fab fa-facebook-square"></i><span className="fb">Facebook</span></h3></a>
                    <a href="https://twitter.com/SOMYARANJANSANU" target="_blank"><h3><i className="fab fa-twitter-square"></i><span className="tw">Twiter</span></h3></a>
                    <a href="https://www.linkedin.com/in/somya-ranjan" target="_blank"><h3><i className="fab fa-linkedin"></i><span className="ln">LinkedIn</span></h3></a>
                    <a href="https://www.instagram.com/somyaranjansanu" target="_blank"><h3><i className="fab fa-google-plus-square"></i><span className="go">Google+</span></h3></a>
                </div>
                <div className="contact_us">
                    <h2>contact us</h2>
                    <div className="phone">
                        <h1>9090904448</h1>
                        <p>helpline available 24x6 hours</p>
                    </div>
                    <div className="email">
                        <h4>email us :</h4>
                        <p>s2brute@info.com</p>
                    </div>
                </div>
            </div>
            <div className="copy_right">
                <h5>Copyright @ 2021 <span>S2</span> <span className="logo">brute</span></h5>
            </div>
        </div>
    )
}

export default Footer
