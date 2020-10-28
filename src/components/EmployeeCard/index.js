import React from 'react';
import './style.css';

const EmployeeCard = (props) => {
    return (
        <div id={ props.id } className='card'>
            <div className='img-container'>
                <img alt={ props.firstName } src={ props.image } />
            </div>
            <div className='info'>
                <h3>{ props.firstName } { props.lastName }</h3>
                <p>biggest listing: ${ props.bigListing } million</p>
                <p>{ props.email }</p>
                <a href={ props.instagram } target='_blank' rel='noreferrer'><i class="fab fa-instagram fa-xs"></i></a>
            </div>
        </div>
    )
}

export default EmployeeCard;