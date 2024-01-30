function Bedroom (props) {
  return (
    <>
    <div className="bedroom" id={`bedroom-${props.numBed}`}>
      <p>Bedroom {props.numBed}</p>
      </div>
    </>
  )
}

// Must export the component's function (or class)
export default Bedroom