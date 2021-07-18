import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import CodeOutlinedIcon from '@material-ui/icons/CodeOutlined';
import Image from 'antd/lib/image';
import ExperienceIcon from '../../assets/icons/experience.png';
import routesConfig from '../../utils/routesConfig';
import { PortfolioMenuContainer, PortfolioMenuIcon } from './styles';

const PortfolioMenu = () => {
  const [activeMenu, setActiveMenu] = useState(1);
  const history = useHistory();
  const path = history.location.pathname;

  useEffect(() => {
    if (path === routesConfig.PORTFOLIO.Index.url) {
      setActiveMenu(1);
    } else if (path === routesConfig.PORTFOLIO.Interests.url) {
      setActiveMenu(2);
    } else if (path === routesConfig.PORTFOLIO.SkillSet.url) {
      setActiveMenu(3);
    } else if (path === routesConfig.PORTFOLIO.Experience.url) {
      setActiveMenu(4);
    }
  }, [path]);

  return (
    <PortfolioMenuContainer>
      <Link to={routesConfig.PORTFOLIO.Index.url} className="black">
        <PortfolioMenuIcon className={`pointer home_menu ${activeMenu === 1 && 'active'}`}>
          <PeopleAltOutlinedIcon className="text_32" />
        </PortfolioMenuIcon>
      </Link>

      <Link to={routesConfig.PORTFOLIO.Interests.url} className="black">
        <PortfolioMenuIcon className={`pointer home_menu ${activeMenu === 2 && 'active'}`}>
          <FavoriteBorderOutlinedIcon className="text_32" />
        </PortfolioMenuIcon>
      </Link>

      <Link to={routesConfig.PORTFOLIO.SkillSet.url} className="black">
        <PortfolioMenuIcon className={`pointer home_menu ${activeMenu === 3 && 'active'}`}>
          <CodeOutlinedIcon className="text_32" />
        </PortfolioMenuIcon>
      </Link>

      <Link to={routesConfig.PORTFOLIO.Experience.url} className="black">
        <PortfolioMenuIcon className={`pointer home_menu ${activeMenu === 4 && 'active'}`}>
          <Image src={ExperienceIcon} className="experience_icon" preview={false} />
        </PortfolioMenuIcon>
      </Link>
    </PortfolioMenuContainer>
  );
};

export default PortfolioMenu;
