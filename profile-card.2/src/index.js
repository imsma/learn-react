import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="./SMA-banner-1.png" alt="" />;
}

function Intro() {
  return (
    <div>
      <h1>Im SMA</h1>
      <p>
        Full-stack web developer and teacher at Udemy. When not coding or
        preparing a course, I like to play board games, to cook (and eat), or to
        just enjoy the Portuguese sun at the beach.
      </p>
    </div>
  );
}

// With  data list
function SkillList() {
  const skills = [
    {
      skillName: "HTML + CSS",
      rating: 5,
    },
    {
      skillName: "JavaScript",
      rating: 4,
    },
    {
      skillName: "PHP",
      rating: 2,
    },
    {
      skillName: "React",
      rating: 5,
    },
    {
      skillName: "Sevelet",
      rating: 1,
    },
    {
      skillName: "Node.js",
      rating: 3,
    },
  ];

  return (
    <div className="skill-list">
      {skills &&
        skills.map((skill) => <Skill skill={skill} key={skill.skillName} />)}
    </div>
  );
}

function Skill(props) {
  const rating = props.skill.rating;
  let color = "#000";
  let emoji = "";

  if (rating < 5) {
    color = "#f00";
  }

  switch (rating) {
    case 5:
      color = "lightgreen";
      emoji = "💪";
      break;
    case 4:
      color = "lightblue";
      emoji = "🙂";
      break;
    case 3:
      color = "cyan";
      emoji = "🤨";
      break;
    case 2:
      color = "lightyellow";
      emoji = "😠";
      break;
    case 1:
      color = " red";
      emoji = "😡";
      break;
    default:
      color = "#fff";
  }

  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{props.skill.skillName}</span>
      <span>{emoji}</span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
