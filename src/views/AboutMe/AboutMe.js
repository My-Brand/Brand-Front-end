import React from 'react';
import Typography from 'antd/lib/typography';
import { Link } from 'react-router-dom';
import Image from 'antd/lib/image';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import { message } from '../../utils/message';
import HelloWorldLogo from '../../assets/images/hello_world_logo2a.png';
import Instagram from '../../assets/icons/instagram.png';
import LinkedIn from '../../assets/icons/linkedin.png';
import GitHub from '../../assets/icons/github.png';
import Google from '../../assets/icons/google-plus.png';
import StackOverflow from '../../assets/icons/stack-overflow.png';
import Helmet from '../../components/SEO/Helmet';
import FooterNavigation from '../../components/FooterNavigation';
import routesConfig from '../../utils/routesConfig';
import {
  AboutContainer,
  AboutTextContainer,
  AboutLogoContainer,
  AboutSocialMediaIconsContainer,
  CommunityText
} from './styles';

const { Title } = Typography;

const AboutMe = () => {
  Helmet(
    'Issa Dev | Social Network Contribution',
    'Open Source Contribution has become my best inspiring work. I share skills on my social media especially Instagram as my specialty.'
  );
  return (
    <AboutContainer>
      <AboutLogoContainer>
        <Image src={HelloWorldLogo} preview={false} className="myLogo_About" />
      </AboutLogoContainer>

      <Title className="black fontwe600 mabo64 text_50">{message.titles.aboutMe.title1}</Title>

      <AboutTextContainer className="mabo32">
        <p className="text_16 ">
          {message.body.about.contributionText.text1}{' '}
          <Link to="#" className="blue">
            {message.body.about.contributionText.begginerLink}
          </Link>{' '}
          {message.body.about.contributionText.text2}
        </p>
      </AboutTextContainer>

      <Row gutter={16} className="communit_cont">
        <Col>
          <CommunityText className="mabo32">{message.body.about.joinCommunity}</CommunityText>
        </Col>

        <Col>
          <ExpandMoreOutlinedIcon className="animated_down_arrow" />
        </Col>
      </Row>

      <AboutSocialMediaIconsContainer>
        <Image src={Instagram} preview={false} className="social_icon" />
        <Image src={LinkedIn} preview={false} className="social_icon" />
        <Image src={GitHub} preview={false} className="social_icon" />
        <Image src={Google} preview={false} className="social_icon" />
        <Image src={StackOverflow} preview={false} className="social_icon" />
      </AboutSocialMediaIconsContainer>

      <FooterNavigation leftTitle="Home" rightTitle="Interests" toLeft={routesConfig.PORTFOLIO.url} toRight={routesConfig.PORTFOLIO.Interests.url} />
    </AboutContainer>
  );
};

export default AboutMe;
