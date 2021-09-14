import {features} from './featuress'
import Card from './FeaturesCard/Index'
import '../../styles/features.scss'

import play from '../../images/play.png'
import texts from '../../images/texts.png'
import facebook from '../../images/facebook.png'
import square from '../../images/square.png'
import mailchimp from '../../images/mailchimp.png'
import jetpack from '../../images/jetpack.png'
import googleA from '../../images/googleA.png'
import compyuter from '../../images/compyuter.png'
import frends from '../../images/frends.png'
import three from '../../images/3gr.png'

function Features() {
  return (
    <div className="features">
      {
        features.map(e => (
          <div className={`feature${e.id}`} key={e.id} >
            <Card img={e.img} title={e.title} text={e.text} link={e.link} to={e.to} />
          </div>
        ))
      }

      <div className="play">
        <img src={play} alt="play" />
      </div>
      <div className="imgtext">
        <img src={texts} alt="texts" />
      </div>
      <div className="square">
        <img src={square} alt="square" />
      </div>
      <div className="facebook">
        <img src={facebook} alt="facebook" />
      </div>
      <div className="mailchimp">
        <img src={mailchimp} alt="mailchimp" />
      </div>
      <div className="jetpack">
        <img src={jetpack} alt="jetpack" />
      </div>
      <div className="googleA">
        <img src={googleA} alt="googleA" />
      </div>
      <div className="compyuter">
        <img src={compyuter} alt="compyuter" />
      </div>
      <div className="frends">
        <img src={frends} alt="frends" />
      </div>
      <div className="three">
        <img src={three} alt="three" />
      </div>
    </div>
  )
}

export default Features
