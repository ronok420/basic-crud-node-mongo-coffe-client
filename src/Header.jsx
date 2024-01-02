import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Header = () => {
    return (
        <div> 
             <Link className='m-5' to="/">Home</Link>
           <Link  className='m-5' to="/addcoffe">addCoffe</Link>
           {/* <Link  className='m-5'  to="/updatecoffe/659287446b7643fc96f2028d">updateCoffe</Link> */}
         
            <Outlet></Outlet>
        </div>
    );
};

export default Header;