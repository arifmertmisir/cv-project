# 📄 CV Builder

An interactive CV/resume builder built with React and TypeScript — fill in your personal, education, and work experience details through a form, with live validation and an edit/submit flow for each section.

**[Live Demo](https://cv-project-azure.vercel.app/)**

## Features

- **Three-section form** — Personal Information, Education, and Professional Experience, each independently submittable and editable
- **Live validation** — email format and phone number validation on Personal Information; date range validation (from ≤ until) on Education and Experience sections
- **Submit/Edit toggle** — each section locks into a read-only summary view after submission, with an Edit button to unlock and revise
- **Reusable, typed form components** — `TextInput`, `EmailInput`, `DateInput`, and `Button` components with typed props, shared across all three sections
- **Fully typed with TypeScript** — form state (`Personal`, `Education`, `Experience`), event handlers, and component props are typed end-to-end
- **Styled with Tailwind CSS**

## Tech Stack

- **React** (Vite) + **TypeScript**
- **Tailwind CSS** — styling
- **Vitest** + **React Testing Library** — component testing

## Project Structure

```
src/
  components/      # reusable form components (Button, TextInput, EmailInput, DateInput)
  styles/          # global styles
  App.tsx          # main form logic — state, validation, and layout
  App.test.jsx     # component tests
  main.tsx         # app entry point
tests/
  setup.js         # test environment setup         # component tests
```

## How It Works

- **`App.tsx`** holds three separate pieces of state (`personal`, `education`, `experience`), each typed with its own interface, along with a "submitted" boolean per section to control the view/edit toggle.
- Each form field is a reusable, typed component (`TextInput`, `EmailInput`, `DateInput`) that receives its value, change handler, and optional validation error as props.
- On submit, each section runs its own validation (email format, phone format, date range) before locking the section and switching to a read-only summary view.

## Running Locally

```bash
git clone https://github.com/arifmertmisir/cv-project.git
cd cv-project
npm install
npm run dev
```

## Running Tests

```bash
npm run test
```
