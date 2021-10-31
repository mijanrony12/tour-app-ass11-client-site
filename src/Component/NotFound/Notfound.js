import React from 'react';
import './Notfound.css'
import { Link } from 'react-router-dom';
import notfound from '../../image/notfound.png'
const Notfound = () => {
    return (
        <div className="notfound">
            <img src={ notfound } alt="" /> <br />
            <Link to="/">
                  <button className="btn-design">Go Home</button>
            </Link>
        </div>
    );
};

export default Notfound;