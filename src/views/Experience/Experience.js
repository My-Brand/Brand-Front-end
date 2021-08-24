import React from 'react';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import ClockCircleOutlined from '@ant-design/icons/ClockCircleOutlined';
import Typography from 'antd/lib/typography';
import Image from 'antd/lib/image';
import LeftCircleOutlined from '@ant-design/icons/LeftCircleOutlined';
import RightCircleOutlined from '@ant-design/icons/RightCircleOutlined';
import ResponsibilityIcon from '../../assets/icons/responsibility.png';
import RocketIcon from '../../assets/icons/rocket.png';
import { CompanyLogo } from '../../components/Experience';
import { ExperienceContents, ExperienceYears, HeadSub, ExperienceFooter } from './styles';

const { Title } = Typography;

const Experience = () => (
  <Row gutter={16} className="exp_cont" align="middle">
    <Col span={1}>
      <LeftCircleOutlined className="text_32 pointer" />
    </Col>

    <Col span={20}>
      <ExperienceContents className="bg_white relative">
        <CompanyLogo />

        <Title className="fontwe600 text_32 mabo0 black">Code of Africa</Title>
        <ExperienceYears className="mabo0 fontwe500 text_16 whiteBlack">2 Years</ExperienceYears>

        <Row gutter={12} align="middle" className="mato32">
          <Col>
            <ClockCircleOutlined className="text_32" />
          </Col>
          <Col>
            <Title className="text_16 fontwe600">
              March 2021 - July 2022 <HeadSub> - 2 Years of experience</HeadSub>
            </Title>
          </Col>
        </Row>

        <Row gutter={12} align="middle" className="mato16">
          <Col>
            <Image preview={false} width={28} src={ResponsibilityIcon} />
          </Col>
          <Col>
            <Title className="text_16 fontwe600">Frontend web developer</Title>
            <HeadSub>Full time</HeadSub>
          </Col>
        </Row>

        <Row gutter={12} align="middle" className="mato16">
          <Col>
            <Image preview={false} width={28} src={RocketIcon} />
          </Col>
          <Col>
            <Title className="text_16 fontwe600">Projects</Title>
            <HeadSub>Jasiri, Uzuri, Snap, OX Delivers, ....</HeadSub>
          </Col>
        </Row>

        <ExperienceFooter className="mato32 whiteBlack">
          This is where I got my first experience, It was from zero when I joined this company but
          can't imagine how everything improved only within 3 months of internship
        </ExperienceFooter>
      </ExperienceContents>
    </Col>

    <Col span={1} style={{ marginLeft: '24px' }}>
      <RightCircleOutlined className="text_32 pointer" />
    </Col>
  </Row>
);

export default Experience;
