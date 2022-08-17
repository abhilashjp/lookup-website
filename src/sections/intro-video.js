/** @jsx jsx */
import { useState } from 'react';
import { jsx, Box, Container, Button } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import Image from 'components/image';
import { LearnMore } from 'components/link';
import videoBanner from 'assets/images/use_case.png';
import Play from 'assets/images/icons/play.png';
import Modal, { CloseButton } from 'components/modal/modal';
import ResponsiveIframe from 'components/responsive-iframe';

const IntroVideo = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box as="section" sx={styles.section} variant="section.introVideo">
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="Building blocks for anything taxation"
          description="Our platform will eliminate business’ need for multiple integrations with individual data sources. We manage all the individual integrations on our end and let you access through a single API"
        />
        <Box sx={styles.explore}>
          <LearnMore path="/docs" label="Explore More" />
        </Box>
        <Box sx={styles.videoWrapper}>
         
          <Image
            src={videoBanner}
            className="video-banner"
            alt="video banner"
          />
          
        </Box>
      </Container>
    </Box>
  );
};

export default IntroVideo;

const styles = {
  heading: {
    maxWidth: '620px',
    mb: [5],
    h2: {
      letterSpacing: 'heading',
    },
  },
  explore: {
    textAlign: ['center'],
    mb: [6],
  },
  videoWrapper: {
    textAlign: 'center',
    position: 'relative',
    '.video-banner': {
      maxWidth: ['100%', '100%', '100%', '100%', '100%', '80%', '100%'],
    },
  },
  playPause: {
    color: 'white',
    fontWeight: 700,
    position: 'absolute',
    padding: '0px',
    bottom: [40, 40, 40, 70, 100],
    left: '50%',
    transform: 'translateX(-50%)',
    ':focus': {
      outline: 0,
    },
    img: {
      mr: '16px',
    },
  },
};
