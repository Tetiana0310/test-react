import Feedback from "./components/Feedback/Feedback";

import Options from "./components/Options/Options";
import { useState } from "react";

export default function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  // const updateFeedback = (feedbackType) => {

  return (
    <>
      <Options></Options>

      <Feedback></Feedback>
    </>
  );
}
