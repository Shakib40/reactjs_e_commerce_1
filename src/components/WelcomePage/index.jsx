import React from 'react';
import style from './welcomepage.module.css';
import cn from 'classnames';

const Welcome = () => {
  return (
    <div className="container-fluid">
      <div className="row mx-0 full-height-inside justify-content-center align-items-center">
        <h1 className={cn(style.fontSize, 'clr-white fw-600')}>Welcome To Vulhunt</h1>
      </div>
    </div>
  );
};

export default Welcome;
