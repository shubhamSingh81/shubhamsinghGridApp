import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <nav>
                <div>
                    <Link to={'/user'}>
                        <i/><h1>Click Me TO See User Page</h1><span>
                        </span>
                    </Link>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
