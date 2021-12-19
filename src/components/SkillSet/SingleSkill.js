import React from 'react';
import Typography from 'antd/lib/typography';
import Image from 'antd/lib/image';
import PropTypes from 'prop-types';
import { SingelSkillContainer, SkillTitleAndRate, RatesContainer } from './styles';

const { Title } = Typography;

const SingelSkill = ({ img, rated, unrated }) => (
  <SingelSkillContainer>
    <Image preview={false} width={25} src={img} />

    <SkillTitleAndRate>
      <Title className="fontwe600 text_16_res whiteBlack capitalize">Balsamiq Design</Title>

      <RatesContainer>
        <Image preview={false} width={12} src={rated} />
        <Image preview={false} width={12} src={rated} />
        <Image preview={false} width={12} src={rated} />
        <Image preview={false} width={12} src={rated} />
        <Image preview={false} width={12} src={unrated} />
      </RatesContainer>
    </SkillTitleAndRate>
  </SingelSkillContainer>
);

SingelSkill.propTypes = { img: PropTypes.any, rated: PropTypes.any, unrated: PropTypes.any };

export default SingelSkill;
