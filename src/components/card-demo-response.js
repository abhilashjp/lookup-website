import React, { useState } from 'react';
import {Alert, Box, Grid, Text} from 'theme-ui';

const CardDemoResponse = ({response}) => {
  return (
    <Box>
    { response.valid ? (
        <Box>
          <Alert variant='highlight' mb={3}>Valid Tax ID Number</Alert>
          <Grid gap={2} columns={[2, '2fr 3fr']}>
            <Text sx={styles.fieldlabel}> Valid </Text>
            <Text sx={styles.fieldvalue}> {response.valid.toString()} </Text>
            <Text sx={styles.fieldlabel}> Tax ID Number </Text>
            <Text sx={styles.fieldvalue}> {response.vatNumber} </Text>
            <Text sx={styles.fieldlabel}> Name </Text>
            <Text sx={styles.fieldvalue}> {response.name} </Text>
            <Text sx={styles.fieldlabel}> Address </Text>
            <Text sx={styles.fieldvalue}> {response.address} </Text>
            <Text sx={styles.fieldlabel}> Date </Text>
            <Text sx={styles.fieldvalue}> {response.requestDate} </Text>
          </Grid>
        </Box>
      ) : (
        <Box>
          <Alert bg='red' mb={3}>Invalid Tax ID Number</Alert>
        </Box>
      )
    }
    </Box>
  );
}

const styles = {
  fieldlabel: {
    textAlign: 'left',
    FontWirght: 'bold',
    borderWidth: '1px',
    borderColor: 'black',
    marginLeft: 5
  },
  fieldvalue: {
    textAlign: 'left',
    marginLeft: 5
  }
};


export default CardDemoResponse;
