import React from 'react'
import "./styles.scss"

const Boton = ({ titulo, evClick }) => {

  const handleClick = (e) => {
    e.preventDefault();
    evClick();
  }

  return (
    <button onClick={handleClick}>{titulo}</button>
  )
}

export default Boton