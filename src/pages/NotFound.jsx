import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div>
            <h1 className="text-2xl font-bold">404 - Not Found</h1>
            <p>The page you requested does not exist.</p>
            <Link to="/" className="text-blue-600 hover:underline">Go back home</Link>
        </div>
    )
}

export default NotFound
