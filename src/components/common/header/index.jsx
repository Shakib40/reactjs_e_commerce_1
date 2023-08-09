
import React, { useEffect } from 'react';
import cn from 'classnames';
import style from './header.module.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setNotification } from '@reducers/notification';

export const Header = (props) => {
  useEffect(() => {
    console.log(props.loggenIn);
  }, [props.loggenIn]);

  return (
    <nav className={cn('navbar navbar-light bg-white position-fixed w-100 h-70 container_box_shadow', style.nav, style.borderBottom)}>
      <div className={cn(style.userMenu, 'd-flex pl-5 position-absolute')}>
        { !props.loggenIn && (
        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
         LOG OUT
          </button>
          <div className="dropdown-menu pt-0 pb-0 text-center dropdown-menu-right mt-6">
            <div className={cn(style.menu, 'cursor-pointer')} role="presentation" onClick={() => props.onNavigate('/logout')}>
              <span className={style.subMenu}>
                      LOGOUT
              </span>
            </div>
          </div>
        </div>
        )};
      </div>
    </nav>
  );
};

const mapStateToProps = state => ({
  userdata: state.oauth.userdata,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  setNotification
}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Header);
