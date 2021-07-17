import React from 'react';
import Image from 'antd/lib/image';
import Instagram from '../../assets/icons/instagram.png';
import LinkedIn from '../../assets/icons/linkedin.png';
import GitHub from '../../assets/icons/github.png';
import Google from '../../assets/icons/google-plus.png';
import StackOverflow from '../../assets/icons/stack-overflow.png';
import { SocialMediaIconsContainer, SocialMediaInnerContainer } from './styles';

const SocialMediaIcons = () => (
  <SocialMediaIconsContainer>
    <SocialMediaInnerContainer>
      <Image src={Instagram} preview={false} width={40} />
      <Image src={LinkedIn} preview={false} width={40} />
      <Image src={GitHub} preview={false} width={40} />
      <Image src={Google} preview={false} width={40} />
      <Image src={StackOverflow} preview={false} width={40} />
    </SocialMediaInnerContainer>
  </SocialMediaIconsContainer>
);

export default SocialMediaIcons;
