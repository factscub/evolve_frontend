import React from 'react'
import exc from '../../Assets/exc.png'
import arrow from '../../Assets/arrow.png'
import { useNavigate } from 'react-router-dom'

export default function ArrowBox({data,type}) {
    const {userId,feedback,}=data
    const navigate = useNavigate()
    return (
        <div className='arrow-con' onClick={() => navigate(`/${userId}/${type}`)}>
            <div className='arrow' style={{ background: (feedback && type==='workout') && '#CC3838' }}>
                <img srcSet={(feedback && type==='workout') ? exc : arrow} alt="" />
            </div>
        </div>
    )
}
