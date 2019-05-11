import React from 'react';
import './scss/PageTitle.css';
// components


const PageTitle = (props) => {
    return(
        <div className="titleText">
            {props.title}
        </div>
    )
}

export default PageTitle;