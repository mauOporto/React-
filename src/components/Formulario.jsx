import { useState } from "react"


const Formulario = () => {
   
  const [todo, setTodo] = useState({
    todoName: '',
    todoDescripcion: '',
    todoEstado: 'Pendiente',
    todoCheck: false,
  })

  const [error, setError] = useState(false)

    const handleSubmit = e => {
      e.preventDefault()

      const {todoDescripcion, todoName} = todo;

      // Pequena validacion
      if (!todoName.trim() || !todoDescripcion.trim()) {
        console.log('Los campos estan vacios')
        setError(true);
        return;
      }else{
        setError(false)
      }

    }

    const PintarError = () => (
      <div className="aler alert-danger">Todos los campos son obligatorios</div>
    )

    const handleChange = (e) => {
      console.log(e.target.value)

      // setTodo({
      //   ...todo,
      //   [e.target.name]:
      //      e.target.type === 'checkbox'
      //          ? e.target.checked
      //          : e.target.value,
      // })

      const {name, value, checked, type} = e.target;

      setTodo({
        ...todo,
        [name]: type === 'checkbox' ? checked : value,
      })
    }

  return (
    <div className="container mt-2">

      {error && <PintarError/>}

    
        <form onSubmit={handleSubmit}>
            <input 
            className="form-control mb-2"
            name="todoName"
            type="text"
            placeholder="Ingrese todo" 
            value={todo.todoName}
            onChange={handleChange}
            />

            <textarea
               name="todoDescripcion"
               className="form-control mb-2"
               placeholder="Ingrese descripcion"
               onChange={handleChange}
               value={todo.todoDescripcion}
               />

            <select 
            name="todoEstado"
            className="form-control mb-2"
            onChange={handleChange}
            value={todo.todoEstado}
            >

              <option value="pendiente">Pendiente</option>
              <option value="completada">Completada</option>

            </select>

            <div className="form-check">
              <input 
              className="form-check-input"
              type="checkbox"
              id="flexCheckDefault"
              checked={todo.todoCheck}
              onChange={handleChange}
              name='todoCheck'
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Dar prioridad
              </label>
            </div>

            <button className="btn btn-info" type="submit">Agregar</button>
            
          </form>
    </div>
  )
}

export default Formulario