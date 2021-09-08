import React from 'react';
import PropTypes from 'prop-types';
import ClockCircleOutlined from '@ant-design/icons/ClockCircleOutlined';
import Typography from 'antd/lib/typography';
import Image from 'antd/lib/image';
import { ExperienceContentsContainer, ExperienceYears, HeadSub, ExperienceFooter } from './styles';
import ResponsibilityIcon from '../../assets/icons/responsibility.png';
import RocketIcon from '../../assets/icons/rocket.png';
import CompanyLogo from './CompanyLogo';
import { Div, Flex } from '../../utils/commonStyles';

const { Title } = Typography;

const ExperienceContents = ({ logo, companyName, exprienceYears, fromToTo, jobTitle, jobType, projects, footer }) => <ExperienceContentsContainer className="bg_white relative">
          <CompanyLogo src={logo} />

          <Title className="fontwe600 text_32 mabo0 black text_center_sm">{companyName}</Title>
          <ExperienceYears className="fontwe500 text_16 whiteBlack text_center_sm">
            {exprienceYears} Years
          </ExperienceYears>

          <Flex className="mato16" direction_sm="column">
            <Div>
              <ClockCircleOutlined className="text_32" />
            </Div>
            <Div>
              <Title className="text_16 fontwe600">{fromToTo}</Title>
            </Div>
          </Flex>

          <Flex className="mato16" direction_sm="column">
            <Div>
              <Image preview={false} width={28} src={ResponsibilityIcon} />
            </Div>
            <Div>
              <Title className="text_16 fontwe600">{jobTitle}</Title>
              <HeadSub>{jobType}</HeadSub>
            </Div>
          </Flex>

          <Flex className="mato16" direction_sm="column">
            <Div>
              <Image preview={false} width={28} src={RocketIcon} />
            </Div>
            <Div>
              <Title className="text_16 fontwe600">Projects</Title>
              <HeadSub>{projects} </HeadSub>
            </Div>
          </Flex>
          <ExperienceFooter className="mato32 whiteBlack text_center_sm">
            {footer}
          </ExperienceFooter>
        </ExperienceContentsContainer>;

ExperienceContents.propTypes = {
  logo: PropTypes.string,
  companyName: PropTypes.string,
  exprienceYears: PropTypes.number,
  fromToTo: PropTypes.string,
  jobType: PropTypes.string,
  jobTitle: PropTypes.string,
  projects: PropTypes.string,
  footer: PropTypes.string
};

export default ExperienceContents;
