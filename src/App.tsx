import { useState } from "react";
import Button from "./components/Button.tsx";
import TextInput from "./components/TextInput.tsx";
import EmailInput from "./components/EmailInput.tsx";
import DateInput from "./components/DateInput.tsx";
import "./styles/App.css";

type Personal = {
  name:string,
  email:string,
  phone:string 
}

type Education = {
  schoolName:string,
  titleOfStudy:string,
  dateFrom:string,
  dateUntil:string,
}

type Experience = {
  companyName:string,
  position:string,
  responsibilities:string,
  companyDateFrom:string,
  companyDateUntil:string,
}

export default function App() {
  const [personal, setPersonal] = useState<Personal>({name: "", email: "", phone: ""  });
  const [education, setEducation] = useState<Education>({
    schoolName: "",
    titleOfStudy: "",
    dateFrom: "",
    dateUntil: "",
  });
  const [experience, setExperience] = useState<Experience>({
    companyName: "",
    position: "",
    responsibilities: "",
    companyDateFrom: "",
    companyDateUntil: "",
  });

  const [personalSubmit, setPersonalSubmit] = useState<boolean>(false);
  const [educationSubmit, setEducationSubmit] = useState<boolean>(false);
  const [experienceSubmit, setExperienceSubmit] = useState<boolean>(false);

  const [emailError, setEmailError] = useState<string>("");
  const [phoneError, setPhoneError] = useState<string>("");
  const [educationDateError, setEducationDateError] = useState<string>("");
  const [companyDateError, setCompanyDateError] = useState<string>("");

  function handlePersonalChange(e: React.ChangeEvent<HTMLInputElement>):void {
    const { name, value } = e.target;
    setPersonal((prev:Personal):Personal => ({ ...prev, [name]: value }));
  }

  function handleEducationChange(e: React.ChangeEvent<HTMLInputElement>):void {
    const { name, value } = e.target;
    setEducation((prev:Education):Education => ({ ...prev, [name]: value }));
  }

  function handleExperienceChange(e: React.ChangeEvent<HTMLInputElement>):void {
    const { name, value } = e.target;
    setExperience((prev:Experience):Experience => ({ ...prev, [name]: value }));
  }

  function handlePersonalSubmit():void {
    if (!personal.email.includes("@")) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    const phoneRegex:RegExp = /^[0-9+\- ]+$/;
    if (!phoneRegex.test(personal.phone)) {
      setPhoneError("Please enter a valid phone number.");
      return;
    }

    setEmailError("");
    setPhoneError("");
    setPersonalSubmit(true);
  }

  function handleEducationSubmit():void {
    if (education.dateFrom > education.dateUntil) {
      setEducationDateError("Please enter a valid date.");
      return;
    }

    setEducationDateError("");
    setEducationSubmit(true);
  }

  function handleExperienceSubmit():void {
    if (experience.companyDateFrom > experience.companyDateUntil) {
      setCompanyDateError("Please enter a valid date.");
      return;
    }

    setCompanyDateError("");
    setExperienceSubmit(true);
  }

  return (
    <main>
      <div className="text-xl font-bold text-center">
        <h1>CV Project</h1>
      </div>

      <section className="text-center mb-2">
        <h2 className="font-bold text-sky-700">Personal Information</h2>
        <div className="flex flex-col items-center justify-center">
          {personalSubmit ? (
            <p>{personal.name}</p>
          ) : (
            <TextInput
              label="Name"
              name="name"
              value={personal.name}
              onChange={handlePersonalChange}
              required
            />
          )}
          {personalSubmit ? (
            <p>{personal.email}</p>
          ) : (
            <EmailInput
              label="Email"
              name="email"
              value={personal.email}
              onChange={handlePersonalChange}
              required
              error={emailError}
            />
          )}
          {personalSubmit ? (
            <p>{personal.phone}</p>
          ) : (
            <TextInput
              label="Phone"
              name="phone"
              value={personal.phone}
              onChange={handlePersonalChange}
              error={phoneError}
            />
          )}
        </div>
        <Button
          label="Submit"
          onClick={handlePersonalSubmit}
          disabled={personalSubmit}
        />
        <Button
          label="Edit"
          onClick={() => setPersonalSubmit(false)}
          disabled={!personalSubmit}
        />
      </section>
      <hr />
      <section className="text-center mb-2">
        <h2 className="font-bold text-sky-700">Education</h2>
        <div className="flex flex-col items-center justify-center">
          {educationSubmit ? (
            <p>{education.schoolName}</p>
          ) : (
            <TextInput
              label="School Name"
              name="schoolName"
              value={education.schoolName}
              onChange={handleEducationChange}
              required
            />
          )}
          {educationSubmit ? (
            <p>{education.titleOfStudy}</p>
          ) : (
            <TextInput
              label="Title of Study"
              name="titleOfStudy"
              value={education.titleOfStudy}
              onChange={handleEducationChange}
              required
            />
          )}
          {educationSubmit ? (
            <p>{education.dateFrom}</p>
          ) : (
            <DateInput
              label="Date From"
              name="dateFrom"
              value={education.dateFrom}
              onChange={handleEducationChange}
              required
              error={educationDateError}
            />
          )}
          {educationSubmit ? (
            <p>{education.dateUntil}</p>
          ) : (
            <DateInput
              label="Date Until"
              name="dateUntil"
              value={education.dateUntil}
              onChange={handleEducationChange}
              required
              error={educationDateError}
            />
          )}
        </div>
        <Button
          label="Submit"
          onClick={handleEducationSubmit}
          disabled={educationSubmit}
        />
        <Button
          label="Edit"
          onClick={() => setEducationSubmit(false)}
          disabled={!educationSubmit}
        />
      </section>
      <hr />
      <section className="text-center mb-2">
        <h2 className="font-bold text-sky-700">Professional Experience</h2>
        <div className="flex flex-col items-center justify-center">
          {experienceSubmit ? (
            <p>{experience.companyName}</p>
          ) : (
            <TextInput
              label="Company Name"
              name="companyName"
              value={experience.companyName}
              onChange={handleExperienceChange}
              required
            />
          )}
          {experienceSubmit ? (
            <p>{experience.position}</p>
          ) : (
            <TextInput
              label="Position"
              name="position"
              value={experience.position}
              onChange={handleExperienceChange}
              required
            />
          )}
          {experienceSubmit ? (
            <p>{experience.responsibilities}</p>
          ) : (
            <TextInput
              label="Responsibilities"
              name="responsibilities"
              value={experience.responsibilities}
              onChange={handleExperienceChange}
              required
            />
          )}
          {experienceSubmit ? (
            <p>{experience.companyDateFrom}</p>
          ) : (
            <DateInput
              label="Date From"
              name="companyDateFrom"
              value={experience.companyDateFrom}
              onChange={handleExperienceChange}
              required
              error={companyDateError}
            />
          )}
          {experienceSubmit ? (
            <p>{experience.companyDateUntil}</p>
          ) : (
            <DateInput
              label="Date Until"
              name="companyDateUntil"
              value={experience.companyDateUntil}
              onChange={handleExperienceChange}
              required
              error={companyDateError}
            />
          )}
        </div>
        <Button
          label="Submit"
          onClick={handleExperienceSubmit}
          disabled={experienceSubmit}
        />
        <Button
          label="Edit"
          onClick={() => setExperienceSubmit(false)}
          disabled={!experienceSubmit}
        />
      </section>
    </main>
  );
}
