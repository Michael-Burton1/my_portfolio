import "./testimonials.css";


const Testimonials = () => {
  const data = [
    {
      id: 1,
      name: "Seth Medeiros",
      title: "Software Developer at Moica INC",
      img:"https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/247452038_10217143156689774_7535865124869245748_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=TzGWaVnWRoUAX87Smd5&_nc_ht=scontent-sea1-1.xx&oh=436d76e8ebb48bbbcf9c51f7db3bc801&oe=61B48621",
        // "?auto=compress&cs=tinysrgb&dpr=2&w=500",
      desc:
        "Michael has an exceptional ability for effectivly communicating his thoughts and intentions while debugging code"
    },
    {
      id: 2,
      name: "Marney Mallory",
      title: "Software Developer at Moica INC.",
      img:
        "https://media-exp1.licdn.com/dms/image/C5603AQFm4DQN4UqylA/profile-displayphoto-shrink_200_200/0/1630101069244?e=1643241600&v=beta&t=jpm_ktfVwlTCuapvPFJf2fClE1NxLISouJcPkqnXFW4",
      desc:
        "Michael is a natural born problem solver and an excellent communicator. He is super fun to work with and is a valuable addition to any team",
      featured: false,
    },
    {
      id: 3,
      name: "Isaac Moreno",
      title: "QA specialist at Moica INC",
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
