import "./topbar.css"
import { Mail, LinkedIn } from "@material-ui/icons"
// import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Topbar({menuOpen, setMenuOpen}) {
//   let classes = "topBar";
// if(menuOpen === true) {
//   classes += " active";
// }
  return (
    <div className={"topBar " + (menuOpen && "active")}>
      <div className="topBarWrapper">
        <div className="topBarLeft">
          <a href="#intro" className="logo"><span className="emm">M</span>B</a>
          <div className="itemContainer">
            <LinkedIn className="icon"/>
            <span className="phone"><a className='linkedIn' href="https://www.linkedin.com/in/michael-burton-portland/">linkedin.com/in/michael-burton-portland/</a></span>
          </div>
          <div className="itemContainer">
            <Mail className="icon"/>
            <span className="email">micbur1@gmail.com</span>
          </div>
        </div>
        <div className="topBarRight">
          <div className="hamburger" onClick={()=>{setMenuOpen(!menuOpen); console.log("menu status: ", menuOpen)}}>
          {/* onClick={()=>(menuOpen : setMenuOpen(false) ? setMenuOpen(true))}>  //maybe use a turnary */}
            <span className={"line1 " + (menuOpen && "active")}></span>
            <span className={"line2 " + (menuOpen && "active")}></span>
            <span className={"line3 " + (menuOpen && "active")}></span>
          </div>
        </div>
      </div>
    </div>
  )
}
