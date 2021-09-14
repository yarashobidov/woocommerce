import './ctasection.scss'

import left from '../../images/swiperLeft.png'
import bottom from '../../images/swiperRight.png'
import swiper1 from '../../images/swiper1.png'
import swiper2 from '../../images/swiper2.png'
import swiper3 from '../../images/swiper3.png'
import swiper4 from '../../images/swiper4.png'
import swiper5 from '../../images/swiper5.png'
import swiper6 from '../../images/swiper6.png'

function CtaSection() {
  return (
    <div className="ctasection">
      <div className="title">
      Trusted by Agencies & Store Owners
      </div>
      <div className="boxs">
        <div className="box">
          <div className="text">
          No other eCommerce platform allows people to start for free and grow their store as their business grows. More importantly, WooCommerce doesn't charge you a portion of your profits as your business grows!
          </div>
        </div>
        <div className="box box1"></div>
        <div className="box box2"></div>
      </div>
      <div className="imgleft">
        <img src={left} alt="" />
      </div>
      <div className="imgBottom">
        <img src={bottom} alt="" />
      </div>
      <div className="swiper1">
        <img src={swiper1} alt="swiper1" />
      </div>
      <div className="swiper2">
        <img src={swiper2} alt="swiper2" />
      </div>
      <div className="swiper3">
        <img src={swiper3} alt="swiper3" />
      </div>
      <div className="swiper4">
        <img src={swiper4} alt="swiper4" />
      </div>
      <div className="swiper5">
        <img src={swiper5} alt="swiper5" />
      </div>
      <div className="swiper6">
        <img src={swiper6} alt="swiper6" />
      </div>
    </div>
  )
}

export default CtaSection
