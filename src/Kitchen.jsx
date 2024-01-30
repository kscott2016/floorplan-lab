import Oven from './Oven'
import Sink from './Sink'

const Kitchen = () => {
  return ( 
    <>
      <div class="kitchen-wrapper">
      <div className='appliances'>
        <Oven />
        <Sink/>
      </div>
      <div className="kitchen">
        <p>Kitchen</p>
      </div>
      </div>
    </>
  );
}

// Must export the component's function (or class)
export default Kitchen