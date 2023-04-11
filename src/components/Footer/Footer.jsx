import React from "react";
import "./Footer.css";
const Footer = () => {
    return (
        <div className="footer_holder">
            <div className="footer__container">
                <div className="footer_info">
                    <img src="/logo.svg" alt="" />
                    <p>There are many variations of passages<br></br>of Lorem Ipsum , but the majority have<br></br>suffered alteration in some form.</p>
                    <div>
                        <img src="/social.png" alt="" />
                    </div>
                </div>
                <div className="footer_info_rest">
                    <h2>Company</h2>
                    <p>About Us</p>
                    <p>Work</p>
                    <p>Latest News</p>
                    <p>Careers</p>
                </div>
                <div className="footer_info_rest">
                    <h2>Product</h2>
                    <p>Prototype</p>
                    <p>Plans & Pricing</p>
                    <p>Customers</p>
                    <p>Integrations</p>
                </div>
                <div className="footer_info_rest">
                    <h2>Support</h2>
                    <p>Help Desk</p>
                    <p>Sales</p>
                    <p>Become a Partner</p>
                    <p>Developers</p>
                </div>
                <div className="footer_info_rest">
                    <h2>Contact</h2>
                    <p>524 Broadway, NYC</p>
                    <p>+1 777 - 978 - 5570</p>
                </div>
            </div>
            <hr></hr>
            <div className="footer_last">
                <p>@2023 GetHired. All Rights Reserved</p>
                <p>Powered by <span>GetHired.</span></p>
            </div>
            </div>
    );
};

export default Footer;
