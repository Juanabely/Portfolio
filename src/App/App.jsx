import React from 'react'
import './app.css'
import Nav from '../Nav/Nav'
import Header from '../Header/Header'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Projects from '../Projects/Projects'
import VismeForm from '../Contact/VismeForm'
import Skills from '../Skills/Skills'
import { skillData } from '../assets/skills'


function App() {

  const skill = skillData.map((item) => (
    <Skills
      key={item.id}
      name={item.name}
      url={item.imageurl}
      price={item.price}
      describe={item.describe}
      
    />
  ));

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
      <Route path='/skills' element={
        <>
        <div className='skill'>{skill}</div>
        </>
        }/>  
      
    
    </Routes>
    </div>
    </BrowserRouter>
    </div>
    
    </>
  )
}

export default App