import Link from 'next/link';
import React from 'react';

import styles from './NavigationLink.module.css';

function NavigationLink({href, children}: React.PropsWithChildren<{href:string}>){
  return <Link href={href} className={styles.wrapper}>
    <div>
    <span className={styles.mainText}>{children}</span>
    <span className={styles.hoverText}>{children}</span>
    </div>
  </Link>;
}

export default NavigationLink;
