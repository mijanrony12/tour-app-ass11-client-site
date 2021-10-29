import React from 'react';
import './Package.css'
import { Link } from 'react-router-dom';

const Package = ({ packages }) => {
    const { name, price, img,time,title } = packages;
    return (
        <div className="col-md-6 col-lg-4 package">
               
                      <img src={img} alt="" />
              
               <div className="content">
                        <div className="content-price">
                            <h6>{ price } (Tk)</h6>
                            <h6>{time}</h6>
                        </div>
                        <div>
                               <h4>Location: { name }</h4>
                                 <p>{ title }</p>
                       </div>
                        <div >
                               <Link to="/placeOrder">
                                        <button className="btn-design">Buy Now</button>
                               </Link>
                       </div>
                
               </div>
        </div>
    );
};

export default Package;