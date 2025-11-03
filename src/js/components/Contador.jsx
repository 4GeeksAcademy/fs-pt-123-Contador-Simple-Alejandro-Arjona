import { useState } from "react"

export const ContadorSimple = () => {

    const [number, setNumber] = useState(0)

    const handleSumar = () => {
        setNumber(number + 1)
    }
    const handleRestar = () => {
        setNumber(number - 1);
    };

    const handleReset = () => {
        setNumber(0);
    };


    return (
        <div className="container ">
      <h1 className="text-center text-danger">{number}</h1>
      <div className="text-center d-flex justify-content-center gap-3">
        <button onClick={handleSumar} className="btn btn-success">
          ➕ Sumar
        </button>
        <button onClick={handleRestar} className="btn btn-warning">
          ➖ Restar
        </button>
        <button onClick={handleReset} className="btn btn-danger">
          🔄 Reset
        </button>
      </div>
    </div>
    )
}