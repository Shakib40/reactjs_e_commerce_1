
import React from 'react';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import HeaderComponent from '@components/common/header/index';
import { LOGGEDIN } from '@reducers/oauth';

const Header = (props) => {
  const LOGGED = () => {
    console.log('error 11');
    props.LOGGEDIN().then((data) => {
      console.log('error 22', data);
    }).catch((error) => {
      console.log('error 33', error);
    });
  };

  return (
    <div>
      <HeaderComponent loggenIn={props.loggenIn} LOGGEDIN={LOGGED} />
    </div>
  );
};

const mapStateToProps = ({ oauth }) => (
  {
    isLoading: oauth.isLoading,
    loggenIn: oauth.isUserLogin
  }
);

const mapDispatchToProps = dispatch => bindActionCreators({
  LOGGEDIN,
}, dispatch);

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Header));
