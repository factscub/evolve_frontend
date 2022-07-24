import React, { useState } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import IncDec from '../incDec/IncDec'
import TextInCircle from '../textInCircle/TextInCircle'
import '../userRow/UserRow.css'

export default function StepsCont({ data }) {
  const { stepsWalked } = data
  const [stepsTarget, setStepsTarget] = useState(data.stepsTarget)

  return (
    <div className='steps-container'>
      <div className='walked-count'>
        <CircularProgressbar
          value={(stepsWalked / stepsTarget) * 100}
          styles={buildStyles({
            pathColor: '#7FD18C'
          })} />
        <TextInCircle number={stepsWalked} text='walked' />
      </div>

      {/* increment and decrement container */}
      <IncDec type='steps-btn' target={stepsTarget} setTarget={setStepsTarget} />

    </div>
  )
}
