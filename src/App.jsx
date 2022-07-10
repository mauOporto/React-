import Contandor from "./components/Contandor"
import Frutas from "./components/Frutas"

const App = () => {

    const saludo = 'Este un saludo en react'
    const colores = {
        primary: 'text-primary',
        info: 'text-info',
        danger: 'text-danger',
    }

    const user = false  

    const SaludoBienvenida = ()=> {
        return <h2 className="text-info">Bienvenido a React</h2>
    }

    const SaludoDespedida = ()=> {
        return <h2 className="text-success">Adios a React</h2>
    }

    const funcionClick = (nombre) => {
        console.log(`click ${nombre}`)
    }

    const frutas = ['Manzana','Pera','banano']

  return (
    <>

        <h1 className={colores.primary}>{saludo}</h1>
        <Contandor/>

        {user ? <SaludoBienvenida/> : <SaludoDespedida/>}

        <Frutas frutasApp={frutas}/>



        <button className="btn btn-primary" onClick={() => funcionClick('Mau Oporto')}>
            Dame clic
        </button>

    </>


    
  )
}

export default App