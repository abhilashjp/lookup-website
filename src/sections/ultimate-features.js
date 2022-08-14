/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import UltimateFeature from 'components/cards/ultimate-feature';

import bulb from 'assets/images/icons/global_coverage.png';
import dart from 'assets/images/icons/bulk_valitation.png';
import rocket from 'assets/images/icons/Single_api.png';
import trophy from 'assets/images/icons/audit_trails.png';

const data = [
  {
    id: 1,
    icon: bulb,
    title: 'Global coverage',
    description: 'Multiple national databases under one roof',
  },
  {
    id: 2,
    icon: dart,
    title: 'Validate in Bulk',
    description: 'Upload Tax IDs in bulk and instantly validate their authenticity',
  },
  {
    id: 3,
    icon: rocket,
    title: 'Single API',
    description: 'Easily switch Tax ID validation between countries with a single API integration',
  },
  {
    id: 4,
    icon: trophy,
    title: 'Audit trails',
    description: 'Refer to validation history anytime' ,
  },
];

const UltimateFeatures = () => {
  return (
    <Box as="section" id="ultimate-feature" variant="section.ultimateFeature">
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="One API for Tax ID validation across the globe"
          description="Leave the hassle of bringing together multiple Tax ID sources in one place to us. Focus your energy on building your core product."
        />
        <Box sx={styles.features}>
          {data?.map((item) => (
            <UltimateFeature key={item.id} data={item} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default UltimateFeatures;

const styles = {
  heading: {
    marginBottom: [60, 60, 60, 80],
  },
  features: {
    gap: ['35px 60px', 60, 60, 40, 30, 60],
    display: ['grid', 'grid'],
    gridTemplateColumns: [
      'repeat(1, 1fr)',
      'repeat(1, 1fr)',
      'repeat(1, 1fr)',
      'repeat(2, 1fr)',
      'repeat(4, 1fr)',
    ],
  },
};
