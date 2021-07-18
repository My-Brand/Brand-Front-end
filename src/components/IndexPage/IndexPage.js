import React from 'react';
import Typography from 'antd/lib/typography';
import Image from 'antd/lib/image';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { Link } from 'react-router-dom';
import { message } from '../../utils/message';
import MyLogo from '../../assets/images/Logo.jpg';
import SocialMediaIcons from '../SocialMediaIcons';
import routesConfig from '../../utils/routesConfig';
import {
  PageContainer,
  WelcomeContainer,
  GetToKnowButton,
  ButtonCircle,
  CircleAndText,
  HelloContainer,
  NotifyIcon,
  ButtonNextIcons,
  MyLogoContainer,
  IndexButtonText
} from './styles';

const { Title } = Typography;

const IndexPage = () => (
  <PageContainer>
    <HelloContainer>
      <Title className="fontwe700 text_stroke text_100 ">{message.titles.index.title1.text1}</Title>

      <MyLogoContainer>
        <Image src={MyLogo} preview={false} className="myLogo_img" />
        <NotifyIcon />
      </MyLogoContainer>
    </HelloContainer>

    <Title className="fontwe700 text_stroke text_100 text_center_sm">
      {message.titles.index.title1.text2}
    </Title>

    <Title className="text_24 whiteBlack fontwe700 mabo64 frontend_text  text_center_sm">
      {message.titles.index.title2}
    </Title>

    <WelcomeContainer className="mabo64 text_center_sm">
      <Title className="fontwe300 text_24 grey mabo64">{message.body.index.text1}</Title>
      <Title className="fontwe300 text_24 grey">{message.body.index.text2}</Title>
    </WelcomeContainer>

    <Link to={routesConfig.PORTFOLIO.Index.url}>
      <GetToKnowButton className="text_32 fontwe600 blue pointer">
        <CircleAndText>
          <ButtonCircle />{' '}
          <IndexButtonText className="text_24">{message.buttons.index}</IndexButtonText>
        </CircleAndText>

        <ButtonNextIcons>
          <NavigateNextIcon className="animate_index_button text_32" />
          <NavigateNextIcon
            style={{ marginLeft: '-12px' }}
            className="animate_index_button text_32"
          />
        </ButtonNextIcons>
      </GetToKnowButton>
    </Link>

    <SocialMediaIcons />
  </PageContainer>
);

export default IndexPage;
