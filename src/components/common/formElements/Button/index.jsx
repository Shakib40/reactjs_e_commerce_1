import React from 'react';
import cn from 'classnames';

const Button = ({ loading, customClass, ...props }) => {
  return (
    <button
      type="button"
      disabled={loading}
      {...props}
    >
      {loading ? (
        <React.Fragment>
          <div className={cn('position-absolute', customClass)}>
            <svg
              width={25}
              height={25}
              viewBox="0 0 38 38"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#FFFF"
              aria-label={props.label}
            >
              <g fill="none" fillRule="evenodd">
                <g transform="translate(1 1)" strokeWidth="2">
                  <circle strokeOpacity=".5" cx="18" cy="18" r="18" />
                  <path d="M36 18c0-9.94-8.06-18-18-18">
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      from="0 18 18"
                      to="360 18 18"
                      dur="1s"
                      repeatCount="indefinite"
                    />
                  </path>
                </g>
              </g>
            </svg>
          </div>
          {props.children[1]}
        </React.Fragment>
      ) : (
        props.children[0]
      )}
    </button>
  );
};
export default Button;
