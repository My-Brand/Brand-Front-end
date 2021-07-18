import React from 'react';
import Typography from 'antd/lib/typography';
import { Link } from 'react-router-dom';
import Image from 'antd/lib/image';
import { message } from '../../utils/message';
import HelloWorldLogo from '../../assets/images/hello_world_logo2a.png';
import Instagram from '../../assets/icons/instagram.png';
import LinkedIn from '../../assets/icons/linkedin.png';
import GitHub from '../../assets/icons/github.png';
import Google from '../../assets/icons/google-plus.png';
import StackOverflow from '../../assets/icons/stack-overflow.png';
import {
  AboutContainer,
  AboutTextContainer,
  AboutLogoContainer,
  AboutSocialMediaIconsContainer
} from './styles';

const { Title } = Typography;

const AboutMe = () => (
  <AboutContainer>
    <AboutLogoContainer>
      <Image src={HelloWorldLogo} preview={false} width={50} />
    </AboutLogoContainer>

    <Title className="black fontwe600 mabo64">{message.titles.aboutMe.title1}</Title>

    <AboutTextContainer className="mabo64">
      <p className="text_16 ">
        {message.body.about.contributionText.text1}{' '}
        <Link to="#">{message.body.about.contributionText.begginerLink}</Link>{' '}
        {message.body.about.contributionText.text2}
      </p>
    </AboutTextContainer>

    <p className="text_16 mabo64">
      {message.body.about.joinCommunity.text1}{' '}
      <Link to="#" className="blue">
        {message.body.about.joinCommunity.instagramLink}
      </Link>{' '}
      {message.body.about.joinCommunity.text2}
    </p>

    <AboutSocialMediaIconsContainer>
      <Image src={Instagram} preview={false} className="social_icon" />
      <Image src={LinkedIn} preview={false} className="social_icon" />
      <Image src={GitHub} preview={false} className="social_icon" />
      <Image src={Google} preview={false} className="social_icon" />
      <Image src={StackOverflow} preview={false} className="social_icon" />
    </AboutSocialMediaIconsContainer>
  </AboutContainer>
);

export default AboutMe;
