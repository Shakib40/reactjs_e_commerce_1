import React from 'react';
import Login from '@containers/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import style from './beforelogin.module.css';
import cn from 'classnames';

const BeforeLoginComp = (props) => {
  return (
    <div className="d-flex justify-content-center  align-items-center">
      <div className={cn(style.containerWidth, 'container-radius container-height container_box_shadow container-background ')}>
        <div className="row">
          {props.isReg && (
            <div className="col-sm-4 d-flex justify-content-center  align-items-center right-border">
            &nbsp;
              <div id="carouselExampleControls" className="ml-1 carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active pl-1 text-center">
                    <div className="pl-5 pt-2 mr-1 pr-4 text-center text-secondary">
                      ***********************************
                    </div>
                  </div>
                  <div className="carousel-item pl-1 text-center">
                    <div className="pl-5 pt-2 pr-4 mr-2 text-center text-secondary">
                      **********************
                    </div>
                  </div>
                  <div className="carousel-item pl-1 text-center ">
                    <div className="pl-5 pt-2 pr-4 mr-1 text-center text-secondary">
                      ***************
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className={props.isReg ? 'col-sm-8 d-flex justify-content-center align-items-center' : 'col-sm-12 d-flex justify-content-center align-items-center'}>
            <Login />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeforeLoginComp;
