import Popup from 'reactjs-popup'
import {Link} from 'react-router-dom'
import 'reactjs-popup/dist/index.css'

import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'

import './index.css'

const overlayStyles = {
  backgroundColor: '#ffffff',
}

const Header = () => (
  <ul className="header-cont">
    <Link to="/" className="link">
      <li>
        <img
          src=" https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
          alt="website logo"
          className="website-logo"
        />
      </li>
    </Link>
    <Popup
      modal
      trigger={
        <li>
          <button
            className="btn"
            type="button"
            data-testid="hamburgerIconButton"
          >
            {' '}
            <GiHamburgerMenu />
          </button>
        </li>
      }
      overlayStyle={overlayStyles}
    >
      {close => (
        <div className="container">
          <button
            type="button"
            className="trigger-button"
            data-testid="closeButton"
            onClick={() => close()}
          >
            {' '}
            <IoMdClose className="icon1" />
          </button>
          <div className="cont">
            <Link to="/" className="link">
              <div className="cont1">
                {' '}
                <AiFillHome className="icon" />
                <h1 className="heading">Home</h1>
              </div>
            </Link>
            <Link to="/about" className="link">
              <div className="cont1">
                {' '}
                <BsInfoCircleFill className="icon" />
                <h1 className="heading">About</h1>
              </div>
            </Link>
          </div>
        </div>
      )}
    </Popup>
  </ul>
)

export default Header
