import React, { useState, useEffect } from 'react';
import Boton from '../../Components/Boton/Boton';
import "./styles.scss"

const Calculator = () => {

  // const handleExecuteOperation = (value) => {
  //   console.log("ENTRAR AL EJECUTAR OPERACION")
  //   console.log(value);
  //   handleAsignValue(value);
  //   if (!isFirstValue) {

  //     console.log("EJECUTAR OPERACION")

  //     handleAsignValue(value);
  //     switch (operation) {
  //       case '+':
  //         handleSum(value1, value2);

  //         break;
  //       default:
  //         break;
  //     }
  //   } else if (isFirstValue) {
  //     handleAsignValue(value);
  //   }

  // }

  const [resultado, setResultado] = useState(null);
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [isFirstValue, setIsFirstValue] = useState(true);
 

  const handleAssignValue = (value) => {

    console.log("ENTRAR AL ASIGNAR VALOR")

    if (value1 === 0 && isFirstValue) {
      console.log("ASIGNAR VALOR 1", value)
      setValue1(value);
      setIsFirstValue(false);
    } else {
      console.log("ASIGNAR VALOR 2", value)
      setValue2(value);
      setIsFirstValue(prevState => !prevState);
    }
  }

  const handleExecuteOperation = (operation) => {
    switch (operation) {
      case '+':
        setResultado(value1 + value2);
        break;
      default:
        break;
    }
  }

  const reset = () => {
    setValue1(0);
    setValue2(0);
    setResultado(0);
  }

  return (
    <main>
      <div className='contenedor__resultado'>
        <div>{resultado || 0}</div>
      </div>
      <div className="contenedor">
        <Boton className="item" titulo="AC" evClick={reset} />
        <Boton className="item" titulo="+/-" />
        <Boton className="item" titulo="%" />
        <Boton className="item" titulo="/" />
        <Boton className="item" titulo="7" evClick={() => handleAssignValue(7)} />
        <Boton className="item" titulo="8" evClick={() => handleAssignValue(8)} />
        <Boton className="item" titulo="9" evClick={() => handleAssignValue(9)} />
        <Boton className="item" titulo="-" />
        <Boton className="item" titulo="4" evClick={() => handleAssignValue(4)} />
        <Boton className="item" titulo="5" evClick={() => handleAssignValue(5)} />
        <Boton className="item" titulo="6" evClick={() => handleAssignValue(6)} />
        <Boton className="item" titulo="x" />
        <Boton className="item" titulo="1" evClick={() => handleAssignValue(1)} />
        <Boton className="item" titulo="2" evClick={() => handleAssignValue(2)} />
        <Boton className="item" titulo="3" evClick={() => handleAssignValue(3)} />
        <div className="boton" onClick={() => handleAssignValue(0)}>0</div>
        <Boton className="item" titulo="+" evClick={() => handleExecuteOperation("+")} />
        <Boton className="item" titulo="." />
        <Boton className="item" titulo="=" />
      </div>
    </main>

  )
}

export default Calculator