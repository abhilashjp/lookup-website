/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import UltimateFeature from 'components/cards/ultimate-feature';

import bulb from 'assets/images/icons/bulb-2.png';
import diamond from 'assets/images/icons/diamond.png';
import help from 'assets/images/icons/help.png';
import award from 'assets/images/icons/award.png';

const data = [
  {
    id: 1,
    icon: bulb,
    title: 'Fast Performance',
    description: `UK. Europe. Australia. No matter the country, call our API's and instantly see the results. You don't deserve to wait.`,
  },
  {
    id: 2,
    icon: diamond,
    title: 'Free subscription for small businesses',
    description: `If you are a freelancer or a startup, get started with our free plan with 100 Tax ID validations. You only have to pay as you grow.`,
  },
  {
    id: 3,
    icon: help,
    title: 'Partner with us',
    description: `We want to seamlessly integrate with your billing, CRM and any other tools where you might want to validate Tax IDs. Drop a request if you want us to build an integration with the tool you use. If you are a platform where your customers need to validate Tax IDs partner with us to offer this support to your customers.`,
  },
  {
    id: 4,
    icon: award,
    title: 'Take control',
    description: `We believe it’s important for everyone to have access to software – especially when it comes to digital learning tools. Eduflow is built with WCAG standards in mind and can easily be navigated by keyboard and screen readers.`,
  },
];

const UsefulFeatures = () => {
  return (
    <Box as="section" id="useful-features" variant="section.usefulFeatures">
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="The Lookup Promise"
          description="Focus on other parts of your business operations. We will take care of Tax ID validation. Integrate once and forget about it. That's how reliable we are."
        />
        <Box sx={styles.features}>
          {data?.map((item) => (
            <UltimateFeature
              key={item.id}
              data={item}
              className="feature-item"
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default UsefulFeatures;

const styles = {
  heading: {
    marginBottom: 80,
  },
  features: {
    gap: 60,
    display: ['grid'],
    gridTemplateColumns: ['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(2, 1fr)'],
    '.feature-item': {
      display: ['block', 'block', 'block', 'block', 'flex'],
      px: ['15px', 0],
      maxWidth: ['none'],
      figure: {
        minWidth: '90px',
        m: [
          '0 auto 30px',
          '0 auto 30px',
          '0 auto 30px',
          '0 auto 30px',
          '0 26px 0 0',
        ],
      },
    },
  },
};
