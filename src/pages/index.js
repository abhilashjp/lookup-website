import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import UltimateFeatures from 'sections/ultimate-features';
import Features from 'sections/features';
import IntroVideo from 'sections/intro-video';
import UsefulFeatures from 'sections/useful-features';
import Widgets from 'sections/widgets';
import Pricing from 'sections/pricing';
import Faq from 'sections/faq';
import DemoForm from 'sections/demo-form';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="Easiest way to validate Tax IDs across the world. 100+ countries supported" />
        <Banner />
        <DemoForm />
        <UltimateFeatures />
        <Features />
        <IntroVideo />
        <UsefulFeatures />
        <Widgets />
        <Pricing />
        <Faq />
      </Layout>
    </ThemeProvider>
  );
}
