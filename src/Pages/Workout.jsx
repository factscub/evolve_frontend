import React, { useEffect, useState } from 'react'

export default function Workout() {
  const [title, setTitle] = useState('')

  useEffect(() => {
    setTitle('Workout page')
    document.title = title
  }, [title])

  return (
    <div style={{ color: 'white' }}>Workout Page</div>
  )
}
