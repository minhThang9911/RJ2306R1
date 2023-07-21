import React from 'react'
import useBoolean from '../../hooks/useBoolean'

const ExSample = () => { 

  const [isOpen, setIsOpen] = useBoolean(false)

  return (
    <>
      {console.log(isOpen)}
      <p>State: { JSON.stringify(isOpen) }</p>
      <button onClick={setIsOpen}>Toggle value</button>
    </>
  )
}

export default ExSample