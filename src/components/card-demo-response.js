import React, { useState } from 'react';
import {Alert, Box, Grid, Text} from 'theme-ui';

const CardDemoResponse = ({response}) => {

  if (response.valid) {
    return (
      <Box>
          <Box>
            <Alert variant='highlight' mb={3}>Valid Tax ID Number</Alert>
            <Grid gap={2} columns={[2, '2fr 3fr']}>
              <Text sx={styles.fieldlabel}> Valid </Text>
              <Text sx={styles.fieldvalue}> {response.valid.toString()} </Text>
              <Text sx={styles.fieldlabel}> Tax ID Label </Text>
              <Text sx={styles.fieldvalue}> {response.tinLabel} </Text>
              <Text sx={styles.fieldlabel}> Tax ID Number </Text>
              <Text sx={styles.fieldvalue}> {response.tin} </Text>
              <Text sx={styles.fieldlabel}> Name </Text>
              <Text sx={styles.fieldvalue}> {response.name} </Text>
              <Text sx={styles.fieldlabel}> Address </Text>
              <Text sx={styles.fieldvalue}> {response.address} </Text>
              <Text sx={styles.fieldlabel}> Enity Status </Text>
              <Text sx={styles.fieldvalue}> {response.entityStatus} </Text>
              <Text sx={styles.fieldlabel}> Enity Type </Text>
              <Text sx={styles.fieldvalue}> {response.entityType} </Text>
              <Text sx={styles.fieldlabel}> Date </Text>
              <Text sx={styles.fieldvalue}> {response.requestDate} </Text>
            </Grid>
          </Box>
      </Box>
    );
  } else if (response.isFormatValid) {
    return (
      <Box>
          <Box>
            <Alert variant='highlight' mb={3}>Valid Tax ID Number</Alert>
            <Grid gap={2} columns={[2, '2fr 3fr']}>
              <Text sx={styles.fieldlabel}> Valid Format </Text>
              <Text sx={styles.fieldvalue}> {response.isFormatValid.toString()} </Text>
              <Text sx={styles.fieldlabel}> Tax ID Label </Text>
              <Text sx={styles.fieldvalue}> {response.tinLabel} </Text>
              <Text sx={styles.fieldlabel}> Tax ID Number </Text>
              <Text sx={styles.fieldvalue}> {response.tin} </Text>
              <Text sx={styles.fieldlabel}> Date </Text>
              <Text sx={styles.fieldvalue}> {response.requestDate} </Text>
            </Grid>
          </Box>
      </Box>    );
  } else {
    return (
    <Box>
      <Box>
          <Alert bg='red' mb={3}>Invalid Tax ID Number</Alert>
        </Box>
    </Box>
    );
  }
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
