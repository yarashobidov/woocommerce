import { Link } from '@material-ui/core'
import React from 'react'

function Card({img, title, text, link, style}) {
  return (
    <div className={`card ${style}`}>
      <div className="img">
        <img src={img} alt={title} />
      </div>
      <div className="texts">
        <h3>{title}</h3>
        <p>{text}</p>
        <Link className="link" to="/">{link}</Link>
      </div>
    </div>
  )
}

export default Card
