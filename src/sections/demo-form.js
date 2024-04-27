import { jsx, Box, Container, Heading, Text, Button, Image } from "theme-ui"
import SectionHeading from 'components/section-heading';
import CardDemoForm from 'components/card-demo-form';
import { Fragment } from 'react';

const DemoForm = () => {
  return (
    <Box as="section" id="demo" sx={styles.section} variant="section.features">
      <Container sx={styles.container}>
          <SectionHeading
              sx={styles.heading}
              title={
                <Fragment>
                  Try Our Tax ID Validator
                </Fragment>
              }
            />

        <Box sx={styles.formWrapper}>
          <CardDemoForm className="form-widget" />
        </Box>
      </Container>
    </Box>
  );
};

export default DemoForm;

const styles = {
  container: {
    background: 'white',
    padding: 30
  },
  heading: {
    marginBottom: [30, 30, 30, 30],
    maxWidth: '620px',
    mb: [5],
    h2: {
      letterSpacing: 'heading',
    },
  },
  formWrapper: {
    textAlign: 'center',
    position: 'relative',
    '.video-widget': {
      maxWidth: ['100%', '100%', '100%', '100%', '100%', '70%', '100%'],
    },
  },
  contentWrapper: {
    gap: [30, 30, 30, 30, 40, 60, 70, 120],
    display: ['flex', 'flex', 'grid'],
    flexDirection: ['column-reverse', 'column-reverse', 'unset'],
    gridTemplateColumns: [
      '1.2fr 0.8fr',
      '1.2fr 0.8fr',
      '1.2fr 0.8fr',
      '1.1fr 0.9fr',
      '1.1fr 0.9fr',
      '1.1fr 0.9fr',
      '1.2fr 0.8fr',
    ],
    alignItems: 'center',
  },
};
