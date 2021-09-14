import { Link } from "@material-ui/core"


function Index({img, title, text, link, to}) {
  return (
    <div className="card">
      <div className="img">
        <img src={img} alt={title} />
      </div>
      <div className="texts">
        <div className="title">
          <h4>{title}</h4>
        </div>
        <p className="text">{text}</p>
        <Link to={to} className="link" >{link}</Link>
      </div>
    </div>
  )
}

export default Index
