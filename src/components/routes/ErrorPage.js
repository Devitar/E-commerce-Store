import React from 'react';
import { Link } from 'react-router-dom';
import "../scss/ErrorPage.css";

const ErrorPage = () => {
    return(
        <div className="errorPage">
            <Link to='/'>
                <p>
                    Error 404: Product not found. Click here to return home.
                </p>
            </Link>
        </div>
    )
}

export default ErrorPage;