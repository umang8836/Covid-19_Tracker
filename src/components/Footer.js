import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faGithub,faLinkedin} from '@fortawesome/free-brands-svg-icons';

const Footer = ()=>{

    return (
        <div style={{textAlign: "center" , backgroundColor:"whitesmoke",color:"black"}}>
            Made with <span role="img" aria-label="heart">💙</span> by Anuradha Aggarwal
            <div style={{fontSize:'30px'}}>
          <a href="https://github.com/anuradha9712" style={{margin:'20px'}}><FontAwesomeIcon icon={faGithub}/></a>
     
        <a href="https://www.linkedin.com/in/anuradha-aggarwal-4a2751107/"><FontAwesomeIcon icon={faLinkedin}/></a>
      </div>

        </div>
    )
}

export default Footer;