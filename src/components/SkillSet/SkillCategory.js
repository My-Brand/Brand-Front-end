import React from 'react';
import Col from 'antd/lib/col';
import Typography from 'antd/lib/typography';
import PropTypes from 'prop-types';
import BalsamiqImage from '../../assets/icons/balsamiq.png';
import PhotoshopImage from '../../assets/icons/photoshop.png';
import XDImage from '../../assets/icons/xd.png';
import RateImage from '../../assets/icons/rate.png';
import RatedImage from '../../assets/icons/rated.png';
import SingelSkill from './SingleSkill';
import { SkillCategoryContainer, SkillCircleIndicator } from './styles';

const { Title } = Typography;

const SkillCategory = ({ title }) => (
  <Col xs={24} sm={12} md={6} className="mabo32">
    <SkillCategoryContainer>
      <SkillCircleIndicator />
      <Title className="fontwe600 text_24 black mabo32">{title}</Title>

      <SingelSkill img={BalsamiqImage} rated={RatedImage} unrated={RateImage} />

      <SingelSkill img={XDImage} rated={RatedImage} unrated={RateImage} />
      <SingelSkill img={PhotoshopImage} rated={RatedImage} unrated={RateImage} />
    </SkillCategoryContainer>
  </Col>
);

SkillCategory.propTypes = { title: PropTypes.string };

export default SkillCategory;
