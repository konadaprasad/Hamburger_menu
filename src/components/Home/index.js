import Header from '../Header'

import './index.css'

const Home = () => (
  <div className="popup-container">
    <Header />
    <div className="home-cont">
      <img
        src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png"
        alt="home"
        className="home-img"
      />
    </div>
    <div className="home-cont1">
      <img
        src="https://assets.ccbp.in/frontend/react-js/home-sm-img.png"
        alt="home"
        className="home-img1"
      />
    </div>
  </div>
)
export default Home
