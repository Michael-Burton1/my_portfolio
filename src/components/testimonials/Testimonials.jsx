import "./testimonials.css";


const Testimonials = () => {
  const data = [
    {
      id: 1,
      name: "Seth Medeiros",
      title: "Software Developer at Moica INC",
      img:"https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/247452038_10217143156689774_7535865124869245748_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=sXJ-ofHw_owAX-Zk8Wc&_nc_ht=scontent-sea1-1.xx&oh=4623a9a0e54b78b904cfdeba6e773925&oe=619EC561",
        // "?auto=compress&cs=tinysrgb&dpr=2&w=500",
      desc:
        "His strong suit is communication, he is someone that you want to have on your team to keep projects running smoothly",
    },
    {
      id: 2,
      name: "Marney Mallory",
      title: "Software Developer at Moica INC.",
      img:
        "https://media-exp1.licdn.com/dms/image/C5603AQFm4DQN4UqylA/profile-displayphoto-shrink_200_200/0/1630101069244?e=1643241600&v=beta&t=jpm_ktfVwlTCuapvPFJf2fClE1NxLISouJcPkqnXFW4",
      desc:
        "He was easy to work with and you could tell that he really took the time to make sure everyone had a good understanding of the project everystep of the way ",
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
