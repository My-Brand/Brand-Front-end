/* eslint-disable indent */
import React, { useState, useEffect } from 'react';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import LeftCircleOutlined from '@ant-design/icons/LeftCircleOutlined';
import RightCircleOutlined from '@ant-design/icons/RightCircleOutlined';
import ExperienceContents from '../../components/Experience';
import COALogo from '../../assets/images/coaLogo.png';
import { message } from '../../utils/message';
import NavigationButtons from '../../components/NavigationButtons';
import routesConfig from '../../utils/routesConfig';
import Helmet from '../../components/SEO/Helmet';
import { NavigationContainer } from './styles';

const Experience = () => {
  Helmet(message.seo.experience.title, message.seo.experience.desc);

  const [experienceIndex, setexperienceIndex] = useState(0);
  const [isScreenSmall, setIsScreenSmall] = useState(false);

  const handleScreenChange = () => {
    if (window.innerWidth <= 768) {
      setIsScreenSmall(true);
    } else {
      setIsScreenSmall(false);
    }
  };

  useEffect(() => {
    handleScreenChange();
    window.addEventListener('resize', () => handleScreenChange());
  }, []);

  const experiences = ['Awesomity Lab', 'Code Of Africa', 'Deriv Com'];
  const displayExperiences = [experiences[experienceIndex]];

  const handleSlideLeft = () => {
    if (experienceIndex > 0) setexperienceIndex(experienceIndex - 1);
  };

  const handleSlideRight = () => {
    if (experienceIndex < experiences.length - 1) setexperienceIndex(experienceIndex + 1);
  };

  return (
    <>
      <NavigationContainer className="mabo24">
        <NavigationButtons
          leftTitle="Skillset"
          rightTitle="......"
          toLeft={routesConfig.PORTFOLIO.SkillSet.url}
          toRight="#"
        />
      </NavigationContainer>

      <Row gutter={16} className="exp_cont" align="middle">
        <Col span={1} className={`hide_sm ${experienceIndex === 0 && 'disabled'}`}>
          <LeftCircleOutlined className="text_32 pointer" onClick={handleSlideLeft} />
        </Col>

        <Col xs={24} lg={21}>
          {isScreenSmall
            ? experiences.map((experience, index) => (
                <ExperienceContents
                  key={index}
                  logo={COALogo}
                  exprienceYears={3}
                  fromToTo="July 2020 - August 2021"
                  companyName={experience}
                  jobType="FUll time"
                  jobTitle="Frontend Web Developer"
                  projects="Jasiri, Snap, OX Deliveries, Uzuri, Irembo"
                  footer="This is where I got my first experience, It was from zero when I joined this company but
                can't imagine how everything improved only within 3 months of internship"
                />
              ))
            : displayExperiences.map((experience, index) => (
                <ExperienceContents
                  key={index}
                  logo={COALogo}
                  exprienceYears={3}
                  fromToTo="July 2020 - August 2021"
                  companyName={experience}
                  jobType="FUll time"
                  jobTitle="Frontend Web Developer"
                  projects="Jasiri, Snap, OX Deliveries, Uzuri, Irembo"
                  footer="This is where I got my first experience, It was from zero when I joined this company but
                can't imagine how everything improved only within 3 months of internship"
                />
              ))}
        </Col>

        <Col
          span={1}
          style={{ marginLeft: '24px' }}
          className={`hide_sm ${experienceIndex === experiences.length - 1 && 'disabled'}`}
        >
          <RightCircleOutlined className="text_32 pointer" onClick={handleSlideRight} />
        </Col>
      </Row>
    </>
  );
};
export default Experience;
