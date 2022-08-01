import React from 'react';
import { BsTwitter} from 'react-icons/bs';
import { FaFacebookF} from 'react-icons/fa';
import { SiLinkedin } from "react-icons/si"


const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
            <BsTwitter />
        </div>
        <div>
            <FaFacebookF />
        </div>
        <div>
            <SiLinkedin onClick={() => window.open('https://www.linkedin.com/in/hamayoon-khan-17166a184/')}/>
        </div>
    </div>
  )
}

export default SocialMedia;