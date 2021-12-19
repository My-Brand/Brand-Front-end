import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { LeftLink, RightLink, PrevNextMenu } from './styles';

const FooterNavigation = ({ leftTitle, rightTitle, toLeft, toRight }) => <PrevNextMenu width="100%" justify="space-between" className="pointer mato32">
    <Link className="black" to={toLeft}>
        <LeftLink>
            {leftTitle}
        </LeftLink>
    </Link>

    <Link className="black" to={toRight}>
        <RightLink>
            {rightTitle}
        </RightLink>
    </Link>

</PrevNextMenu>;

FooterNavigation.propTypes = {
  leftTitle: PropTypes.string,
  rightTitle: PropTypes.string,
  toLeft: PropTypes.string,
  toRight: PropTypes.string
};

export default FooterNavigation;
