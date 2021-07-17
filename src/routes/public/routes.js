import React from 'react';
import Layout from 'antd/lib/layout';
import SideMenu from '../../components/SideMenu';
import AnimatedBackgroundItems from '../../components/AnimatedBackgroundItems';
import IndexPage from '../../components/IndexPage';

const PuclicRoutes = () => (
  <Layout className="height_full" style={{ position: 'relative' }}>
    <SideMenu />
    <Layout className="contents_layout">
      <AnimatedBackgroundItems.Circles />
      <AnimatedBackgroundItems.Hills />
      <IndexPage />
    </Layout>
  </Layout>
);

export default PuclicRoutes;
