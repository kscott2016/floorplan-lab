import Oven from './Oven'
import Sink from './Sink'

const Kitchen = () => {
  return ( 
    <>
      <div>
        <p>Kitchen</p>
        <div>
        <Oven />
        <Sink/>
        </div>
      </div>
    </>
  );
}

// Must export the component's function (or class)
export default Kitchen