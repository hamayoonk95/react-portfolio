import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FaFacebookF} from 'react-icons/fa';
import { SiLinkedin } from "react-icons/si";


const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
            <FaGithub onClick={() => window.open("https://github.com/hamayoonk95")} />
        </div>
        <div>
            <FaFacebookF  onClick={() => window.open("https://www.facebook.com/profile.php?id=100071468872956")} />
        </div>
        <div>
            <SiLinkedin onClick={() => window.open("https://www.linkedin.com/in/hamayoon-khan-17166a184/")}/>
        </div>
    </div>
  )
}

export default SocialMedia;