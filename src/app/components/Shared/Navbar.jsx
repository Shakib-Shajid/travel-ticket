import Image from 'next/image';
import React from 'react';

const Navbar = () => {
    return (
        <div className=' z-20'>
            <div className="navbar pl-20">
                <Image src="/logo.png" width="4000" height="1000" alt="" className='h-16 w-24 fixed' />
            </div>
        </div>
    );
};

export default Navbar;