import { useState } from 'react'
import Button from './components/Button.jsx';
import TextInput from './components/TextInput.jsx';
import EmailInput from './components/EmailInput.jsx';
import DateInput from './components/DateInput.jsx';
import './styles/App.css'



export default function App() {
  /* 
  every state causes a rerender of the dom. try to safe states as much as possible 
  on top you have now related data stuffed together
  */
  const [personal, setPersonal] = useState({ name: '', email: '', phone: '' });
  const [education, setEducation] = useState({ schoolName: '', titleOfStudy: '', dateFrom: '', dateUntil: '' });
  const [experience, setExperience] = useState({ companyName: '', position: '', responsibilities: '', companyDateFrom: '', companyDateUntil: '' });

  const [personalSubmit, setPersonalSubmit] = useState(false);
  const [educationSubmit, setEducationSubmit] = useState(false);
  const [experienceSubmit, setExperienceSubmit] = useState(false);

  function handlePersonalChange(e) {
    const { name, value } = e.target;
    setPersonal((prev) => ({ ...prev, [name]: value }));
  }

  function handleEducationChange(e) {
    const { name, value } = e.target;
    setEducation((prev) => ({ ...prev, [name]: value }));
  }

  function handleExperienceChange(e) {
    const { name, value } = e.target;
    setExperience((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <main>
      <div className='header'>
        <h1>CV Project</h1>
      </div>

      <section>
        <h2>
          Personal Information
        </h2>
        <div>
          {personalSubmit ? <p>{personal.name}</p> : <TextInput label="Name" name="name" value={personal.name} onChange={handlePersonalChange} />}
          {personalSubmit ? <p>{personal.email}</p> : <EmailInput label="Email" name="email" value={personal.email} onChange={handlePersonalChange} />}
          {personalSubmit ? <p>{personal.phone}</p> : <TextInput label="Phone" name="phone" value={personal.phone} onChange={handlePersonalChange} />}
        </div>
        <Button label="Submit" onClick={() => setPersonalSubmit(true)} disabled={personalSubmit} />
        <Button label="Edit" onClick={() => setPersonalSubmit(false)} disabled={!personalSubmit} />
      </section>
      <hr />  
      <section>
        <h2>
          Education
        </h2>
        <div>
          {educationSubmit ? <p>{education.schoolName}</p> : <TextInput label="School Name" name="schoolName" value={education.schoolName} onChange={handleEducationChange} required />}
          {educationSubmit ? <p>{education.titleOfStudy}</p> : <TextInput label="Title of Study" name="titleOfStudy" value={education.titleOfStudy} onChange={handleEducationChange} required />}
          {educationSubmit ? <p>{education.dateFrom}</p> : <DateInput label="Date From" name="dateFrom" value={education.dateFrom} onChange={handleEducationChange} required />}
          {educationSubmit ? <p>{education.dateUntil}</p> : <DateInput label="Date Until" name="dateUntil" value={education.dateUntil} onChange={handleEducationChange} required />}
        </div>
        <Button label="Submit" onClick={() => setEducationSubmit(true)} disabled={educationSubmit} />
        <Button label="Edit" onClick={() => setEducationSubmit(false)} disabled={!educationSubmit}/>
      </section>   
      <hr />  
      <section>   
        <h2>
          Professional Experience
        </h2>
        <div>
          {experienceSubmit ? <p>{experience.companyName}</p> : <TextInput label="Company Name" name="companyName" value={experience.companyName} onChange={handleExperienceChange} required />}
          {experienceSubmit ? <p>{experience.position}</p> : <TextInput label="Position" name="position" value={experience.position} onChange={handleExperienceChange} required />}
          {experienceSubmit ? <p>{experience.responsibilities}</p> : <TextInput label="Responsibilities" name="responsibilities" value={experience.responsibilities} onChange={handleExperienceChange} required />}
          {experienceSubmit ? <p>{experience.companyDateFrom}</p> : <DateInput label="Date From" name="companyDateFrom" value={experience.companyDateFrom} onChange={handleExperienceChange} required />}
          {experienceSubmit ? <p>{experience.companyDateUntil}</p> : <DateInput label="Date Until" name="companyDateUntil" value={experience.companyDateUntil} onChange={handleExperienceChange} required />}
        </div>
        <Button label="Submit" onClick={() => setExperienceSubmit(true)} disabled={experienceSubmit} />
        <Button label="Edit" onClick={() => setExperienceSubmit(false)} disabled={!experienceSubmit} />
      </section>
    </main>
  );
}