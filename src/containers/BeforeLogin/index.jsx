import React from 'react';
import BeforeLoginComp from '@components/BeforeLoginComp';

const BeforeLogin = (props) => {
  const showPages = {
    registration: false,
    login: false,
    verifyOtp: false,
    resetpassword: false
  };
  let isReg = true;

  if (props.location.pathname === '/verify') {
    showPages.verifyOtp = true;
    isReg = true;
  } else if (props.location.pathname.includes('/register')) {
    showPages.registration = true;
    isReg = true;
  } else if (props.location.pathname === '/login') {
    showPages.login = true;
    isReg = true;
  } else if (props.location.pathname === '/resetpassword') {
    showPages.resetpassword = true;
    isReg = true;
  } else if (props.location.pathname === '/organization') {
    showPages.registration = true;
    isReg = false;
  }
  return (
    <div className="container-fluid">
      <BeforeLoginComp page={showPages} isReg={isReg} />
    </div>
  );
};

export default BeforeLogin;
