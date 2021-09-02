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
import {
  MyInterestCard,
  InterestsContainer,
  InterestsContainerOverlay,
  InterestDescription,
  InterestImage
} from './styles';

const { Title } = Typography;

const Interests = () => {
  Helmet(
    'Issa Dev | My favorites',
    'Coding, Blogging, UI/UX, Instagram, Movies, Good Office Setup, Technical Staffs, and Sharing are my great definitions!'
  );

  return (
    <InterestsContainer>
      <Title className="fontwe600 text_50 black mabo0">{message.titles.interests}</Title>;
      <Row gutter={32} className="interests_cont">
        <Col xs={24} sm={24} md={8} lg={6} className="mabo32">
          <MyInterestCard>
            <InterestImage src={CodingImage} preview={false} />

            <InterestsContainerOverlay>
              <Title className="fontwe600 text_24 white center">Coding</Title>

              <InterestDescription className="fontwe500 white center">
                I fall in love with coding since I was a kid! I fall in love with coding since I was
                a kid! I fall in love with coding since I was a kid! I fall in love with coding
                since I was a kid!
              </InterestDescription>
            </InterestsContainerOverlay>
          </MyInterestCard>
        </Col>

        <Col xs={24} sm={24} md={8} lg={6} className="mabo32">
          <MyInterestCard>
            <InterestImage src={TechImage} preview={false} />

            <InterestsContainerOverlay>
              <Title className="fontwe600 text_24 white center">Technology</Title>

              <InterestDescription className="fontwe500 white center">
                I fall in love with coding since I was a kid! I fall in love with coding since I was
                a kid! I fall in love with coding since I was a kid! I fall in love with coding
                since I was a kid!
              </InterestDescription>
            </InterestsContainerOverlay>
          </MyInterestCard>
        </Col>

        <Col xs={24} sm={24} md={8} lg={6} className="mabo32">
          <MyInterestCard>
            <InterestImage src={BlogImage} preview={false} />

            <InterestsContainerOverlay>
              <Title className="fontwe600 text_24 white center capitalize">Blogging</Title>

              <InterestDescription className="fontwe500 white center">
                I fall in love with coding since I was a kid! I fall in love with coding since I was
                a kid! I fall in love with coding since I was a kid! I fall in love with coding
                since I was a kid!
              </InterestDescription>
            </InterestsContainerOverlay>
          </MyInterestCard>
        </Col>

        <Col xs={24} sm={24} md={8} lg={6} className="mabo32">
          <MyInterestCard>
            <InterestImage src={DesignImage} preview={false} />

            <InterestsContainerOverlay>
              <Title className="fontwe600 text_24 white center capitalize">UI & UX Design</Title>

              <InterestDescription className="fontwe500 white center">
                I fall in love with coding since I was a kid! I fall in love with coding since I was
                a kid! I fall in love with coding since I was a kid! I fall in love with coding
                since I was a kid!
              </InterestDescription>
            </InterestsContainerOverlay>
          </MyInterestCard>
        </Col>

        <Col xs={24} sm={24} md={8} lg={6} className="mabo32">
          <MyInterestCard>
            <InterestImage src={SetupImage} preview={false} />

            <InterestsContainerOverlay>
              <Title className="fontwe600 text_24 white center capitalize">office setup</Title>

              <InterestDescription className="fontwe500 white center">
                I fall in love with coding since I was a kid! I fall in love with coding since I was
                a kid! I fall in love with coding since I was a kid! I fall in love with coding
                since I was a kid!
              </InterestDescription>
            </InterestsContainerOverlay>
          </MyInterestCard>
        </Col>

        <Col xs={24} sm={24} md={8} lg={6} className="mabo32">
          <MyInterestCard>
            <InterestImage src={MoviewsImage} preview={false} />

            <InterestsContainerOverlay>
              <Title className="fontwe600 text_24 white center capitalize">movies</Title>

              <InterestDescription className="fontwe500 white center">
                I fall in love with coding since I was a kid! I fall in love with coding since I was
                a kid! I fall in love with coding since I was a kid! I fall in love with coding
                since I was a kid!
              </InterestDescription>
            </InterestsContainerOverlay>
          </MyInterestCard>
        </Col>

        <Col xs={24} sm={24} md={8} lg={6} className="mabo32">
          <MyInterestCard>
            <InterestImage src={InstagramImage} preview={false} />

            <InterestsContainerOverlay>
              <Title className="fontwe600 text_24 white center capitalize">Instagram</Title>

              <InterestDescription className="fontwe500 white center">
                I fall in love with coding since I was a kid! I fall in love with coding since I was
                a kid! I fall in love with coding since I was a kid! I fall in love with coding
                since I was a kid!
              </InterestDescription>
            </InterestsContainerOverlay>
          </MyInterestCard>
        </Col>

        <Col xs={24} sm={24} md={8} lg={6} className="mabo32">
          <MyInterestCard>
            <InterestImage src={SharingImage} preview={false} />

            <InterestsContainerOverlay>
              <Title className="fontwe600 text_24 white center capitalize">sharing</Title>

              <InterestDescription className="fontwe500 white center">
                I fall in love with coding since I was a kid! I fall in love with coding since I was
                a kid! I fall in love with coding since I was a kid! I fall in love with coding
                since I was a kid!
              </InterestDescription>
            </InterestsContainerOverlay>
          </MyInterestCard>
        </Col>
      </Row>
    </InterestsContainer>
  );
};

export default Interests;
