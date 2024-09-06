import Feedback from "./components/Feedback/Feedback";

import Options from "./components/Options/Options";
import { useState } from "react";

export default function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const updateFeedback = (feedbackType) => {
    setFeedback((prev) => ({
      ...prev,
      [feedbackType]: prev[feedbackType] + 1,
    }));
  };

  const { good, neutral, bad } = feedback;
  const totalFeedback = good + neutral + bad;

  return (
    <>
      <Options updateFeedback={updateFeedback}></Options>

      <Feedback feedback={feedback} total={totalFeedback}></Feedback>
    </>
  );
}
