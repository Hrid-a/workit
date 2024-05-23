import React from 'react';
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'

import styles from './Header.module.css';
import Logo from '../Logo';

function Header() {
  return <header className={styles.wrapper}>
    <Logo fillColor='white'/>
    <SignedOut>
          <SignInButton>
          <button className={styles.btn}>
      Apply for access
    </button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
  </header>;
}

export default Header;
