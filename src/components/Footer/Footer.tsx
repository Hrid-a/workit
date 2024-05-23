import React from 'react';

import styles from './Footer.module.css';
import Logo from '../Logo';
function Footer() {
  return <div className={styles.wrapper}>
    <footer className={styles.footer}>
      <Logo fillColor='#24053E' />
    </footer>
  </div>;
}

export default Footer;
