import React from 'react'
import './app.css'
import Nav from '../Nav/Nav'
import Header from '../Header/Header'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Projects from '../Projects/Projects'
import VismeForm from '../Contact/VismeForm'


function App() {

  return (
    <>
    <div className='holder'>
    <BrowserRouter>
    <div className='nav-side'>
        <Nav/>
    </div>
    <div className='body-side'>
    <Routes>
    
      <Route path='/' element={<Header/>}/>  
      <Route path='/projects' element={<Projects/>}/>  
      <Route path='/contact' element={<VismeForm/>}/>  
      
    
    </Routes>
    </div>
    </BrowserRouter>
    </div>
    
    </>
  )
}

export default App