import React from 'react';
import './style.css';

const EmployeeCard = (props) => {
    return (
        <div id={ props.id } className='card'>
            <div className='img-container'>
                <img alt={ props.firstName } src={ props.image } />
            </div>
            <div className='info'>
                <h2>{ props.firstName } { props.lastName }</h2>
                <p>Biggest Listing: ${ props.bigListing } million</p>
                <p>{ props.email }</p>
                <a href={ props.instagram }>insta</a>
            </div>
        </div>
    )
}

export default EmployeeCard;