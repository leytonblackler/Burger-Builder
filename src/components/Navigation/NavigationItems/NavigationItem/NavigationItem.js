import React from 'react';

import styles from './NavigationItem.module.css';

const navigationItem = (props) => (
  <li className={styles.NavigationItem}>
    <a href="/" className={props.active ? styles.active : null}>A Link</a>
  </li>
);

export default navigationItem;
