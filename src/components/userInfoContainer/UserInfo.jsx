import React from 'react'

export default function UserInfo({ data, photo }) {
    const { name, email } = data
    return (
        <div className='user'>
            <div className='photo'>
                <img srcSet={photo} alt="" />
            </div>
            <div className='user-info' >
                <div className='name'>{name}</div>
                <div className='email'>{email}</div>
            </div>
        </div>
    )
}
