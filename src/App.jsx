import './App.css'
import Kitchen from './Kitchen'
import Bedroom from './Bedroom'
import Bath from './Bath'
import Livingroom from './Livingroom'

function App() {
  return (
    <div>
      <Bedroom numBed={1}/>
      <Kitchen />
      <Bedroom numBed={2}/>
      <Livingroom />
      <Bath size="half"/>
      <Bedroom numBed={3}/>
      <Bath size="full"/>
      
    </div>
  )
}

export default App