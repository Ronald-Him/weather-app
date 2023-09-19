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
          <Route path='/src/pages/News.jsx' element={<News/>}/>
          <Route path='/src/pages/LiveCameras.jsx' element={<LiveCameras/>}/>
          <Route path='/src/pages/Photos.jsx' element={<Photos/>}/>
          <Route path='/src/pages/Contact.jsx' element={<Contact/>}/>
        </Routes>
      </Router>
    </div>

    </>
  )
}

export default App
