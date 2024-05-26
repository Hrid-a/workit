'use client'
import React from 'react';
import NavigationLink from '../NavigationLink';
import { motion} from 'framer-motion';

import styles from './Navigation.module.css';
import Logo from '../Logo';
import Icon from '../Icon';


function Navigation() {
  const variants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
  };

  return <nav className={styles.wrapper}>
  <Logo fillColor='white' />
  <motion.ul variants={variants} className={styles.navigation}>
    <motion.li whileTap={{ scale: 0.95 }}>
      <NavigationLink href='/' slug={<Icon name='home' />} >home</NavigationLink>
    </motion.li>
    <motion.li  
      whileTap={{ scale: 0.95 }}>
      <NavigationLink href='/dashboard'
      slug={<Icon name='layout-dashboard' />} 
      >dashboard</NavigationLink>
    </motion.li>
    <motion.li  
      whileTap={{ scale: 0.95 }}>
      <NavigationLink href='/dashboard/pdfs'
      slug={<Icon name='file' />} 
      >my files</NavigationLink>
    </motion.li>
    <motion.li  
      whileTap={{ scale: 0.95 }}>
      <NavigationLink href='/dashboard/videos'
      slug={<Icon name='video' />} 
      >my videos</NavigationLink>
    </motion.li>
    <motion.li  
      whileTap={{ scale: 0.95 }}>
      <NavigationLink href='/dashboard/quizzes'
        slug={<Icon name='list-todo' />} 
        >my quizzes</NavigationLink>
    </motion.li>
  </motion.ul>
</nav>;
}

export default Navigation;
