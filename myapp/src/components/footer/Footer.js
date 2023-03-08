import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';
function Footer() {

    return (
        <div id='footer'>

             <p> Created By Jana Almomani</p>
        
            
          <a href="https://www.facebook.com/">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
    
          <a href="https://twitter.com/">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        
          <a href="https://www.instagram.com/">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
    
           
        </div>
    );
}

export default Footer;