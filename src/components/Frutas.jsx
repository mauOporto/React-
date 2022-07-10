

const Frutas = (props) => {

    

  return (
    <div>
        <ul>
            {props.frutasApp.map((frutas, index) => (
                <li key={index}>{frutas}</li>
            ))}
        </ul>
    </div>
  )
}

export default Frutas