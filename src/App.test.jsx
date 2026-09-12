import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import App from "./App.jsx";

/**Vitest → test runner (test çalıştırıcısı).
 * describe, it, expect gii temel test yazma araçlarını ve testleri çalıştırma mekanizmasını sağlıyor. Bu, "motoru" gibi düşünebilirsin.
 * jsdom → sahte bir tarayıcı ortamı simüle ediyor. Normalde testler Node.js'te çalışıyor, ama Node.js'te document, window gibi tarayıcıya özgü şeyler yok — jsdom, bunları taklit ederek React component'lerinin (ki onlar DOM'a ihtiyaç duyuyor) test ortamında "sanki gerçek bir tarayıcıdaymış gibi" çalışmasını sağlıyor.
 * React Testing Library (RTL) + jest-dom → React component'lerini render edip (render()), DOM'da bir şeyleri aramanı (screen.getByText()) ve doğrulamanı (.toBeInTheDocument(), .toHaveValue()) sağlayan araçlar.
 * */

describe("App", () => {
  it("renders headline", () => {
    render(<App />);
    //screen.debug();
    expect(
      screen.getByRole("heading", { name: /cv project/i }),
    ).toBeInTheDocument();
  });

  it("renders name field", () => {
    render(<App />);
    expect(screen.getByLabelText("Name")).toBeInTheDocument();
  });
});
