
import React from 'react';
import style from './footer.module.css';
import cn from 'classnames';

const Footer = () => {
  const navigateToVulhunt = () => {
    const link = document.createElement('a');
    link.href = 'https://www.sakhaglobal.com/';
    link.target = '_blank';
    link.click();
    link.remove();
  };

  return (
    <div className={cn(style.footerBottom, 'text-center py-3 container_box_shadow')}>
      <button type="button" onClick={navigateToVulhunt} className="mb-0 clr-white cursor-pointer btn btn-as-text">&copy; Sakha.com</button>
    </div>
  );
};
export default Footer;
