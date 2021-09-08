import React from 'react';
import Image from 'antd/lib/image';
import PropTypes from 'prop-types';
import { CompanyLogoCircle } from './styles';

const CompanyLogo = ({ src }) => (
  <CompanyLogoCircle className="bg_white">
    <Image preview={false} src={src} />
  </CompanyLogoCircle>
);

CompanyLogo.propTypes = { src: PropTypes.string };

export default CompanyLogo;
