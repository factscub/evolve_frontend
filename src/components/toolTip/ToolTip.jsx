import React from 'react'
import './ToolTip.css'

export default function ToolTip({ data }) {

  const toolTipData = [data.protein, data.fat, data.carb]

  return (
    <div className='tool-tip-container'>

      {
        toolTipData.map(data => {
          const percentage = (data.consumed / data.target * 1.0) * 100
          const progress = {
            width: percentage + '%',
            background: data.color
          }
          const progressText = { color: data.color }

          return (
            <div className='bar-container protein' key={data.type}>
              <div className='text-container'>
                <span className='text'>{data.type}</span>
                <span className='number'>{data.target}g</span>
              </div>
              <div className='bar-row' >
                <div className='progress' style={progress}></div>
                <span className='number' style={progressText}>{data.consumed}g</span>
              </div>
            </div>)
        })
      }

    </div>
  )
}
