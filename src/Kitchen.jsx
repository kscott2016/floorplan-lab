import './Oven'
import './Sink'

function Kitchen (props) {
  return (
    <>
    <div>
        <h3>Kitchen</h3>
        <Oven />
      </div>
    </>
  )
}

// Must export the component's function (or class)
export default Kitchen