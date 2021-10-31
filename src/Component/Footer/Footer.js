import React from 'react';
import './Footer.css'
import payment from '../../image/payment.png'
const Footer = () => {
    return (
       // our contact ,payment,about us here
        <div className="row px-5 footer-section">
                 <div className="col-md-4">
                    <h2>TG Tour</h2>
                    <p>The Travel Group is one of the best travel agency in Bangladesh. We specialize in Corporate, Group, Family or Individual travel management. We have already done 800 group tours and more than 300 corporate tours very successfully.</p>
                     <div className="social-link">
                         <h2>Follow Us:</h2>
                          <a href="https://www.facebook.com/"><i class="fab fa-facebook-square"></i></a>
                          <a href="https://www.instagram.com/"><i class="fab fa-instagram-square"></i></a>
                          <a href="https://www.twitter.com/"><i class="fab fa-twitter-square"></i></a>
                          <a href="https://www.youtube.com/"><i class="fab fa-youtube-square"></i></a>
                     </div>
                 </div>
                 <div className="col-md-4 contact">
                           <h2>Contact Us</h2>
                           <div>
                                <a href="">+01852-1265122</a> <br />
                                <a href="">+01752-1265122</a>
                          </div>
                           <div>
                                 <a href="">info@tgtour.com</a><br />
                                 <a href="">support@tgtour.com</a>
                          </div>
                           <div>
                                <a href="">H-31, R-12, Mirpur</a><br />
                                <a href="">Dhaka, Bangladesh</a>
                          </div>
                 </div>
                <div className="col-md-4">
                         <h1>We Accepts</h1>
                      <img src={payment} alt="payment-method" />
                 </div>
        </div>
    );
};

export default Footer;