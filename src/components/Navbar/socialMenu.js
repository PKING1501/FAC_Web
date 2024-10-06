import React, { useState } from 'react';
import styles from './socialMenu.module.css';
import {
  IoLogoFacebook,
  IoLogoLinkedin,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoYoutube,
} from 'react-icons/io';
import { IoAddSharp } from 'react-icons/io5';

const SocialMenu = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <div className={`${styles.menu} ${menuActive ? styles.active : ''}`}>
      <div className={styles.toggle} onClick={toggleMenu}>
        <IoAddSharp />
      </div>
      <ul>
        {/* <li style={{ '--i': 0, '--clr': '#1877f2' }}>
          <a
            href="https://www.facebook.com/eraiitkanpur/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoFacebook />
          </a>
        </li> */}
        <li style={{ '--i': 3, '--clr': '#1da1f2' }}>
          <a
            href="https://www.instagram.com/fac.iitk"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoInstagram />
          </a>
        </li>
        <li style={{ '--i': 4, '--clr': '#FF5733' }}>
          <a
            href="https://github.com/Finance-and-Analytics-Club-FAC-IITK"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoGithub />
          </a>
        </li>
        {/* <li style={{ '--i': 3, '--clr': '#0a66c2' }}>
          <a
            href="https://www.youtube.com/channel/UCaaEga5jSCEN6ph6w9E9TVQ"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoYoutube />
          </a>
        </li> */}
        <li style={{ '--i': 5, '--clr': '#5de4c7' }}>
          <a
            href="https://www.linkedin.com/company/finance-and-analytics-club/mycompany/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoLinkedin />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialMenu;
