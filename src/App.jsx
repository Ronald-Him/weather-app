import './App.css'
import Header from './components/header'
import Home from './pages/Home'
import News from './pages/News'
import LiveCameras from './pages/LiveCameras'
import Photos from './pages/Photos'
import Contact from './pages/Contact'
function App() {
  return (
    <>
    <div className='App bg-[#1e202b] w-full h-screen'>
      <Header/> 
      <Home/>
      <News/>
      <LiveCameras/>
      <Photos/>
      <Contact/>
    </div>

    </>
  )
}

export default App
