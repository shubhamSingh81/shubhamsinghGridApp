import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <nav className='navbar navbar-dark bg-dark navbar-expand-sm'>
                <div className='container'>
                    <Link to={'/user'} className="navbar-brand">
                        <i className='fa fa-mobile text-warning' /><h1>Click Me TO See User Page</h1><span className='text-warning'>
                        </span>
                    </Link>
                </div>
            </nav>
        </>
    )
}

export default Navbar;