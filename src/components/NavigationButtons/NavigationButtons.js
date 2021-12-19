import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { LeftLink, RightLink, PrevNextMenu } from './styles';

const NavigationButtons = ({ leftTitle, rightTitle, toLeft, toRight }) => (
  <PrevNextMenu justify="flex-end" column_gap="32px" className="pointer mato32">
    <Link className="black" to={toLeft}>
      <LeftLink>{leftTitle}</LeftLink>
    </Link>

    <Link className="black" to={toRight}>
      <RightLink>{rightTitle}</RightLink>
    </Link>
  </PrevNextMenu>
);

NavigationButtons.propTypes = {
  leftTitle: PropTypes.string,
  rightTitle: PropTypes.string,
  toLeft: PropTypes.string,
  toRight: PropTypes.string
};

export default NavigationButtons;
