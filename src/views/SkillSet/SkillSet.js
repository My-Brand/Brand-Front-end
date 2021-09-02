import React from 'react';
import Typography from 'antd/lib/typography';
import Row from 'antd/lib/row';
import { message } from '../../utils/message';
import SkillCategory from '../../components/SkillSet';
import Helmet from '../../components/SEO/Helmet';
import { SkillSetContainer, TopThree, StillLearningCont } from './styles';

const { Title } = Typography;

const SkillSet = () => {
  Helmet(
    'Issa Dev | Skillset',
    'Still learning but specialized in HTML, CSS, ReactJS, Styled Components, Redux, and also know NextJS, SEO, Wordpress, DevOps, Jira, RedMine, and more.'
  );

  return (
    <SkillSetContainer>
      <Title className="fontwe600 text_50 black mabo32 relative">
        {message.titles.skillset}
        <TopThree className="fontwe500 whiteGrey ">{message.body.skillset.beta_text}</TopThree>
      </Title>
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
