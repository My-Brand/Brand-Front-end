import React, { useState, useEffect } from 'react';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import RocketOutlined from '@ant-design/icons/RocketOutlined';
import LocalLibraryOutlinedIcon from '@material-ui/icons/LocalLibraryOutlined';
import { Link, useHistory } from 'react-router-dom';
import { message } from '../../utils/message';
import routesConfig from '../../utils/routesConfig';
import { StyledSideMenu, SideMenuContents, SideMenuIconContainer, SideMenuToolTip } from './styles';

const SideMenu = () => {
  const [activeMenu, setActiveMenu] = useState(1);
  const history = useHistory();
  const path = history.location.pathname;

  useEffect(() => {
    if (path === routesConfig.PORTFOLIO.url || path.includes(routesConfig.PORTFOLIO.Index.url)) {
      setActiveMenu(1);
    } else if (path.includes(routesConfig.PROJECTS.url)) {
      setActiveMenu(2);
    } else if (path.includes(routesConfig.BLOG.url)) {
      setActiveMenu(3);
    }
  }, [path]);

  return (
    <StyledSideMenu className="bg_blue white place_content_center">
      <SideMenuContents>
        <Link to={routesConfig.PORTFOLIO.url} className="white" onClick={() => setActiveMenu(1)}>
          <SideMenuIconContainer className="relative menu_icon_cont">
            <SideMenuToolTip className="tooltip">{message.toolTips.menu.home}</SideMenuToolTip>
            <HomeOutlinedIcon
              className={`text_32 pointer menu_icon ${activeMenu === 1 && 'active'}`}
            />
          </SideMenuIconContainer>
        </Link>

        <Link to={routesConfig.PROJECTS.url} className="white" onClick={() => setActiveMenu(2)}>
          <SideMenuIconContainer className="relative menu_icon_cont">
            <SideMenuToolTip className="tooltip">{message.toolTips.menu.projects}</SideMenuToolTip>
            <RocketOutlined
              className={`text_32 pointer menu_icon ${activeMenu === 2 && 'active'}`}
            />
          </SideMenuIconContainer>
        </Link>

        <Link to={routesConfig.BLOG.url} className="white" onClick={() => setActiveMenu(3)}>
          <SideMenuIconContainer className="relative menu_icon_cont">
            <SideMenuToolTip className="tooltip">{message.toolTips.menu.blog}</SideMenuToolTip>
            <LocalLibraryOutlinedIcon
              className={`text_32 pointer menu_icon ${activeMenu === 3 && 'active'}`}
            />
          </SideMenuIconContainer>
        </Link>
      </SideMenuContents>
    </StyledSideMenu>
  );
};

export default SideMenu;
