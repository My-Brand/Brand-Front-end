import React from 'react';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import RocketOutlined from '@ant-design/icons/RocketOutlined';
import LocalLibraryOutlinedIcon from '@material-ui/icons/LocalLibraryOutlined';
import { message } from '../../utils/message';
import { StyledSideMenu, SideMenuContents, SideMenuIconContainer, SideMenuToolTip } from './styles';

const SideMenu = () => (
  <StyledSideMenu className="bg_blue white place_content_center">
    <SideMenuContents className="">
      <SideMenuIconContainer className="relative menu_icon_cont">
        <SideMenuToolTip className="tooltip">{message.toolTips.menu.home}</SideMenuToolTip>
        <HomeOutlinedIcon className="text_32 pointer menu_icon active" />
      </SideMenuIconContainer>

      <SideMenuIconContainer className="relative menu_icon_cont">
        <SideMenuToolTip className="tooltip">{message.toolTips.menu.projects}</SideMenuToolTip>
        <RocketOutlined className="text_32 menu_icon pointer" />
      </SideMenuIconContainer>

      <SideMenuIconContainer className="relative menu_icon_cont">
        <SideMenuToolTip className="tooltip">{message.toolTips.menu.blog}</SideMenuToolTip>
        <LocalLibraryOutlinedIcon className="text_32 menu_icon pointer" />
      </SideMenuIconContainer>
    </SideMenuContents>
  </StyledSideMenu>
);

export default SideMenu;
