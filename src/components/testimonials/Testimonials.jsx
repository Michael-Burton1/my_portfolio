import "./testimonials.css";


const Testimonials = () => {
  const data = [
    {
      id: 1,
      name: "Seth Medeiros",
      title: "Software Developer at Moica INC",
      img:"https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/247452038_10217143156689774_7535865124869245748_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=gkGsFq7EM08AX8F9YxO&_nc_ht=scontent-sea1-1.xx&oh=5405b2ed11a9fca598f5f54eb7cf9f68&oe=6198D6A1",
        // "?auto=compress&cs=tinysrgb&dpr=2&w=500",
      desc:
        "Michael is ok to work with if you can get over the smell ",
    },
    {
      id: 2,
      name: "Marney Mallory",
      title: "Software Developer at Moica INC.",
      img:
        "https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/209447843_10159486145834583_2753750276695812586_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=nV3tlhYE9y8AX8LLPWw&_nc_ht=scontent-sea1-1.xx&oh=7401eaf155db9637d3d6c84d60abb0d2&oe=61979520",
      desc:
        "The last time I worked with Michael he was able to quickly fix most of the bugs he had created ",
      featured: true,
    },
    {
      id: 3,
      name: "Isaac Moreno",
      title: "QA specialist at Moica INC",
      img:
        "https://dhuh3lqp0wlh3.cloudfront.net/fc/616480a9fd11e6b44a136e41ecc81f/house-sitter-isaac-moreno-salem-9ecdb084.jpg",
      desc:
        "I don't know anyone named Michael Burton.......Oh....That guy? I thought his name was Stephen ",
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
