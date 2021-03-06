import React, { PureComponent } from 'react';

import logoIcon from '../../assets/image/logo.svg';
import ModalContainer from '../cart/ModalContainer';
import Navbar from '../navBar/Navbar';

import s from './Header.module.scss';

class Header extends PureComponent<any> {
  render() {
    return (
      <div className={s.header}>
        <Navbar />
        <img src={logoIcon} className={s.logo} alt="logo" />
        <ModalContainer />
      </div>
    );
  }
}

export default Header;
