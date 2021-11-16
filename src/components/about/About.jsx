import "./about.css";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="aboutLeft">
        <h1 className="aboutTitle" >About</h1>
        <p className="aboutP">  Hello, I am a full-stack software developer with a passion to learn, problem solve, and create.<br></br> Currently, I am working as a testing developer at Moica Inc. My team is primarily working on serverside testing using graphQL and end-to-end testing using playWrite. We were also involved with useing Storybook to build UI components for developing and testing.</p>
        <p className="aboutP"></p>
      </div>
      <div className="aboutRight">
        <div className="aboutImageContainer">
          <img className="bunny" src='assets/bunnyFlippedNB.png' alt=""/>
        </div>
      </div>
    </div>
  );
}

export default About;
