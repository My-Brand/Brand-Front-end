import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PortfolioMenu from '../../../components/PortfolioMenu';
import AboutMe from '../../../views/AboutMe/AboutMe';
import Interests from '../../../views/Interests';
import SkillSet from '../../../views/SkillSet';
import Experience from '../../../views/Experience';
import { EntirePortfolioContainer, EntirePortfolioContents } from '../../../utils/commonStyles';
import routesConfig from '../../../utils/routesConfig';

const Portfolio = () => (
  <EntirePortfolioContainer>
    <EntirePortfolioContents>
      <PortfolioMenu />

      <Switch>
        <Route path={routesConfig.PORTFOLIO.Index.url} component={AboutMe} exact />
        <Route path={routesConfig.PORTFOLIO.Interests.url} component={Interests} exact />
        <Route path={routesConfig.PORTFOLIO.SkillSet.url} component={SkillSet} exact />
        <Route path={routesConfig.PORTFOLIO.Experience.url} component={Experience} exact />
      </Switch>
    </EntirePortfolioContents>
  </EntirePortfolioContainer>
);

export default Portfolio;
