import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState(1);

  function handlePrevious() {
    if (step <= 1) {
      return;
    }
    setStep(step - 1);
  }
  function handleNext() {
    if (step >= messages.length) {
      return;
    }
    setStep(step + 1);
  }

  return (
    <div className="steps">
      <div className="numbers">
        {messages.map((message, index) => {
          return (
            <div className={step >= index + 1 ? "active" : ""}>{index + 1}</div>
          );
        })}
      </div>

      <p className="message">
        Step {step}: {messages[step - 1]}
      </p>

      <div className="buttons">
        <button
          style={{ backgroundColor: "#7850f2", color: "#fff" }}
          onClick={handlePrevious}
        >
          Previous
        </button>
        <button
          style={{ backgroundColor: "#7850f2", color: "#fff" }}
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}
