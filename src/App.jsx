import { useState } from 'react'
import './App.css'
import GeneralInfo from './components/GeneralInfo'
import ExperienceInfo from './components/ExperienceInfo'
import EducationInfo from './components/EducationInfo'

function App() {
  return (
    <>
      <nav>
        <h2>CV Generator</h2>
      </nav>
      <div className='container'>

        <div className='input-container'>
          <GeneralInfo />
          <ExperienceInfo />
          <EducationInfo />     
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
