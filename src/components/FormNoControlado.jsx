import { useRef } from "react"

const FormNoControlado = () => {

  const formulario = useRef(null)
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const datos = new FormData(formulario.current);

    const objetoDatos = Object.fromEntries([...datos.entries()]);
    console.log(objetoDatos)

    const { todoDescripcion, todoEstado, todoName } = objetoDatos;
    if(!todoDescripcion.trim()) {
      console.log('No, esta vacio')
      return
    }

    console.log('paso validaciones')
  }

  return (
      <>
          <h2>No controlado</h2>

          <form ref={formulario} onSubmit={handleSubmit}>
            <input 
            className="form-control mb-2"
            name="todoName"
            type="text"
            placeholder="Ingrese todo" 
            defaultValue='Tarea #01'/>

            <textarea
               name="todoDescripcion"
               className="form-control mb-2"
               placeholder="Ingrese descripcion"
               defaultValue='Descripcion tarea #01'
            />

            <select 
            name="todoEstado"
            className="form-control mb-2"
            defaultValue='Pendiente'>

              <option value="pendiente">Pendiente</option>
              <option value="completada">Completada</option>

            </select>

            <button className="btn btn-info">Agregar</button>
            
          </form>

      </>
  )
}

export default FormNoControlado