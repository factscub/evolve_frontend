import React from 'react'

export default function TextInCircle({ number, text }) {
    return (
        <div className='circular-text'>
            <p className='number'>{number}</p>
            <p className='text'>{text}</p>
        </div>
    )
}
