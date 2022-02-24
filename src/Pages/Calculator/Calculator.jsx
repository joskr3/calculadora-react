import React from 'react';
import "./styles.scss"



const Calculator = () => {
  return (
    <div className='contenedor' style={{ margin: "0px" }}>
      <div className='contenedor__resultado'>
        <div>0</div>
      </div>
      <div className="contenedor__botones">
        <div className="zero">0</div>
        <div className="operaciones"></div>
        <div className="acciones"></div>
        <div className="dot">.</div>
        <div className="uno">1</div>
        <div className="dos">2</div>
        <div className="tres">3</div>
        <div className="cuatro">4</div>
        <div className="cinco">5</div>
        <div className="seis">6</div>
        <div className="siete">7</div>
        <div className="ocho">8</div>
        <div className="nueve">9</div>
        <div className="division">/</div>
        <div className="multiplicacion">x</div>
        <div className="resta">-</div>
        <div className="suma">+</div>
        <div className="igual">=</div>
        <div className="resetear">AC</div>
        <div className="abs">+/-</div>
        <div className="porcentaje">%</div>
      </div>
    </div>
  )
}

export default Calculator