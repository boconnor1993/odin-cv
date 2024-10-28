import { useState } from 'react'
import './App.css'
import GeneralInfo from './components/GeneralInfo'
import ExperienceInfo from './components/ExperienceInfo'
import EducationInfo from './components/EducationInfo'

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const [education, setEducation] = useState([
    { school: '', title: '', startdate: '', enddate: '' } // Initial empty entry
  ]);

  const [experience, setExperience] = useState([
    { company: '', position: '', responsibilities: '', startdate: '', enddate: '' }
  ]);


  return (
    <>
      <nav>
        <h2>CV Generator</h2>
      </nav>
      <div className='container'>
        <div className='input-container'>
        <GeneralInfo generalInfo={generalInfo} setGeneralInfo={setGeneralInfo} />
        <EducationInfo education={education} setEducation={setEducation} />
        <ExperienceInfo experience={experience} setExperience={setExperience} />
   
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
