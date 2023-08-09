import React from 'react';
import { connect } from 'react-redux';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import styles from './Breadcrumbs.module.scss';

const Breadcrumbs = (props) => {
  window.sessionStorage.setItem('breadcrumbs', JSON.stringify(props.navs));
  return (
    <div className="d-flex">
      {props.navs && props.navs.map((nav, index) => {
        if (index < props.navs.length - 1) {
          return (
            <div className={cn(styles.navBtn, 'cursor-pointer fs-14 font-weight-bold')}>
              <Link className={cn(styles.breadcrumbsColor)} style={{ textDecoration: 'none' }} key={nav.link} to={nav.link}>
                {props.navs.length - 1 > index && nav.title.length < 15 && `${nav.title}`}
                {props.navs.length - 1 > index && nav.title.length >= 15 && `${nav.title}`}
              </Link>
              {props.navs.length - 2 > index && (
                <small className={cn(styles.breadcrumbsColor, 'fs-14 font-weight-bold ml-10 mr-10')}>
                  {' > '}
                </small>
              )}
            </div>
          );
        }
        return (
          <div className={cn(styles.breadcrumbsColor, 'fs-14 font-weight-bold')}>
            {/* <span>
              {nav.title}
            </span> */}
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = state => ({
  navs: state.breadcrumbs.navs
});

export default
connect(
  mapStateToProps,
  null
)(Breadcrumbs);
