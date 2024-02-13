import Header from '../Header'

import './index.css'

const About = () => (
  <div className="popup-container">
    <Header />
    <div className="about-cont">
      <img
        src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png"
        alt="about"
        className="home-img"
      />
    </div>
    <div className="about-cont1">
      <img
        src="https://assets.ccbp.in/frontend/react-js/about-sm-img.png"
        alt="home"
        className="home-img1"
      />
    </div>
  </div>
)
export default About
