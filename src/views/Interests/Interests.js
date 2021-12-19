import React from 'react';
import Typography from 'antd/lib/typography';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import { message } from '../../utils/message';
import CodingImage from '../../assets/images/coding_interest-min.jpg';
import TechImage from '../../assets/images/tech_interest-min.jpg';
import BlogImage from '../../assets/images/blog_interest-min.jpg';
import DesignImage from '../../assets/images/design_interest-min.jpg';
import SetupImage from '../../assets/images/setup_interest-min.jpg';
import MoviewsImage from '../../assets/images/movies_interest-min.jpg';
import InstagramImage from '../../assets/images/instagram_interest-min.jpg';
import SharingImage from '../../assets/images/sharing_interest-min.jpg';
import Helmet from '../../components/SEO/Helmet';
import NavigationButtons from '../../components/NavigationButtons';
import routesConfig from '../../utils/routesConfig';
import {
  MyInterestCard,
  InterestsContainer,
  InterestsContainerOverlay,
  InterestDescription,
  InterestImage
} from './styles';

const { Title } = Typography;

const Interests = () => {
  Helmet(message.seo.interests.title, message.seo.interests.desc);

  const interests = [
    {
      title: message.body.interests.titles.coding,
      desc: message.body.interests.desc.coding,
      pic: CodingImage
    },
    {
      title: message.body.interests.titles.tech,
      desc: message.body.interests.desc.tech,
      pic: TechImage
    },
    {
      title: message.body.interests.titles.blog,
      desc: message.body.interests.desc.blog,
      pic: BlogImage
    },

    {
      title: message.body.interests.titles.ux,
      desc: message.body.interests.desc.ux,
      pic: DesignImage
    },
    {
      title: message.body.interests.titles.setup,
      desc: message.body.interests.desc.setup,
      pic: SetupImage
    },
    {
      title: message.body.interests.titles.movies,
      desc: message.body.interests.desc.movies,
      pic: MoviewsImage
    },
    {
      title: message.body.interests.titles.instagram,
      desc: message.body.interests.desc.instagram,
      pic: InstagramImage
    },
    {
      title: message.body.interests.titles.sharing,
      desc: message.body.interests.desc.sharing,
      pic: SharingImage
    }
  ];

  return (
    <InterestsContainer>
      <Row>
        <Col flex="none">
          <Title className="fontwe600 text_50 black mabo0">{message.titles.interests}</Title>;
        </Col>

        <Col flex="auto">
          <NavigationButtons
            leftTitle="Social life"
            rightTitle="Skillset"
            toLeft={routesConfig.PORTFOLIO.Index.url}
            toRight={routesConfig.PORTFOLIO.SkillSet.url}
          />
        </Col>
      </Row>
      <Row gutter={32}>
        {interests.map((interest) => (
          <Col xs={24} sm={24} md={8} lg={6} key={interest.title} className="mabo32">
            <MyInterestCard>
              <InterestImage src={interest.pic} preview={false} />

              <InterestsContainerOverlay>
                <Title className="fontwe600 text_24 white center">{interest.title}</Title>

                <InterestDescription className="fontwe500 white center">
                  {interest.desc}
                </InterestDescription>
              </InterestsContainerOverlay>
            </MyInterestCard>
          </Col>
        ))}
      </Row>
    </InterestsContainer>
  );
};

export default Interests;
