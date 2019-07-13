import React from 'react';
import HomeExplorer from '../components/HomeExplorer/HomeExplorer';
import HomePlus from '../components/HomePlus/HomePlus';
import HomeHost from '../components/HomeHost/HomeHost';
import HomeRecommendation from '../components/HomeRecommendation/HomeRecommendation';
import Layout from './Layout';
import HomeBanner from '../components/HomeBanner/HomeBanner';

const Home = () => (
  <Layout>
    <HomeBanner />
    <div>
      <HomeExplorer />
      <HomeRecommendation />
      <HomePlus />
      <HomeHost />
    </div>
  </Layout>
);

export default Home;
