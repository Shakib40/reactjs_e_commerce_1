import React from 'react';
import cn from 'classnames';
import { connect } from 'react-redux';
import style from './notification.module.css';

const Notification = ({ isOpen, type = 'success', message }) => {
  console.log('isOpen', isOpen);
  return (
    <React.Fragment>
      <div className={cn('row mx-0 justify-content-center align-items-center', style.notificationBar, isOpen ? style.notificationOpen : style.notificationClose, type === 'danger' ? style.alertDanger : style.alertSuccess)} role="alert">
        <span>
          {message}
        </span>
        {/* <button type="button" className={cn('close', style.close)}>
          <span>
            &times;
          </span>
        </button> */}
      </div>
    </React.Fragment>
  );
};

const mapSateToProps = ({ notification }) => ({
  isOpen: notification.isOpen,
  message: notification.message,
  type: notification.type
});
export default connect(
  mapSateToProps,
  null
)(Notification);
