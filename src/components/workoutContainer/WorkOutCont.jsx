import React, { useState } from 'react'
import person from '../../Assets/person.png'
import cal from '../../Assets/cal.png'
import ArrowBox from '../arrowBox/ArrowBox'

export default function WorkOutCont({ data }) {

  const { performedDate, scheduledDate } = data
  const [equalDates, setEqualDates] = useState(false)



  /// change date to tostringdate
  const stringDate = (date) => {
    if (new Date().toLocaleDateString() === new Date(date).toLocaleDateString() && !equalDates) {
      setEqualDates(true)
    }
    return new Date(date).toDateString().split(' ').slice(1, 3).join(' ')
  }

  return (
    <div className='workout-container'>
      <div className='dates'>
        <div className='date-cont d-1'>
          <div className='icon '>
            <img srcSet={person} alt="" />
          </div>
          <p className='date'>{stringDate(scheduledDate)}</p>
        </div>
        <div className='date-cont d-2' style={{ background: equalDates && '#CC3838' }}>
          <div className='icon '>
            <img srcSet={cal} alt="" />
          </div>
          <p className='date'>{stringDate(performedDate)}</p>
        </div>
      </div>

      {/* arrow box to navigate to userid/workout route */}
      <ArrowBox data={data} type='workout' />

    </div>
  )
}
