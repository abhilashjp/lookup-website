/** @jsxImportSource theme-ui */
import { useState } from "react"
import { jsx, Box, Container, Heading, Text, Button, Image } from "theme-ui"
import banner from "assets/images/banner_2.png"
import vies from "assets/images/vies.png"
import hmrc from "assets/images/hmrc.png"
import abn from "assets/images/abn-logo-gov.png"
import paypal from "assets/images/paypal.png"
import google from "assets/images/google.png"
import dropbox from "assets/images/dropbox.png"
import Modal, { CloseButton } from "components/modal/modal"
import ResponsiveIframe from "components/responsive-iframe"
import HubspotForm from "react-hubspot-form"

/* 
const Banner = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToPricing = () => {
    const pricingSection = document.getElementById("pricing-section");

    if (pricingSection) {
      pricingSection.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <Box id="home" as="section" variant="section.banner">

    <Container>
        <Box sx={styles.contentWrapper}>
          <Box sx={styles.content}>
            <Heading sx={styles.title}><h1 sx={styles.title}>Tax ID validation for everyone.</h1></Heading>
            <Text as="p" sx={styles.text}>
              VAT number, ABN, GSTIN. Validate these and more using our free,
              secure and refreshingly easy to use APIs.
            </Text>

<Button
        variant="primary"
        sx={styles.button}
        onClick={() => {
          setIsOpen(true);
          scrollToPricing(); // Scroll to pricing section when button is clicked
        }}
      >
        Get started for Free
      </Button>
      <Box sx={styles.clients}> 
            <Image src={paypal} alt="paypal" /> 
             <Image src={google} alt="google" />
             <Image src={dropbox} alt="dropbox" />
            </Box> 
      </Box>
          <Box sx={styles.illustration}>
            <Image src={banner} alt="banner" />
          </Box>
        </Box>
      </Container>

   
</Box>
  );
};

export default Banner;

*/

const Banner = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Box id="home" as="section" variant="section.banner">
      <Container>
        <Box sx={styles.contentWrapper}>
          <Box sx={styles.content}>
            <Heading sx={styles.title}><h1 sx={styles.title}>Tax ID validation for everyone.</h1></Heading>
            <Text as="p" sx={styles.text}>
              VAT number, ABN, GSTIN. Validate these and more using our free,
              secure and refreshingly easy to use APIs.
            </Text>

            <Button
              variant="primary"
              sx={styles.button}
              onClick={() => setIsOpen(true)}
            >
              Get started Free
            </Button>
            <Modal isOpen={isOpen} style={styles.modalform}>
              <CloseButton
                onClick={() => setIsOpen(false)}
                size="24px"
                color="#fff"
              />
              <HubspotForm
                portalId="22529954"
                formId="a16f7dad-52b2-4450-8d85-fac6da7562e0"
                onSubmit={() => console.log("Submit!")}
                onReady={() => console.log("Form ready!")}
                loading={<div>Loading...</div>}
              />
            </Modal>
             <Box sx={styles.clients}> 
            <Image src={vies} alt="vies" />
             <Image src={hmrc} alt="hmrc" />
              <Image src={abn} alt="abn" />
            </Box> 
          </Box>
          <Box sx={styles.illustration}>
            <Image src={banner} alt="banner" />
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Banner



const styles = {
  contentWrapper: {
    display: [null, null, null, "flex", "grid"],
    gridTemplateColumns: "repeat(2, 1fr)",
    alignItems: "center",
    justifyContent: "center",
    minHeight: [null, null, null, null, null, "100vh"],
    pt: [100, null, null, 120, 130, 120, 0],
  },
  content: {
    maxWidth: [507, null, null, 324, 450],
  },
  title: {
    fontWeight: "bold",
    fontSize: ["30px", null, null, null, "42px", "40px", "60px"],
    lineHeight: 1.33,
    letterSpacing: "-1px",
    color: "textSecondary",
  },
  text: {
    fontSize: ["14px", "14px", "14px", "16px", "16px", "18px"],
    lineHeight: [1.85, 1.85, 1.85, 1.85, 1.85, 2.33],
    color: "textSecondary",
    mt: ["14px", "19px"],
  },
  button: {
    display: ["flex", "flex"],
    mt: [45, 45, 45, 25, 25],
  },
  clients: {
    display: "flex",
    alignItems: "center",
    mt: ["20px", "45px", "45px", "30px", "45px"],
    img: {
      maxWidth: ["80px", "100%", "100%", "100%"],
      "+ img": {
        ml: ["14px", "28px", "28px", "20px"],
      },
    },
  },
  illustration: {
    display: ["block", "block"],
    mt: ["30px", "30px", 0],
    mb: ["60px", "60px", 0],
    img: {
      maxWidth: ["100%", "100%", "100%", "100%", "90%", "90%", "100%"],
    },
  },
  modalform: {
    overlay: {
      backgroundColor: "rgba(0,0,0,0.75)",
      zIndex: 100,
    },
    content: {
      border: 0,
      padding: "15px",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      overflow: "unset",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "70%",
    },
  },
}
