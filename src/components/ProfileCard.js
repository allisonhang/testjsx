import React from 'react';

const ProfileCard = ({title, handler, imgSrc}) => {
    return <div className="card">
        <div className="card-image">
            <figure className='image is-1by1'>
            <img alt='pda logo' src={imgSrc} />
            </figure>
        </div>
       <div className='card-content'>
            <div className='media-content'>
                <p className='title is-4'>{title} </p>
                <p className='substitle is-6'>{handler}</p>
            </div>
       </div>
       
    </div>
}

export default ProfileCard;