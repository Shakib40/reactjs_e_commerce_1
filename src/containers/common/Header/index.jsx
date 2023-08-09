
import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import HeaderComponent from '@components/common/header/index';
import { setNotification } from '@reducers/notification';

const Header = (props) => {
  useEffect(() => {
    console.log(props.loggenIn);
  }, [props.loggenIn]);

  // Function for Header Right DropDown
  const onNavigate = (url) => {
    switch (url) {
      case '/onboard':
        props.history.replace('/onboard');
        break;
      case '/logout':
        window.localStorage.clear();
        window.sessionStorage.clear();
        props.history.replace('/login');
        break;
      default:
        props.history.replace({ pathname: url });
        break;
    }
  };

  return (
    <div>
      <HeaderComponent onNavigate={onNavigate} loggenIn={props.loggenIn} />
    </div>
  );
};

const mapStateToProps = ({ oauth }) => (
  {
    userdata: oauth.userdata,
    loggenIn: oauth.isUserLogin
  }
);

const mapDispatchToProps = dispatch => bindActionCreators({
  setNotification,
}, dispatch);

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Header));
