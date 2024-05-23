import React from 'react';

import styles from './Feature.module.css';

function Features() {
  return <div className={styles.wrapper}>
    <section className={styles.features}>
    <article>
      <h2>personalized learning</h2>
      <p>
        we can tailor educational experiences to meet your needs. By analyzing your performance and learning styles.
      </p>
    </article>
    <article>
      <h2>24/7 accessibility</h2>
      <p>
      learning is not confined to the classroom. Students can access  resources anytime and anywhere,
      constant availability helps maintain continuous learning and reinforces concepts outside traditional school hours.

      </p>
    </article>
    <article>
      <h2>personalized learning</h2>
      <p>
      learning more interactive and engaging through adaptive learning technologies,
      making the learning process more enjoyable and motivating them to invest more effort and time in their studies
      </p>
    </article>
    </section>
  </div>;
}

export default Features;
