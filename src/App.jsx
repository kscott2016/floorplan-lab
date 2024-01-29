import './App.css'
import './Bedroom'
import './Kitchen'
import Bedroom from './Bedroom'

function App() {
  return (
    <div>
      <Bedroom numBed={1}/>
      <Kitchen />
      <Bedroom numBed={2}/>
      <Bedroom numBed={3}/>
      
    </div>
  )
}

export default App