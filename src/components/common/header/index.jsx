
import React from 'react';
import cn from 'classnames';
import style from './header.module.css';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
// import { setNotification } from '@reducers/notification';
// import { Link } from 'react-router-dom';


export const Header = (props) => {
  console.log('props.loggenIn', props.loggenIn);

  return (
    <nav className={cn(style.HeaderNav)}>
      <div role="presentation" onClick={() => props.onNavigate('/')} className={cn(style.HeaderTitle)}>
          Amazon
      </div>
      <div className={cn(style.HeaderButtonDiv)}>
        {!props.loggenIn ? (
        <>
          <div onClick={() => props.LOGGEDIN()} role="presentation">
           LOGIN
          </div>
        </>
        ) : <>
          <div>
           LOG OUT
          </div>
        </>}
      </div>
    </nav>
  );
};

// const mapStateToProps = state => ({
//   userdata: state.oauth.userdata,
// });

// const mapDispatchToProps = dispatch => bindActionCreators({
//   setNotification
// }, dispatch);
// export default connect(mapStateToProps, mapDispatchToProps)(Header);
export default Header;
