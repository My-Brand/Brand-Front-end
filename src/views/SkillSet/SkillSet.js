import React from 'react';
import Typography from 'antd/lib/typography';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import { message } from '../../utils/message';
import SkillCategory from '../../components/SkillSet';
import NavigationButtons from '../../components/NavigationButtons';
import routesConfig from '../../utils/routesConfig';
import Helmet from '../../components/SEO/Helmet';
import { SkillSetContainer, TopThree, StillLearningCont } from './styles';

const { Title } = Typography;

const SkillSet = () => {
  Helmet(message.seo.skillset.title, message.seo.skillset.desc);

  return (
    <SkillSetContainer>
      <Row>
        <Col flex="auto">
          <Title className="fontwe600 text_50 black mabo32 relative">
            {message.titles.skillset}
            <TopThree className="fontwe500 whiteGrey ">{message.body.skillset.beta_text}</TopThree>
          </Title>
        </Col>

        <Col flex="auto">
          <NavigationButtons
            leftTitle="Interests"
            rightTitle="Experience"
            toLeft={routesConfig.PORTFOLIO.Interests.url}
            toRight={routesConfig.PORTFOLIO.Experience.url}
          />
        </Col>
      </Row>

      <Row gutter={24}>
        <SkillCategory title="UI & UX" />
        <SkillCategory title="Languages" />
        <SkillCategory title="Libraries & Tools" />
        <SkillCategory title="Others" />
      </Row>

      <StillLearningCont className="mato16">
        <Title className="fontwe300 text_16_res grey">
          &#128591; {message.body.skillset.footer_text}
        </Title>
      </StillLearningCont>
    </SkillSetContainer>
  );
};

export default SkillSet;
