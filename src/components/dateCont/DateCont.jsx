import React, { useState } from 'react'

export default function DateCont({ img, date }) {
    const [equalDates, setEqualDates] = useState(false)

    /// change date to tostringdate
    const stringDate = (date) => {
        if (new Date().toLocaleDateString() === new Date(date).toLocaleDateString() && !equalDates) {
            setEqualDates(true)
        }
        return new Date(date).toDateString().split(' ').slice(1, 3).join(' ')
    }

    return (
        <>
            <div className='date-cont' style={{ background: equalDates && '#CC3838' }}>
                <div className='icon '>
                    <img srcSet={img} alt="" />
                </div>
                <p className='date'>{stringDate(date)}</p>
            </div>
        </>
    )
}
