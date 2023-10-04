// NOT USING
// import React, { useEffect } from 'react';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const OnRouteChange = (props) => {
  // let addPadding = false;
  // let pagebg = 'dashboard-page-bg';
  // if ('isUserLogin' in localStorage) {
  //   pagebg = 'dashboard-page-bg minHeight100';
  // }
  // if (props.history.location.pathname === '/login' || props.history.location.pathname === '/resetpassword' || props.history.location.pathname.includes('/register') || props.history.location.pathname === '/verify') {
  //   addPadding = true;
  // }

  return (
    <div>
      {props.children}
    </div>
  );
};
const mapSateToProps = ({ oauth }) => ({
  isUserLogin: oauth.isUserLogin || window.localStorage.getItem('isUserLogin')
});


export default withRouter(connect(mapSateToProps, null)(OnRouteChange));
