import React from 'react';
import './AppLayout.scss';
import HeaderNav from '../../containers/HeaderNav/HeaderNav.tsx';
import ScrollToTop from '../ScrollToTop/ScrollToTop';

export function AppLayout(props: any) {
  return (
    <ScrollToTop>
      <div className='app-layout'>
        <HeaderNav/>
        {props.children}
      </div>
    </ScrollToTop>
  );
}