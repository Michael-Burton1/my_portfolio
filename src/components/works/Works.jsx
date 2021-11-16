import { useState } from "react";
import "./works.css";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/javaScriptLogo.png",
      title: "andCHILL",
      desc:
        'A "movie tinder" app that allows two users to find movies that they both want to watch. Finally, movie night is chill.',
      img:
        "./assets/andchill1.png",
    },
    {
      id: "2",
      icon: "./assets/cSharpIcon.png",
      title: "Goldblumin'",
      desc:
        "An app that generates advice as if from the mind of Jeff Goldblum.",
      img:
        "./assets/advice.png",
    },
    {
      id: "3",
      icon: "./assets/apiLogo.png",
      title: "Restful API w/ swagger",
      desc:
        "A restful API written in C# with full CRUD and Swagger. What more could you ask for?",
      img:
        "./assets/swagger.png",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  
  return (
    <div className="works" id="works">
      <h1 className='worksTitle'>Projects</h1>
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="worksContainer">
            <div className="item">
              <div className="worksLeft">
                <div className="worksLeftContainer">
                  <div className="worksImgContainer">
                    <img className='iconImg' src={d.icon} alt="" />
                  </div>
                  <h2 className='projectTitle' >{d.title}</h2>
                  <p className='projectDesc' >{d.desc}</p>
                  <span className='link' >Projects</span>
                </div>
              </div>
              <div className="worksRight">
                <img className='worksRightImg'
                  src={d.img} alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}