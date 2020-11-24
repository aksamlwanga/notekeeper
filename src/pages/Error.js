import React from 'react'
import { Link } from "react-router-dom";
function Error() {
    return (
        <div>
            <p>404 Not  found</p>
            <Link to='/' className='btn-primary'>
                return home
           </Link>
        </div>

    )
}

export default Error
