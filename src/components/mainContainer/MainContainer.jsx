import React from 'react'
import './MainContainer.css'
import walking from '../../Assets/walking.png'
import dumbell from '../../Assets/fitness.png'
import nutrition from '../../Assets/reception-bell.png'
import UserRow from '../userRow/UserRow'
import userData from '../../userData/UserData'

export default function MainContainer() {
  return (
    <div className='main-container'>
      <nav>
        <ul>
          <li><img srcSet={walking} alt="" /><span>Steps</span></li>
          <li className='dumbell'><img srcSet={dumbell} alt="" /><span>Workout</span></li>
          <li><img srcSet={nutrition} alt="" /><span>Nutrition</span></li>
        </ul>
      </nav>
      {
        userData.map(data => <UserRow key={data.userId} data={data} />)
      }
    </div>
  )
}
