import {
  FaPinterestSquare,
  FaInstagram,
  FaTwitter,
  FaFacebookSquare,
} from 'react-icons/fa'

import './index.css'

const Footer = () => (
  <div className="footer-container">
    <div className="logo-container">
      <img
        src="https://res.cloudinary.com/dkobk5oao/image/upload/v1633661337/Frame_275_quuhwq.png"
        alt="website-footer-logo"
        className="logo"
      />
      <h1 className="footer-heading">Tasty Kitchen</h1>
    </div>
    <p className="footer-description">
      The only thing we are serious about is food.
      <br /> Contact us on
    </p>
    <div className="social-icons-container">
      <FaPinterestSquare
        testId="pintrest-social-icon"
        className="social-icon"
      />
      <FaInstagram testId="instagram-social-icon" className="social-icon" />
      <FaTwitter testId="twitter-social-icon" className="social-icon" />
      <FaFacebookSquare testId="facebook-social-icon" className="social-icon" />
    </div>
  </div>
)

export default Footer
