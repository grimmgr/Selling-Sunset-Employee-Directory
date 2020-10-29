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
                <p className='text'>biggest listing: ${ props.bigListing } million</p>
                <a className='text' href={`mailto:${props.email}`} target='_blank' rel='noreferrer'>{ props.email }</a>
                <br/>
                <a id='insta-icon' className='text' href={ props.instagram } target='_blank' rel='noreferrer'><i className='fab fa-instagram'></i></a>
            </div>
        </div>
    )
}

export default EmployeeCard;