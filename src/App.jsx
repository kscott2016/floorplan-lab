import './App.css'
import Kitchen from './Kitchen'
import Bedroom from './Bedroom'
import Bath from './Bath'
import Livingroom from './Livingroom'

function App() {
  return (
    <div className="wrapper">
      <div className='row1'>
      <div className="col1">
      <Bedroom numBed={1}/>
      <Bath size="full"/>
      </div>
      <Livingroom />
      <Kitchen />
      </div>
      <div className='row2'>
      <div className='col1'>
      <Bedroom numBed={2}/>
      </div>
      <Bath size="half"/>
      <Bedroom numBed={3}/>
      </div>
    </div>
  )
}

export default App