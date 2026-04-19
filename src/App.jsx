import { useState } from 'react'
import Button from './components/Button.jsx'
import Input from './components/Input.jsx'
import './styles/App.css'


function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const [schoolName, setSchoolName] = useState('');
  const [titleOfStudy, setTitleOfStudy] = useState('');
  const [dateFrom, setDateFrom] = useState('');
  const [dateUntil, setDateUntil] = useState('');

  const [companyName, setCompanyName] = useState('');
  const [position, setPosition] = useState('');
  const [responsibilities, setResponsibilities] = useState('');
  const [companyDateFrom, setCompanyDateFrom] = useState('');
  const [companyDateUntil, setCompanyDateUntil] = useState('');

  const [personalSubmit, setPersonalSubmit] = useState(false);
  const [educationSubmit, setEducationSubmit] = useState(false);
  const [experienceSubmit, setExperienceSubmit] = useState(false);

  function onNameChange(e) {
    setName(e.target.value);
  }

  function onEmailChange(e) {
    setEmail(e.target.value);
  }

  function onPhoneChange(e) {
    setPhone(e.target.value);
  }

  function onSchoolNameChange(e) {
    setSchoolName(e.target.value);
  }

  function onTitleOfStudyChange(e) {
    setTitleOfStudy(e.target.value);
  }

  function onDateFromChange(e) {
    setDateFrom(e.target.value);
  }

  function onDateUntilChange(e) {
    setDateUntil(e.target.value);
  }

  function onCompanyNameChange(e) {
    setCompanyName(e.target.value);
  }

  function onPositionChange(e) {
    setPosition(e.target.value);
  }

  function onResponsibilitiesChange(e) {
    setResponsibilities(e.target.value);
  }

  function onCompanyDateFromChange(e) {
    setCompanyDateFrom(e.target.value);
  }

  function onCompanyDateUntilChange(e) {
    setCompanyDateUntil(e.target.value);
  }

  return (
    <>
      <div className='header'>
        <h1>CV Project</h1>
      </div>

      <section>
          <h2>
          Personal Information
          </h2>
          <div>
            {personalSubmit ? <p>{name}</p> : <Input label="Name" value={name} onChange={onNameChange} />}        
            {personalSubmit ? <p>{email}</p> : <Input label="Email" value={email} onChange={onEmailChange} />}          
            {personalSubmit ? <p>{phone}</p> : <Input label="Phone" value={phone} onChange={onPhoneChange} />}          
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
          {educationSubmit ? <p>{schoolName}</p> : <Input label="School Name" value={schoolName} onChange={onSchoolNameChange} />}
          {educationSubmit ? <p>{titleOfStudy}</p> : <Input label="Title of Study" value={titleOfStudy} onChange={onTitleOfStudyChange} />}
          {educationSubmit ? <p>{dateFrom}</p> : <Input label="Date From" value={dateFrom} onChange={onDateFromChange} />}
          {educationSubmit ? <p>{dateUntil}</p> : <Input label="Date Until" value={dateUntil} onChange={onDateUntilChange}/>}
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
          {experienceSubmit ? <p>{companyName}</p> : <Input label="Company Name" value={companyName} onChange={onCompanyNameChange} />}
          {experienceSubmit ? <p>{position}</p> : <Input label="Position" value={position} onChange={onPositionChange}/>}
          {experienceSubmit ? <p>{responsibilities}</p> : <Input label="Responsibilities" value={responsibilities} onChange={onResponsibilitiesChange} />}
          {experienceSubmit ? <p>{companyDateFrom}</p> : <Input label="Date From" value={companyDateFrom} onChange={onCompanyDateFromChange} />}
          {experienceSubmit ? <p>{companyDateUntil}</p> : <Input label="Date Until" value={companyDateUntil} onChange={onCompanyDateUntilChange} />}
        </div>
        <Button label="Submit" onClick={() => setExperienceSubmit(true)} disabled={experienceSubmit} />
        <Button label="Edit" onClick={() => setExperienceSubmit(false)} disabled={!experienceSubmit} />
      </section>
    </>
  );
}

export default App;