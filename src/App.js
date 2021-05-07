import Intro from './pages/intro'
import './App.scss'
const React = window.React
function App () {
  return (
    <div className='container'>
      <div className='content'>
        <main className='main-view'>
          <div className='detail'>
            <Intro />
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
