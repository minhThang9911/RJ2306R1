import React from 'react'
import useBoolean from '../../hooks/useBoolean';

const Ex1 = () => {
  //state + updater
  const { isCorrect, toggleCorrect } = useBoolean(false)


  // const handleLogout = () => { 
  //   setIsLogin(false)
  // }

  //tái sử dụng logic và state
  //trường hợp: code bị trùng lặp nhiều

  //over engineering

  return (
    <>
      {!isOpen ? (
        <>
          <h1>Please login</h1>
          <button onClick={toggleOpen}>Login</button>
        </>
      ) :
        
        <div>
          <p>Welcome</p>
          <button onClick={() => console.log('123123')}>Logout</button>
        </div>
      }
    </>
  )
}

export default Ex1