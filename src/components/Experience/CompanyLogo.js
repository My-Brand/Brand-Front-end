import React from 'react';
import Image from 'antd/lib/image';
import { CompanyLogoCircle } from './styles';
import COALogo from '../../assets/images/coaLogo.png';

const CompanyLogo = () => (
  <CompanyLogoCircle className="bg_white">
    <Image preview={false} width={100} src={COALogo} />
  </CompanyLogoCircle>
);

export default CompanyLogo;
