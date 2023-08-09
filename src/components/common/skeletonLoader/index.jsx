import React from 'react';
import cn from 'classnames';
import styles from './skeleton.module.css';

const Spinner = (props) => {
  const size = props.size || 30;
  const paddingTop = props.minHeight ? props.minHeight / 2 - 72 - size / 2 : 0;
  return (
    <div
      style={{
        minHeight: props.minHeight,
        paddingTop,
      }}
    >
      <div className={cn(styles.loader)} style={{ fontSize: size || 30, color: props.color || '#ffffff' }} />
    </div>
  );
};
export default Spinner;
