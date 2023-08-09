import React, { useState, useEffect } from 'react';
import cn from 'classnames';
import style from './vulHuntTabMenu.module.css';
import { checkPermission } from '@helpers/utils';


const VulHuntTabMenu = (props) => {
  const [title, setTitle] = useState(props.defaulTitle);
  let borderBottom = '';
  useEffect(() => {
    props.onChange(props.defaulId);
  }, []);
  const menuItemClick = (item) => {
    setTitle(item.label);
    props.onChange(item.itemId);
  };
  if (props.borderBottom && props.borderBottom === 'primary') {
    borderBottom = style.borderBottomPrimary;
  } else {
    borderBottom = style.borderBottomNone;
  }
  return (
    props.items && props.items.map((item) => {
      return (
        <>
          {checkPermission(item.service) && (
            <div className={cn(title === item.label && style.btnClick, borderBottom, style.float_left, 'cursor-pointer')} onClick={() => menuItemClick(item)} role="presentation">
              <span className="px-2 fs-20 fw-400">
                {item.label}
              </span>
              {props.borderBottom && props.borderBottom === 'secondary' && (
                <div className={cn(style.borderBottomSecondary)} />
              )}
            </div>
          )}
        </>
      );
    })
  );
};

export default VulHuntTabMenu;
