/** @jsx jsx */
import { useState } from 'react';
import { keyframes } from '@emotion/core';
import { jsx, Box, Grid, Container, Flex, Text, Button } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import PriceTable from 'components/cards/price-table';
import { rgba } from 'polished';
import * as React from 'react';
import HubspotForm from "react-hubspot-form"


//function PricingPage() {
  // Paste the stripe-pricing-table snippet in your React component
//  return (
//     <Box id="pricing-section" as="section" variant="section.pricing">
    // {<stripe-pricing-table pricing-table-id="prctbl_1Opo3cSJk6FHqNZLwRpi4OVg"
//publishable-key="pk_live_51OpYBPSJk6FHqNZLngAvjtWRQKJyzZAKhtOLrI7B5HnXbpYHuHNd3ATe2YNpfMgNehlTuaSqtozVYM8YLaI4qHRI00ahUVnjvh"></stripe-pricing-table>
// }
  //  </Box> 
////  );
//}

//export default PricingPage;


/*
const monthly = [
  {
    id: 1,
    title: 'Free',
    subtitle: 'For getting started',
    amount: 0,
    isRecommended: false,
    buttonText: 'Create an account',
    features: [
      {
        id: 1,
        isAvailable: true,
        title: 'Full access to all features',
      },
      {
        id: 2,
        isAvailable: true,
        title: 'One API to validate Tax ID in various countries',
      },
      {
        id: 3,
        isAvailable: true,
        title: 'Bulk Tax ID validation',
      },
      {
        id: 4,
        isAvailable: true,
        title: '100 API requests',
      },
      {
        id: 5,
        isAvailable: false,
        title: 'Premium Support',
      },
    ],
  },
  
  {
    id: 2,
    title: 'Pro',
    subtitle: 'For fast growth teams',
    amount: 49,
    isRecommended: true,
    buttonText: 'Create an account',
    features: [
      {
        id: 1,
        isAvailable: true,
        title: 'Full access to all features',
      },
      {
        id: 2,
        isAvailable: true,
        title: 'One API to validate Tax ID in various countries',
      },
      {
        id: 3,
        isAvailable: true,
        title: 'Bulk Tax ID validation',
      },
      {
        id: 4,
        isAvailable: true,
        title: '10000 API requests',
      },
      {
        id: 5,
        isAvailable: true,
        title: 'Premium Support',
      },
    ],
  },
];
/* const annual = [
  {
    id: 1,
    title: 'Free Community Edition',
    subtitle: 'For Everyone',
    amount: 0,
    isRecommended: false,
    buttonText: 'View on Github',
    features: [
      {
        id: 1,
        isAvailable: true,
        title: 'Self Hosting',
      },
      {
        id: 2,
        isAvailable: true,
        title: `Full access to codebase`,
      },
      {
        id: 3,
        isAvailable: true,
        title: `All feature available`,
      },
      {
        id: 4,
        isAvailable: false,
        title: `Dedicated support`,
      },
      {
        id: 5,
        isAvailable: false,
        title: `Implementation support`,
      },
    ],
  },
  {
    id: 2,
    title: 'Premium Support',
    subtitle: 'For Enterprise',
    amount: 150,
    isRecommended: true,
    buttonText: 'Contact Us',
    features: [
      {
        id: 1,
        isAvailable: true,
        title: 'Self Hosting',
      },
      {
        id: 2,
        isAvailable: true,
        title: `Full access to codebase`,
      },
      {
        id: 3,
        isAvailable: true,
        title: `All feature available`,
      },
      {
        id: 4,
        isAvailable: true,
        title: `Dedicated support`,
      },
      {
        id: 5,
        isAvailable: true,
        title: `Implementation Support`,
      },
    ],
  },
];
*/
/*
const Pricing = () => {
  const [plan, setPlan] = useState({
    active: 'monthly',
    pricingPlan: monthly,
  });

  const handlePlan = (plan) => {
    if (plan === 'monthly') {
      setPlan({
        ...plan,
        active: 'monthly',
        pricingPlan: monthly,
      });
    }
    if (plan === 'annual') {
      setPlan({
        ...plan,
        active: 'annual',
        pricingPlan: annual,
      });
    }
  };
  return (
    <Box
      as="section"
      id="pricing"
      sx={styles.section}
      variant="section.pricing"
    >
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="Choose a plan that is right for you"
          description="With plans for both startups and large enterprises, everyone can use Lookup"
        />
        <Flex sx={styles.priceSwitcher}>
          <Text as="span" className="discount">
            Open Source
          </Text>
          <Button
            variant="text"
            onClick={() => handlePlan('monthly')}
            className={`${plan.active === 'monthly' ? 'active' : ''}`}
          >
            Lookup Cloud
          </Button>
          <Button
            variant="text"
            onClick={() => handlePlan('annual')}
            className={`${plan.active === 'annual' ? 'active' : ''}`}
          >
            Self Hosted
          </Button>
        </Flex>
        <Grid sx={styles.priceWrapper}>
          {plan.pricingPlan.map((price, index) => (
            <PriceTable price={price} key={`${plan.active}-${index}`} />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Pricing;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const fadeIn2 = keyframes`
  from {
    transform: translateY(50%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const styles = {
  heading: {
    mb: [60, null, null, 50],
  },
  priceSwitcher: {
    backgroundColor: '#F7F8FB',
    borderRadius: '5px',
    border: `1px solid ${rgba('#fff', 0.2)}`,
    margin: ['0 auto 40px', null, null, '0 auto 50px'],
    maxWidth: 300,
    position: 'relative',
    p: 2,
    '.discount': {
      position: 'absolute',
      backgroundColor: 'primary',
      color: '#fff',
      minHeight: 25,
      display: 'flex',
      alignItems: 'center',
      padding: '0 8px',
      fontSize: 13,
      fontWeight: 700,
      textTransform: 'unset',
      borderRadius: 25,
      right: 38,
      top: '-17px',
    },
    button: {
      minHeight: '48px',
      px: '25px',
      fontWeight: 500,
      '&.active': {
        backgroundColor: '#fff',
        color: 'text',
      },
      ':focus': {
        outline: '0 none',
      },
    },
  },
  priceWrapper: {
    gap: 30,
    display: 'grid',
    gridTemplateColumns: [
      'repeat(1, 340px)',
      'repeat(1, 340px)',
      'repeat(1, 340px)',
      'repeat(2,1fr)',
      'repeat(2, 430px)',
      'repeat(2, 440px)',
      'repeat(2, 480px)',
    ],
    justifyContent: 'center',
    '.priceCard': {
      '.priceHeader': {
        animation: `${fadeIn} 0.8s linear`,
      },
      'ul > li': {
        animation: `${fadeIn2} 0.7s linear`,
      },
      '.priceAmount': {
        animation: `${fadeIn} 0.9s linear`,
      },
      '.priceButton': {
        animation: `${fadeIn2} 0.7s linear`,
      },
    },
  },
};

*/
/*import React, { useState } from 'react';
import {
  Box,
  Container,
  Flex,
  Grid,
  Text,
  Button,
} from 'theme-ui';
import SectionHeading from './SectionHeading';
import PriceTable from './PriceTable';


import { HubspotForm } from 'react-hubspot';
*/
const monthly = [
  {
    id: 1,
    title: 'Free',
    subtitle: 'For getting started',
    amount: 0,
    isRecommended: false,
    buttonText: 'Create an account',
    features: [
      {
        id: 1,
        isAvailable: true,
        title: 'Full access to all features',
      },
      {
        id: 2,
        isAvailable: true,
        title: 'One API to validate Tax ID in various countries',
      },
      {
        id: 3,
        isAvailable: true,
        title: 'Bulk Tax ID validation',
      },
      {
        id: 4,
        isAvailable: true,
        title: '100 API requests',
      },
      {
        id: 5,
        isAvailable: false,
        title: 'Premium Support',
      },
    ],
  },
  
  {
    id: 2,
    title: 'Pro',
    subtitle: 'For fast growth teams',
    amount: 49,
    isRecommended: true,
    buttonText: 'Create an account',
    features: [
      {
        id: 1,
        isAvailable: true,
        title: 'Full access to all features',
      },
      {
        id: 2,
        isAvailable: true,
        title: 'One API to validate Tax ID in various countries',
      },
      {
        id: 3,
        isAvailable: true,
        title: 'Bulk Tax ID validation',
      },
      {
        id: 4,
        isAvailable: true,
        title: '10000 API requests',
      },
      {
        id: 5,
        isAvailable: true,
        title: 'Premium Support',
      },
    ],
  },
];

