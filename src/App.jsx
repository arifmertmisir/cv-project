import { useState } from 'react'
import Button from './components/Button.jsx'
import Input from './components/Input.jsx'


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

  const [submit, setIsSubmitted] = useState(false);

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

  function onSubmit() {
    setIsSubmitted(true);
  }

  function onEdit() {
    setIsSubmitted(false);
  }

  return (
    <>
      <div>
        <h1>CV Project</h1>
      </div>

      <section>
          <h2>
          Personal Information
          </h2>
          <Input label="Name" value={name} onChange={onNameChange} disabled={submit}/>
          <Input label="Email" value={email} onChange={onEmailChange} disabled={submit} />
          <Input label="Phone" value={phone} onChange={onPhoneChange} disabled={submit} />
          <br />
      </section>
      <hr />  
      <section>
        <h2>
          Education
        </h2>
        <Input label="School Name" value={schoolName} onChange={onSchoolNameChange} disabled={submit}/>
        <Input label="Title of Study" value={titleOfStudy} onChange={onTitleOfStudyChange} disabled={submit}/>
        <Input label="Date From" value={dateFrom} onChange={onDateFromChange} disabled={submit}/>
        <Input label="Date Until" value={dateUntil} onChange={onDateUntilChange} disabled={submit}/>
        <br />
      </section>   
      <hr />  
      <section>   
        <h2>
          Professional Experience
        </h2>
        <Input label="Company Name" value={companyName} onChange={onCompanyNameChange} disabled={submit}/>
        <Input label="Position" value={position} onChange={onPositionChange} disabled={submit}/>
        <Input label="Responsibilities" value={responsibilities} onChange={onResponsibilitiesChange} disabled={submit}/>
        <Input label="Date From" value={companyDateFrom} onChange={onCompanyDateFromChange} disabled={submit}/>
        <Input label="Date Until" value={companyDateUntil} onChange={onCompanyDateUntilChange} disabled={submit}/>
        <br />
        <br />
        <Button label="Submit" onClick={onSubmit} />
        <Button label="Edit" onClick={onEdit}/>
      </section>
    </>
  );
}

export default App;