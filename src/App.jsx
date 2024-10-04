import Siderbar from './components/Siderbar'
import Player from './components/Player'
import Display from './components/Display'

const App = () => {
  return (
    <div className='h-screen bg-black'>
      <div className='h-[95%] flex'>
        <Siderbar />
        <Display />
      </div>
      <Player />
    </div>
  )
}

export default App
