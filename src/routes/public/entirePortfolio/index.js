import { Switch, Route } from 'react-router-dom';
import routesConfig from '../../../utils/routesConfig';
import IndexPage from '../../../views/IndexPage';
import Portfolio from './portfolio';

const EntirePortfolio = () => (
  <Switch>
    <Route path={routesConfig.PORTFOLIO.url} component={IndexPage} exact />
    <Route path={routesConfig.PORTFOLIO.Index.url} component={Portfolio} />
  </Switch>
);

export default EntirePortfolio;
