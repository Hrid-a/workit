import React from 'react';

import styles from './Decoration.module.css';
function Decoration({bgColor}:{bgColor: string}) {
  return <div className={styles.decoration} style={{backgroundColor: bgColor}}>
  </div>;
}

export default Decoration;