const Pricing = () => {
  const [plan, setPlan] = useState({
    active: 'monthly',
    pricingPlan: monthly,
  });

  const [showModal, setShowModal] = useState(false);

  const handlePlan = (plan) => {
    if (plan === 'monthly') {
      setPlan({
        ...plan,
        active: 'monthly',
        pricingPlan: monthly,
      });
    }
    // Add handling for annual plan here if needed
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <Box
      as="section"
      id="pricing"
      sx={styles.section}
      variant="section.pricing"
    >
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="Choose a plan that is right for you"
          description="With plans for both startups and large enterprises, everyone can use Lookup"
        />
        <Flex sx={styles.priceSwitcher}>
          <Text as="span" className="discount">
            Open Source
          </Text>
          <Button
            variant="text"
            onClick={() => handlePlan('monthly')}
            className={`${plan.active === 'monthly' ? 'active' : ''}`}
          >
            Lookup Cloud
          </Button>
          {/* Add button for annual plan if needed */}
        </Flex>
        <Grid sx={styles.priceWrapper}>
          {plan.pricingPlan.map((price, index) => (
            <PriceTable price={price} key={`${plan.active}-${index}`} />
          ))}
        </Grid>
        <Button variant="primary" onClick={handleOpenModal}>
          Get Started
        </Button>
        {showModal && (
          <Box sx={styles.modalOverlay}>
            <Box sx={styles.modal}>
              <Button onClick={handleCloseModal} sx={styles.closeButton}>
                Close
              </Button>
              <HubspotForm
                portalId="22529954"
                formId="a16f7dad-52b2-4450-8d85-fac6da7562e0"
                onSubmit={() => console.log("Submit!")}
                onReady={() => console.log("Form ready!")}
                loading={<div>Loading...</div>}
              />
            </Box>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default Pricing;
