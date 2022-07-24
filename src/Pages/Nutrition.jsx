import React, { useEffect, useState } from 'react'

export default function Nutrition() {

  const [title, setTitle] = useState('')

  useEffect(() => {
    setTitle('Nutrition page')
    document.title = title
  }, [title])
  
  return (
    <div style={{ color: 'white' }}>Nutrition Page</div>
  )
}
