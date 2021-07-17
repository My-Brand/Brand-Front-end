import React, { Fragment } from 'react';
import { BackgroundCircleOne, BackgroundCircleTwo } from './styles';

export const Circles = () => (
  <Fragment>
    <BackgroundCircleOne className="circle_one bg_blue"></BackgroundCircleOne>
    <BackgroundCircleTwo className="circle_two bg_blue"></BackgroundCircleTwo>
  </Fragment>
);
