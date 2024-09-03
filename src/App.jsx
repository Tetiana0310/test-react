import Feedback from "./components/Feedback/Feedback";
import Profile from "./components/Profile/profile";
import userData from "./userData.json";
import Options from "./components/Options/Options";

const App = () => {
  return (
    <>
      {" "}
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />{" "}
      <button onClick={() => alert("You clicked me!")}>Click Me</button>
      <Options></Options>
      {/* {
	good: 0,
	neutral: 0,
	bad: 0
} */}
      <Feedback></Feedback>
    </>
  );
};

export default App;
