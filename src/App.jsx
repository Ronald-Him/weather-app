import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
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
      <Router>
        <Header/> 
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/news' element={<News/>}/>
          <Route path='/live-camera' element={<LiveCameras/>}/>
          <Route path='/photos' element={<Photos/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </Router>
    </div>

    </>
  )
}

export default App
