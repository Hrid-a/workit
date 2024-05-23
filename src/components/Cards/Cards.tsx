import React from 'react';

export type FeatureCardProps = {
  emoji: string;
  title: string;
  paragraph: string;
  useHtml?:boolean;

};

import styles from './Cards.module.css';
import { features } from '../../helpers/constant';

export const Cards = () => {
  return (
    <div className={styles.wrapper}>
  
    <section
      className={styles.content}
    >
    {
    
    features.map(({title, emoji, paragraph, useHtml}:FeatureCardProps) => (
      <article
      key={title}
    >
      <h2 className="">
      <span role="img" aria-label="chart increasing">{emoji}
    </span>
        </h2>
      <h2 className="py-4 text-2xl font-extrabold">{title}</h2>
      <div className="text-sm leading-6">
        {
          !!useHtml ? (<p dangerouslySetInnerHTML={{ __html: paragraph }}/>)
          :
          (<p>
        {paragraph}
        </p>)
        }
        </div>
        
    </article>
    ))}
    </section>

       </div> 
  );

};
