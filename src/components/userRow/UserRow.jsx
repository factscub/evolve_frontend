import React, { useState } from 'react'
import './UserRow.css'
import photo from '../../Assets/photo.jpg'
import ToolTip from '../toolTip/ToolTip'
import UserInfo from '../userInfoContainer/UserInfo'
import StepsCont from '../stepsContainer/StepsCont'
import NutritionCont from '../nutritionContainer/NutritionCont'
import BellContainer from '../bellContainer/BellContainer'
import WorkOutCont from '../workoutContainer/WorkOutCont'

export default function UserRow({ data }) {

    //// show tooltip comoponent 
    const [toolTip, setToolTip] = useState(false)

    return (
        <div className='user-row'>

            {/* user info conatiner */}
            <UserInfo data={data} photo={photo} />

            <div className='details'>

                {/* steps container */}
                <StepsCont data={data} />

                {/* workout */}
                <WorkOutCont data={data} />

                {/* nutrition */}
                <NutritionCont data={data} setToolTip={setToolTip} />

                {/* bell container*/}
                <BellContainer />

                {/* tooltip container */}
                {toolTip && <ToolTip data={data} />}

            </div>
        </div>
    )
}
