import React from 'react';
import NavigationLink from '../NavigationLink';

import styles from './Navigation.module.css';
import Logo from '../Logo';

function Navigation() {
  return <nav className={styles.wrapper}>
          <Logo fillColor='#24053E' />

  <ul className={styles.navigation}>
    <li>
      <NavigationLink href='/'>home</NavigationLink>
    </li>
    <li>
      <NavigationLink href='/dashboard'>dashboard</NavigationLink>
    </li>
    <li>
      <NavigationLink href='/pdfs'>Pdf</NavigationLink>
    </li>
    <li>
      <NavigationLink href='/videos'>YouTube</NavigationLink>
    </li>
    <li>
      <NavigationLink href='/quizzes'>quizzes</NavigationLink>
    </li>
  </ul>
</nav>;
}

export default Navigation;
