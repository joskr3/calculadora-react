import React, { useState } from 'react';
import Boton from '../../Components/Boton/Boton';
import "./styles.scss"

const Calculator = () => {


  const [resultado, setResultado] = useState(0);
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [operation, setOperation] = useState('');

  const [isFirstValue, setIsFirstValue] = useState(true);

  const handleSum = (value1, value2) => {
    console.log(value1, value2);
    console.log("SUMA")
    setResultado(value1 + value2);
  }

  const handleAsignValue = (value) => {
    console.log("ASIGNAR VALOR")
    // isFirstValue ? setValue1(value) : setValue2(value);
    // console.log(isFirstValue ? value1 + "PrimerValor" : value2 + "SegundoValor");
    // setIsFirstValue(!isFirstValue);

    if (isFirstValue === true) {
      setValue1(value);
      console.log("Primer Valor", value1);
      setIsFirstValue(false);
    } else if (isFirstValue === false) {
      console.log("Segundo Valor", value2);
      setValue2(value)
      setIsFirstValue(true);
    }
  }

  const handleExecuteOperation = (value) => {
    console.log("ENTRAR AL EJECUTAR OPERACION")
    console.log(value);
    //e.preventDefault();
    handleAsignValue(value);
    if (!isFirstValue) {
      console.log("EJECUTAR OPERACION")
      handleAsignValue(value);
      // lanzo la operacion

      switch (operation) {
        case '+':
          handleSum(value1, value2);
        default:
          break;
      }
    }

  }

  const reset = () => {
    //e.preventDefault();
    setValue1(0);
    setValue2(0);
    setResultado(0);
    setIsFirstValue(true);
  }

  return (
    <main>
      <div className='contenedor__resultado'>
        <div>{resultado}</div>
      </div>
      <div className="contenedor">
        <Boton className="item" titulo="AC" evClick={reset} />
        <Boton className="item" titulo="+/-" />
        <Boton className="item" titulo="%" />
        <Boton className="item" titulo="/" />
        <Boton className="item" titulo="7" evClick={() => handleExecuteOperation(7)} />
        <Boton className="item" titulo="8" evClick={() => handleExecuteOperation(8)} />
        <Boton className="item" titulo="9" />
        <Boton className="item" titulo="-" />
        <Boton className="item" titulo="4" />
        <Boton className="item" titulo="5" />
        <Boton className="item" titulo="6" />
        <Boton className="item" titulo="x" />
        <Boton className="item" titulo="1" />
        <Boton className="item" titulo="2" />
        <Boton className="item" titulo="3" />
        <div className="boton" >0</div>
        <Boton className="item" titulo="+" evClick={() => setOperation("+")} />
        <Boton className="item" titulo="." />
        <Boton className="item" titulo="=" />
      </div>
    </main>

  )
}

export default Calculator