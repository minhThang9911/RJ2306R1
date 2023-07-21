import React from 'react'

const useBoolean = (initialBoolean) => {
  const [isBoolean, setIsBoolean] = React.useState(initialBoolean)

  const setBoolean = () => {
    setIsBoolean(!isBoolean);
  }

  return { isBoolean, setBoolean }
}

export default useBoolean