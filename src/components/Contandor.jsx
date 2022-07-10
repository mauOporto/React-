import { useState } from "react"

const Contandor = () => {

    const [contadador, setContador] = useState(0);

    const aumentar = () => {
        setContador(contadador + 1);
        console.log(contadador);
    }


  return (
    <>
    <h2>Contador</h2>
    <h3>{contadador}</h3>
    <button className="btn btn-info" onClick={aumentar}>
        Aumentar
    </button>
    </>
  )
}

export default Contandor