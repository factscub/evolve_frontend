import React from 'react'
import inc from '../../Assets/plus.jpg'
import dec from '../../Assets/minus.png'
import '../userRow/UserRow.css'

export default function IncDec({ target, setTarget, type }) {

    /// set increase and decrease rate per click
    const incRate = type === 'steps-btn' ? 500 : 100
    const decRate = type === 'steps-btn' ? 500 : 100

    //// increment count for steps and calories are 500 and 100 respectively.
    const increment = (e) => {
        if (e.target.classList.contains(type)) {
            setTarget(prev => prev + incRate)
        }
    }


    //// decrement count for steps and calories are 500 and 100 respectively.
    const decrement = (e) => {
        if (e.target.classList.contains(type) && target > 0) {
            setTarget(prev => prev - decRate)
        }
    }

    return (
        <div className='target-text'>
            <div className={'inc ' + type} onClick={increment}>
                <img srcSet={inc} alt="" className={type} />
            </div>
            <p className={'number ' + type}>{target / 1000}k</p>
            <p className='text'>target</p>
            <div className={'dec ' + type} onClick={decrement}>
                <img srcSet={dec} alt="" className={type} />
            </div>
        </div>
    )
}
