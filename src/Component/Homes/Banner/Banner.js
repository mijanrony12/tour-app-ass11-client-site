import React from 'react';
import './Banner.css'
import img from '../../../image/bann.jpg'
const Banner = () => {
    return (
        <div className="banner">
               <div className="image">
                       <img src={img} alt="banner-image" />
                </div>
                <div className="banner-title">
                      <div>
                             <h1>Amazing Tour in Indonesia</h1>
                            <h4>its very expensive package</h4>
                            <p>7 Days,  8 Night Tour</p>
                            
                               <button className="btn-design">Buy Now</button>
                            
                      </div>
                </div>
        </div>
    );
};

export default Banner;