import Card from './Card/Card'
import './section.scss'
import {info} from './info'

import woo from '../../images/woo.png'
import left from '../../images/elpseLeft.png'
import bottom from '../../images/elpseBottom.png'
import circle from '../../images/circle262.png'

function Section() {
  return (
    <div className="section">
      <div className="boxs">
        {
          info.map(e => (
            <Card key={e.id} img={e.img} title={e.title} text={e.text} link={e.link} style={`card${e.id}`} />
          ))
        }
      </div>
      <div className="woo">
        <img src={woo} alt="woo" />
      </div>
      <div className="left">
        <img src={left} alt="left" />
      </div>
      <div className="bottom">
        <img src={bottom} alt="bottom" />
      </div>
      <div className="circle262">
        <img src={circle} alt="circle" />
      </div>
      <div className="circle65">
        <img src={circle} alt="circle" />
      </div>
      <div className="circle65_1">
        <img src={circle} alt="circle" />
      </div>
      <div className="circle400">
        <img src={circle} alt="circle" />
      </div>
    </div>
  )
}

export default Section
