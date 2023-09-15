import './App.css'
import Header from './components/header'
import Home from './pages/Home'
import SearchBar from './components/SearchBar'


function App() {
  return (
    <>
    <div className='App bg-[#1e202b] w-full h-screen'>
      <Header/> 
      <Home/>
      <SearchBar/>
    </div>

    </>
  )
}

export default App
