import React, { Component } from 'react';

import styles from './Layout.module.css';

import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {

  state = {
    showSideDrawer: true
  }

  sideDrawerClosedHandler = () => {
    this.setState({showSideDrawer: false});
  }

  sideDrawerToggleHandler = () => {
    this.setState((previousState) => {
      return { showSideDrawer: !previousState.showSideDrawer }
    });
  }

  render() {
    return (
      <React.Fragment>
        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
        <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className={styles.content}>
          {this.props.children}
        </main>
      </React.Fragment>
    );
  }
}

export default Layout;
