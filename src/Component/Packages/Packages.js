import React from 'react';
import usePackage from '../../Hooks/usePackage';
import Package from '../Package/Package';

const Packages = () => {
    const [packages]=usePackage()
    return (
          //get data from package collection
            <div className="container my-5 ">
                        <h4 className="miniTitle ">Choose Your Package</h4>
                        <h1 className="headTitle">Select Your Best Package <br /> For Your Travel</h1>
                   <div className="row gy-5">
                        {
                                packages.map(pkg => <Package
                                    key={ pkg._id }
                                    packages={pkg}
                                ></Package>)
                        }
                </div>
            </div>
    );
};

export default Packages;