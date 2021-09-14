import {useState} from 'react'
import { Link } from '@material-ui/core'
import Switch from '@material-ui/core/Switch';
import Navbar from '../Navbar/Navbar'


import '../../styles/header.scss'
import w from '../../images/W.png'
import Bitmap from '../../images/Bitmap.png'
import grils from '../../images/grils.png'
import left from '../../images/imgsLeft.png'
import bottom from '../../images/imgsBottom.png'
import top from '../../images/imgsTop.png'
import stripe from '../../images/stripe.png'
import PayPal from '../../images/PayPal.png'
import bank from '../../images/bank.png'
import safe from '../../images/safe.png'
import union from '../../images/Union.png'


function Header() {
  const [state, setState] = useState({
    checkedA: true,
    checkedB: true,
  });
  

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  return (
    <div className="header">
      <div className="top">
        <Navbar />
      </div>
      <div className="center">
        <div className="texts">
          <h1>Building exactly the eCommerce website you want.</h1>
          <p>WooCommerce is a customizable, open-source eCommerce platform built on WordPress. </p>
          <p>Get started quickly and make your way.</p>
          <div className="btns">
            <Link className="btn" to="/">Start a New Store</Link>
            <span> or   <span className="or">Customize & Extend ›</span></span>
          </div>
        </div>
        <div className="imgs">
          <div className="mainImg">
            <img src={Bitmap} alt="Bitmap" />
          </div>
          <div className="shoes">
            <div className="topTitle">
              <span className="blod">SHOES</span>
              <span className="grey" >Adidas Originals</span>
            </div>
            <div className="title">
              Adidas Originals 
              OG Sneakers
            </div>
            <div className="numbers">
              <button>7</button>
              <button>7.5</button>
              <button>8</button>
              <button>8.5</button>
              <button>9</button>
            </div>
            <div className="pricesBox">
              <div className="prices">
                <div className="price">$344</div>
                <div className="oldprice" >$560</div>
              </div>
              <div className="buttons">
                <button>-</button>
                <span>1</span>
                <button>+</button>
              </div>              
            </div>
            <div className="add">
              <button>Add to cart</button>
            </div>
          </div>
          <div className="topImg">
            <img src={grils} alt="grils" />
          </div>
          <div className="imgLeft">
            <img src={left} alt="icon" />
          </div>
          <div className="imgTop">
            <img src={top} alt={top} />
          </div>
          <div className="imgBottom">
            <img src={bottom} alt="bottom" />
          </div>
          <div className="shop">
            <img src={union} alt="union" />
          </div>
          <div className="bankBox">
            <div className="bank">
              <div className="img">
                <img src={stripe} alt="stripe" />
              </div>
              <div className="text">
                Stripe gateway
              </div>
              <div className="switch">
              <Switch
                checked={state.checkedA}
                onChange={handleChange}
                name="checkedA"
                color="primary"
                style={{color: '#fff'}}
                inputProps={{ 'aria-label': 'secondary checkbox' }}
              />
              </div>
            </div>
            <div className="bank">
              <div className="img">
                <img src={PayPal} alt="PayPal" />
              </div>
              <div className="text">
                Paypal payments
              </div>
              <div className="switch">
              <Switch
                checked={state.checkedA}
                onChange={handleChange}
                name="checkedB"
                color="primary"
                style={{color: '#fff'}}
                inputProps={{ 'aria-label': 'secondary checkbox' }}
              />
              </div>
            </div>
            <div className="bank">
              <div className="img">
                <img src={bank} alt="bank" />
              </div>
              <div className="text">
              Bank Transfers
              </div>
              <div className="switch">
              <Switch
                checked={state.checkedA}
                onChange={handleChange}
                name="checkedB"
                color="primary"
                style={{color: '#fff'}}
                inputProps={{ 'aria-label': 'secondary checkbox' }}
              />
              </div>
            </div>       
          </div>             
          <div className="safe">
              <img src={safe} alt="safe" />
            </div> 
        </div>
      </div>
      <div className="bottom">
        <h2>Your eCommerce <br /> made simple</h2>
      </div>
      <div className="w">
        <img src={w} alt="w" />
      </div>
    </div>
  )
}

export default Header
