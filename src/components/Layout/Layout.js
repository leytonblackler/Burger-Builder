import React from 'react';

import styles from './Layout.module.css';

import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

const layout = (props) => {
  console.log(styles.content);
  return (
    <React.Fragment>
      <Toolbar />
      <SideDrawer />
      <div>Toolbar, SideDrawer, Backdrop</div>
      <main className={styles.content}>
        {props.children}
      </main>
    </React.Fragment>
  )
}

export default layout;
