import React from 'react';
import './navbar.css';

function Navbar() {
    return (
        <div className='main lg:flex md:flex flex-wrap justify-between items-center px-4 py-4'>
            <div className="left">
                <div className="logo">
                    <img src="https://seeklogo.com/images/C/codepen-logo-1B85489666-seeklogo.com.png" alt="Logo" />
                    <h3>Vamsi Krishna D</h3>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
