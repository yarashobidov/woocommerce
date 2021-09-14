import logo from '../../images/LOGO.png'
import {Link} from 'react-router-dom'
import '../../styles/navbar.scss'
import SearchIcon from '@material-ui/icons/Search'


function Navbar() {
  return (
    <div className="navbar">
      <div className="left">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <ul className="menu">
          <li>
            <Link  to="/sell">Sell</Link>
          </li>
          <li>
            <Link to="/">Marketplace</Link>
          </li>
          <li>
            <Link to="/">Community</Link>
          </li>
          <li>
            <Link to="/">Develop</Link>
          </li>
          <li>
            <Link to="/">Resources</Link>
          </li>
        </ul>
      </div>
      <div className="right">
        <div className="login">
          <Link to="/logIn">Log In</Link>
        </div>
        <div >
          <Link className="getstarted " to="/getstarted">Get Started</Link>
        </div>
        <div className="search">
          <button> <SearchIcon /></button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
