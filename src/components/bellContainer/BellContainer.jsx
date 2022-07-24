import React from 'react'
import bell from '../../Assets/bell.png'

export default function BellContainer() {
    return (
        <div className='bell-container'>
            <div className='bell'>
                <img srcSet={bell} alt="" />
            </div>
        </div>
    )
}
