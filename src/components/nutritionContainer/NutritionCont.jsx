import React, { useState } from 'react'
import { DonutMultiple, DonutElement } from 'react-donut-component'
import ArrowBox from '../arrowBox/ArrowBox'
import IncDec from '../incDec/IncDec'
import TextInCircle from '../textInCircle/TextInCircle'


export default function NutritionCont({ data, setToolTip }) {

  const [calorieTarget, setCalorieTarget] = useState(data.calorieTarget)

  //// calculate each part of the cicular loading .
  const toolTipData = [data.protein, data.fat, data.carb]
  const totalPart = toolTipData[0].consumed + toolTipData[1].consumed + toolTipData[2].consumed
  const proteinPart = (toolTipData[0].consumed / totalPart) * 100
  const fatPart = (toolTipData[1].consumed / totalPart) * 100
  const carbPart = (toolTipData[2].consumed / totalPart) * 100

  ///// show tooltip box
  const showToolTip = () => {
    setToolTip(true)

  }
  //// hide tooltip box
  const hideToolTip = () => {
    setToolTip(false)
  }


  return (
    <div className='nutri-container'>
      <div className='nutri-count' onMouseEnter={showToolTip} onMouseLeave={hideToolTip}>
        <DonutMultiple className='target'>
          <DonutElement className='c' color='#F45C84' >{proteinPart}</DonutElement>
          <DonutElement color='#F5C90F' >{carbPart}</DonutElement>
          <DonutElement color='#03C7FC' >{fatPart}</DonutElement>
        </DonutMultiple>
        <TextInCircle number={data.calorieInTake} text='calories' />
      </div>

      {/* increment and decrement container */}
      <IncDec type='nut-btn' target={calorieTarget} setTarget={setCalorieTarget} />

      {/* arrow box to navigate to userid/nutrition route */}
      <ArrowBox data={data} type='nutrition' />
    </div>

  )
}
