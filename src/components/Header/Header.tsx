import React from 'react';


import styles from './Header.module.css';
import Logo from '../Logo';

function Header({children}: {children:React.ReactNode}) {
  return <header className={styles.wrapper}>
    <Logo fillColor='white'/>
    {children}
  </header>;
}

export default Header;
