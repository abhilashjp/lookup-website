/* tslint:disable */
/* eslint-disable */

import React, { useState } from 'react';
import { Alert, Grid, Box, Label, Input, Select, Button, Message, Text } from 'theme-ui';
import { ToastContainer, toast } from 'react-toastify';
import CardDemoResponse from 'components/card-demo-response';
import 'react-toastify/dist/ReactToastify.css';

const countries = [
  'GB', 'AT', 'BE', 'BG', 'CY', 'CZ', 'DE', 'DK', 'EE', 'EL',
  'ES', 'FI', 'FR', 'HR', 'HU', 'IE', 'IT', 'LT', 'LU', 'LV',
  'MT', 'NL', 'PL', 'PT', 'RO', 'SE', 'SI', 'SK', 'XI'
];

const CardDemoForm = () => {
  const [countryCode, setCountryCode] = useState('GB');
  const [targetTaxID, setTargetTaxID] = useState('');
  const [fetchConsultation, setFetchConsultation] = useState(true);
  const [requesterCountryCode, setRequesterCountryCode] = useState('GB');
  const [requesterTaxID, setRequesterTaxID] = useState('');
  const [response, setResponse] = useState(null);
  const [error, setError] = useState('');
  // const testResp = { "name": "KPMG LLP", "vatNumber": "791788859", "address": "58 CLARENDON ROAD, WATFORD, HERTS, WD17 1DE", "countryCode": "GB", "requestDate": "2024-04-20T13:24:14+01:00", "valid": false };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      countryCode,
      targetTaxID,
      requesterTaxID,
      requesterCountryCode
    };

    // Make the curl request
    // fetch(`http://localhost:3030/validate?country_iso=${data.countryCode}&tin=${data.targetTaxID}`, {
    fetch(`https://demo.lookuptax.com/validate?country_iso=${data.countryCode}&tin=${data.targetTaxID}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Include credentials here if necessary
        // 'Authorization': 'Bearer your_access_token'
      },
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch');
      }
      return response.json();
    })
    .then(data => {
      // Handle response data as needed
      console.log(data);
      setResponse(data);
      toast.success("Request successful");
    })
    .catch(error => {
      // Handle errors
      console.error('Error:', error);
      toast.error("Failed to fetch data");
      setError(error.message);
    });
  };

  return (
    <Box as="form" onSubmit={handleSubmit} sx={styles.demoformwrapper}>
      <Grid gap={2} columns={[3, '1fr 3fr 1fr']}>
        <Box mb={2}>
          <Label htmlFor="countryCode" className="text-gray-700">Country Code:</Label>
          <Select id="countryCode" value={countryCode} onChange={e => setCountryCode(e.target.value)} className="input input-bordered w-full">
            {countries.map((country, index) => (
              <option key={index} value={country}>{country}</option>
            ))}
          </Select>
        </Box>
        <Box mb={3}>
          <Label htmlFor="targetTaxID" className="text-gray-700">Tax ID Number:</Label>
          <Input type="text" id="targetTaxID" value={targetTaxID} onChange={e => setTargetTaxID(e.target.value)} className="input input-bordered w-full" />
        </Box>
        <Box sx={styles.submit}>
          <Button type="submit" className="btn btn-primary">Submit</Button>
        </Box>
      </Grid>
    {response ? (<CardDemoResponse response={response}/>) : null  }
      <ToastContainer />
    </Box>

  );
};

const styles = {
  demoformwrapper: {
    flex: '1 1 auto'
  },
  countrycode: {
    // flex: '2 2 auto'
  },
  submit: {
    margin: 'auto'
  }
};
export default CardDemoForm;
