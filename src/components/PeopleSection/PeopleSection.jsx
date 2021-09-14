import './peoplesection.scss'

import people from '../../images/people.png'
import left from '../../images/peopleLeft.png'
import right from '../../images/peopleRight.png'
import circle from '../../images/circle65.png'

function PeopleSection() {
  return (
    <div className="peoplesection">
      <div className="texts">
        <h2>Supported by real people</h2>
        <p>Our team of Happiness Engineers works remotely from 58 countries providing customer support across multiple time zones.</p>
      </div>
      <div className="people">
        <img src={people} alt="people" />
        <div className="left">
          <img src={left} alt="left" />
        </div>
        <div className="right">
          <img src={right} alt="right" />
        </div>
        <div className="circle1">
          <img src={circle} alt="" />
        </div>
        <div className="circle2">
          <img src={circle} alt="" />
        </div>
        <div className="circle3">
          <img src={circle} alt="" />
        </div>
        <div className="circle4">
          <img src={circle} alt="" />
        </div>
      </div>
      <div className="textWhite">
        <div className="text">
        <span> WooCommerce - the</span> most customizable eCommerce platform <span> for building</span> your online business.
        </div>
        <div className="button">
          <button>GET STARTED</button>
        </div>
      </div>
    </div>
  )
}

export default PeopleSection
