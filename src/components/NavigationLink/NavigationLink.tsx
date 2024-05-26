import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';

import styles from './NavigationLink.module.css';

type NavigationLinkProps = React.PropsWithChildren<{href:string, slug: React.ReactNode}>

function NavigationLink({href, slug, children}: NavigationLinkProps){
  const pathName = usePathname();
  return <Link href={href} className={`${styles.wrapper} ${pathName === href ? 'active':''}`}>  
    {slug}
    <span className={styles.mainText}>{children}</span>
  </Link>;
}

export default NavigationLink;
