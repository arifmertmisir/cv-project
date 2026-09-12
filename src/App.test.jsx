import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import userEvent from "@testing-library/user-event";
import App from "./App.jsx";

/**Vitest → test runner (test çalıştırıcısı).
 * describe, it, expect gii temel test yazma araçlarını ve testleri çalıştırma mekanizmasını sağlıyor. Bu, "motoru" gibi düşünebilirsin.
 * jsdom → sahte bir tarayıcı ortamı simüle ediyor. Normalde testler Node.js'te çalışıyor, ama Node.js'te document, window gibi tarayıcıya özgü şeyler yok — jsdom, bunları taklit ederek React component'lerinin (ki onlar DOM'a ihtiyaç duyuyor) test ortamında "sanki gerçek bir tarayıcıdaymış gibi" çalışmasını sağlıyor.
 * React Testing Library (RTL) + jest-dom → React component'lerini render edip (render()), DOM'da bir şeyleri aramanı (screen.getByText()) ve doğrulamanı (.toBeInTheDocument(), .toHaveValue()) sağlayan araçlar.
 * */

const personal = {
  name: "Mert",
  email: "mert@testmail.com",
  phone: "+49 000 000 00 00",
};

const education = {
  schoolName: "BAU",
  titleOfStudy: "Computer Engineering",
  dateFrom: "2020-07-01",
  dateUntil: "2022-07-01",
};

const experience = {
  companyName: "Ikuku IT-Consulting",
  position: "Software Developer and IT-Consultant",
  responsibilities:
    "Migration of the Liferay portlets to a new Liferay platform",
  dateFrom: "2022-11-01",
  dateUntil: "2026-03-31",
};

describe("App", () => {
  it("renders CV Project header", () => {
    render(<App />);
    expect(
      screen.getByRole("heading", { name: /cv project/i }),
    ).toBeInTheDocument();
  });

  it("renders Personal Information header", () => {
    render(<App />);
    expect(
      screen.getByRole("heading", { name: /personal information/i }),
    ).toBeInTheDocument();
  });

  it("renders Personal Information field inputs", async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.type(screen.getByLabelText("Name"), personal.name);
    await user.type(screen.getByLabelText("Email"), personal.email);
    await user.type(screen.getByLabelText("Phone"), personal.phone);

    const submitButtons = screen.getAllByRole("button", { name: /submit/i });
    await user.click(submitButtons[0]);

    expect(screen.getByText(personal.name)).toBeInTheDocument();
    expect(screen.getByText(personal.email)).toBeInTheDocument();
    expect(screen.getByText(personal.phone)).toBeInTheDocument();
  });

  it("renders Education header", () => {
    render(<App />);
    expect(
      screen.getByRole("heading", { name: /education/i }),
    ).toBeInTheDocument();
  });

  it("renders Education field inputs", async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.type(screen.getByLabelText("School Name"), education.schoolName);
    await user.type(
      screen.getByLabelText("Title of Study"),
      education.titleOfStudy,
    );
    await user.type(
      screen.getAllByLabelText(/date From/i)[0],
      education.dateFrom,
    );
    await user.type(
      screen.getAllByLabelText(/date until/i)[0],
      education.dateUntil,
    );

    const submitButtons = screen.getAllByRole("button", { name: /submit/i });
    await user.click(submitButtons[1]);

    expect(screen.getByText(education.schoolName)).toBeInTheDocument();
    expect(screen.getByText(education.titleOfStudy)).toBeInTheDocument();
    expect(screen.getByText(education.dateFrom)).toBeInTheDocument();
    expect(screen.getByText(education.dateUntil)).toBeInTheDocument();
  });

  it("renders Professional Experience header", () => {
    render(<App />);
    expect(
      screen.getByRole("heading", { name: /professional experience/i }),
    ).toBeInTheDocument();
  });

  it("renders Experience field inputs", async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.type(
      screen.getByLabelText(/company name/i),
      experience.companyName,
    );
    await user.type(screen.getByLabelText(/position/i), experience.position);
    await user.type(
      screen.getByLabelText(/responsibilities/i),
      experience.responsibilities,
    );
    await user.type(
      screen.getAllByLabelText(/date from/i)[1],
      experience.dateFrom,
    );
    await user.type(
      screen.getAllByLabelText(/date until/i)[1],
      experience.dateUntil,
    );

    const submissions = screen.getAllByRole("button", { name: "Submit" });
    await user.click(submissions[2]);

    expect(screen.getByText(experience.companyName)).toBeInTheDocument();
    expect(screen.getByText(experience.position)).toBeInTheDocument();
    expect(screen.getByText(experience.responsibilities)).toBeInTheDocument();
    expect(screen.getByText(experience.dateFrom)).toBeInTheDocument();
    expect(screen.getByText(experience.dateUntil)).toBeInTheDocument();
  });
});
