import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Error.css"
function Error() {
    return (
        <div className="error_section">
            <NavLink to="/">Back To Home</NavLink>
        </div>
    )
}

export default Error
