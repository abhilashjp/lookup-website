/** @jsx jsx */
import { jsx, Box, Container, Text } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import { LearnMore } from 'components/link';
import Image from 'components/image';

import banner from 'assets/images/apps.png';
import checkFilledCircle from 'assets/images/icons/check-circle-filled.png';
import Modal, { CloseButton } from "components/modal/modal"
import ResponsiveIframe from "components/responsive-iframe"
import HubspotForm from "react-hubspot-form"

 

const Widgets = () => {
const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  
  return (
    <Box as="section" id="widgets" variant="section.widgets">
      <Container>
        <Box sx={styles.contentWrapper}>
          <Box sx={styles.leftContent}>
            <Image src={banner} alt="widgets" />
          </Box>
          <Box sx={styles.rightContent}>
            <SectionHeading
              sx={styles.heading}
              title="Plug and play solutions and integrations"
              description="No code solution to enable Tax ID validation in your existing billing and CRM tools (Coming soon)."
            />
            <Text sx={styles.listItem} as="p">
              <Image src={checkFilledCircle} alt="check icon" />
              Connect with your favourite apps and validate Tax IDs instantly
            </Text>
            <Text sx={styles.listItem} as="p">
              <Image src={checkFilledCircle} alt="check icon" />
              10+ apps support on the way
            </Text>
            <Box sx={styles.explore}>
              <LearnMore path="#!" label="Request an app integration" onClick={openModal} />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
{isModalOpen && (
      <Modal isOpen={isModalOpen} styles={styles.modalform} setIsOpen={setIsModalOpen}>
        <HubspotForm
                portalId="22529954"
                formId="a16f7dad-52b2-4450-8d85-fac6da7562e0"
                onSubmit={() => console.log("Submit!")}
                onReady={() => console.log("Form ready!")}
                loading={<div>Loading...</div>}
              />
      </Modal>
    )}

  );
};

export default Widgets;

const styles = {
  contentWrapper: {
    gap: [0, 0, 0, 0, 10, 100],
    display: ['block', 'block', 'grid'],
    gridTemplateColumns: '1fr 1fr',
    alignItems: 'center',
  },
  heading: {
    textAlign: 'left',
    mb: ['20px'],
    mt: [0, 0, 0, 0, '-70px'],
    h2: {
      fontSize: ['24px', '24px', '24px', '28px', '32px', '40px'],
      lineHeight: [1.45, 1.5],
      letterSpacing: '-1.5px',
    },
  },
  listItem: {
    fontWeight: 500,
    fontSize: 16,
    lineHeight: 2.81,
    display: 'flex',
    alignItems: 'center',
    img: {
      mr: '10px',
    },
  },
  explore: {
    mt: ['20px', '20px', '20px', '20px', '40px'],
  },
};
