import { Link } from "react-router-dom"
import { X } from "react-bootstrap-icons"

const MobileMenu = ({closeMethod}) => {
  return (
    <>
     <div id="close-nav-menu" onClick={closeMethod}> 
        <X/>
     </div>

     <ul id="mobile-menu">

     <div id='logo'>
          <Link to='/'> <h2> News API </h2> </Link>
        </div>

        <li>
            <Link to='/' onClick={closeMethod}> Home </Link>
        </li>
        <li>
        <Link to='/about' onClick={closeMethod}> About </Link>
        </li>
     </ul>
    </>
    )
}

export default MobileMenu
