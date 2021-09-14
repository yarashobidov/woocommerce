import './footer.scss'

import day from '../../images/30.png'
import ayn from '../../images/ayn.png'
import secure from '../../images/secure.png'
import logo from '../../images/logoFooter.png'
import tw from '../../images/1.png'
import fc from '../../images/2.png'
import ex from '../../images/3.png'
import inns from '../../images/4.png'
import au from '../../images/au.png'

function Footer() {
  return (
    <footer className="footer">
      <div className="top">
        <div className="icons">
          <div className="icon">
            <img src={day} alt="" />
            <span className="text"><span>30 day</span> money back guarantee</span>
          </div>
          <div className="icon">
            <img src={ayn} alt="" />
            <span className="text">Support <span>teams across the world</span></span>
          </div>
          <div className="icon">
            <img src={secure} alt="" />
            <span className="text">Safe & Secure<span> online payment</span> </span>
          </div>
        </div>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
      </div>
      <div className="center">
      <div className="columns">
          <div className="column">
            <div className="title"> Who we Are </div>
            <ul>
              <li>About</li>
              <li>Team</li>
              <li>Work With Us</li>
            </ul>
          </div>
          <div className="column">
            <div className="title"> Who we Are </div>
            <ul>
              <li>Features</li>
              <li>Payments</li>
              <li>Marketing</li>
              <li>Shipping</li>
              <li>Extension Store</li>
              <li>eCommerce blog</li>
              <li>Development blog</li>
              <li>Ideas board</li>
              <li>Mobile App</li>
              <li>Community</li>
              <li>Style Guide</li>
              <li>Email Newsletter</li>
            </ul>
          </div>
          <div className="column">
            <div className="title"> Other products</div>
            <ul>
              <li>Storefront</li>
              <li>WooSlider</li>
              <li>Sensei</li>
              <li>Sensei Extensions</li>
            </ul>
          </div>
          <div className="column">
            <div className="title"> Support</div>
            <ul>
              <li>Documentation</li>
              <li>Customizations</li>
              <li>Support Policy</li>
              <li>Contact</li>
              <li>COVID-19 Resources</li>
              <li>Privacy Notice for</li>
              <li>California Users</li>
            </ul>
          </div>
          <div className="column">
            <div className="title"> We recommend</div>
            <ul>
            <li>WooExperts</li>
           <li> Hosting Solutions</li>
           <li> Pre-sales FAQ</li>
            <li>Success Stories</li>
           <li> Design Feedback Group</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}



export const Bottom = () => {
  return(
    <div className="end">
      <div className="icons">
        <a href="#">
          <img src={tw} alt="" />
        </a>
        <a href="#">
          <img src={fc} alt="" />
        </a>
        <a href="#">
          <img src={ex} alt="" />
        </a>
        <a href="#">
          <img src={inns} alt="" />
        </a>
      </div>
      <div className="center">COPYRIGHT WOOCOMMERCE 2020 - TERMS & CONDITIONS  PRIVACY POLICY</div>
      <div className="right">
        <img src={au} alt="" />
      </div>
    </div>
  )
}

export default Footer