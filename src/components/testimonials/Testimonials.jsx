import "./testimonials.css";


const Testimonials = () => {
  const data = [
    {
      id: 1,
      name: "Seth Medeiros",
      title: "Software Engineer at RsMedical",
      img:"./assets/ sethHeadshot.png",
      desc:
        "Michael has an exceptional ability for effectivly communicating his thoughts and intentions while debugging code"
    },
    {
      id: 2,
      name: "Marney Mallory",
      title: "web designer with Great Things LLC",
      img:
        "./assets/marneyHeadshot.png",
      desc:
        "Michael is a natural born problem solver and an excellent communicator. He is super fun to work with and is a valuable addition to any team",
      featured: false,
    },
    {
      id: 3,
      name: "Isaac Moreno",
      title: "software dev at The Outbound",
      img:
        "https://dhuh3lqp0wlh3.cloudfront.net/fc/616480a9fd11e6b44a136e41ecc81f/house-sitter-isaac-moreno-salem-9ecdb084.jpg",
      desc:
        "Michael has a great knack for quickly understanding application architectural structures and uses this to his advantage to consider app edge cases when developing  ",
    }
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1 className='testimonialTitle' >Testimonials</h1>
      <div className="testimonialContainer">
        {data.map((d) =>(
          <div className={d.featured ? "testimonialCard featured" : "testimonialCard"}>
            <div className="cardTop">
            <img
                  className="user"
                  src={d.img}
                  alt=""
                />
            </div>
            <div className="cardCenter">
              {d.desc}
            </div>
            <div className="cardBottom">
              <h3 className='userName' >{d.name}</h3>
              <h4 className='userTitle'>{d.title}</h4>
            </div>
          </div>
        ))}  
      </div>
    </div>
  );
}

export default Testimonials;
