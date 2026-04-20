import { useState } from 'react'
import Button from './components/Button.jsx';
import TextInput from './components/TextInput.jsx';
import EmailInput from './components/EmailInput.jsx';
import DateInput from './components/DateInput.jsx';
import './styles/App.css'



export default function App() {
  const [personal, setPersonal] = useState({ name: '', email: '', phone: '' });
  const [education, setEducation] = useState({ schoolName: '', titleOfStudy: '', dateFrom: '', dateUntil: '' });
  const [experience, setExperience] = useState({ companyName: '', position: '', responsibilities: '', companyDateFrom: '', companyDateUntil: '' });

  const [personalSubmit, setPersonalSubmit] = useState(false);
  const [educationSubmit, setEducationSubmit] = useState(false);
  const [experienceSubmit, setExperienceSubmit] = useState(false);

  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [educationDateError, setEducationDateError] = useState('');
  const [companyDateError, setCompanyDateError] = useState('');


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

  function handlePersonalSubmit() {
    if (!personal.email.includes('@')){
      setEmailError('Please enter a valid email address.'); 
      return;
    }

    const phoneRegex = /^[0-9+\- ]+$/;
    if (!phoneRegex.test(personal.phone)) {
      setPhoneError('Please enter a valid phone number.')
      return;
    }

    setEmailError('');
    setPhoneError('');
    setPersonalSubmit(true);
  }

  function handleEducationSubmit() {
    if(education.dateFrom > education.dateUntil) {
      setEducationDateError('Please enter a valid date.');
      return;
    }

    setEducationDateError('');
    setEducationSubmit(true);
  }

  function handleExperienceSubmit() {
    if(experience.companyDateFrom > experience.companyDateUntil) {
      setCompanyDateError('Please enter a valid date.');
      return;
    }

    setCompanyDateError('');
    setExperienceSubmit(true);
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
          {personalSubmit ? <p>{personal.name}</p> : <TextInput label="Name" name="name" value={personal.name} onChange={handlePersonalChange} required/>}
          {personalSubmit ? <p>{personal.email}</p> : <EmailInput label="Email" name="email" value={personal.email} onChange={handlePersonalChange} required error={emailError} />}
          {personalSubmit ? <p>{personal.phone}</p> : <TextInput label="Phone" name="phone" value={personal.phone} onChange={handlePersonalChange} error={phoneError}/>}
          <Button label="Submit" onClick={handlePersonalSubmit} disabled={personalSubmit} />
          <Button label="Edit" onClick={() => setPersonalSubmit(false)} disabled={!personalSubmit} />
        </div>

      </section>
      <hr />  
      <section>
        <h2>
          Education
        </h2>
        <div>
          {educationSubmit ? <p>{education.schoolName}</p> : <TextInput label="School Name" name="schoolName" value={education.schoolName} onChange={handleEducationChange} required />}
          {educationSubmit ? <p>{education.titleOfStudy}</p> : <TextInput label="Title of Study" name="titleOfStudy" value={education.titleOfStudy} onChange={handleEducationChange} required />}
          {educationSubmit ? <p>{education.dateFrom}</p> : <DateInput label="Date From" name="dateFrom" value={education.dateFrom} onChange={handleEducationChange} required error={educationDateError} />}
          {educationSubmit ? <p>{education.dateUntil}</p> : <DateInput label="Date Until" name="dateUntil" value={education.dateUntil} onChange={handleEducationChange} required error={educationDateError} />}
          <Button label="Submit" onClick={handleEducationSubmit} disabled={educationSubmit} />
          <Button label="Edit" onClick={() => setEducationSubmit(false)} disabled={!educationSubmit}/>
        </div>
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
          {experienceSubmit ? <p>{experience.companyDateFrom}</p> : <DateInput label="Date From" name="companyDateFrom" value={experience.companyDateFrom} onChange={handleExperienceChange} required error={companyDateError} />}
          {experienceSubmit ? <p>{experience.companyDateUntil}</p> : <DateInput label="Date Until" name="companyDateUntil" value={experience.companyDateUntil} onChange={handleExperienceChange} required error={companyDateError} />}
          <Button label="Submit" onClick={handleExperienceSubmit} disabled={experienceSubmit} />
          <Button label="Edit" onClick={() => setExperienceSubmit(false)} disabled={!experienceSubmit} />
        </div>
      </section>
    </main>
  );
}