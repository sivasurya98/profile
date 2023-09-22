import React, {useState} from 'react'   
import '../Styles/Navbar.css'
import { Link } from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import { Button } from '@material-ui/core'
function Navbar() {
    const[ismobile, setismobile] = useState(false)
  return (
    <div>
    <nav className="navbar">
        <ui className={ismobile ? "nav-links-mobile" : "nav-links"}
        onClick={()=> setismobile(false)}
        >
            <Link to="/" className="home">
                <li className="list-hover">Home</li>   
            </Link>
            <Link to="/Portfolios" className="about">
                <li className="list-hover">Portfolios</li>
            </Link>
            <Link to="/Testimonials" className="contact">
                <li className="list-hover">Testimonials</li>
            </Link>
           </ui>
           <Button  variant="contained" color="warning">Let's talk</Button>
           <button className="mobile-menu-icons" onClick={()=>setismobile(!ismobile)}>
            {ismobile ? (
              <CloseIcon />
            ):( 
             <MenuIcon />
            )}
        </button>
    </nav>
      </div>
  )
}

export default Navbar