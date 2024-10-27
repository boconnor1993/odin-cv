import { useState } from 'react'
import './App.css'

function App() {
  return (
    <>
      <nav>
        <h2>CV Generator</h2>
      </nav>
      <div className='container'>

        <div className='input-container'>
          <div className='general-info'>
            <h2>General Information</h2>
            <div className='general-info-container'>
              
            </div>
          </div>

          <div className='experience-info'>
            <h2>Professional Experience</h2>
            <div className='experience-info-container'></div>
            <div className='button-container'>
              <button>Add New</button>
            </div>
          </div>

          <div className='education-info'>
            <h2>Education</h2>
            <div className='education-info-container'></div>
            <div className='button-container'>
              <button>Add New</button>
            </div>
          </div>      
        </div>
        <div className='output-container'>
          <div className='cv-page'>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
