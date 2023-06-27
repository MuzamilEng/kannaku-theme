import { element } from 'prop-types';
import React, { useEffect, useState } from 'react';

const Airtime = () => {
  const [telcoOptions, setTelcoOptions] = useState([
    {id: 0, text : "--Select Telco Provider--"},
    { id: 1, text: 'MTN' },
    { id: 2, text: 'GLO' },
    { id: 3, text: '9Mobile' },
    { id: 4, text: 'Airtel' }
  ]);
  const [formType, setFormType] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [amount, setAmount] = useState('');

  useEffect(() => {
    // Fetch the data from the API
    fetch('http://localhost:5000/api/v1/balance')
      .then(response => response.json())
      .then(data => {
        // Update the telcoOptions state with the received data
        setTelcoOptions(data);
      })
      .catch(error => {
        console.error('Error fetching telco options:', error);
      });
  }, []);

  function changeTelco(event) {
    event.preventDefault();
    setFormType(event.target.value);
    console.log('Hi there, user!', event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    // Perform the API call with the selected telco, mobile number, and amount
    // using the values from the component's state
    fetch('http://localhost:5000/api/v1/purchase', {
      method: 'POST',
      body: JSON.stringify({
        telco: formType,
        mobileNumber,
        amount
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log('API response:', data);
        // Handle the API response accordingly
      })
      .catch(error => {
        console.error('Error submitting form:', error);
      });
  }

  return (
    <>
      <div className="form-group row">
        <label className="col-lg-5 col-form-label">Telco Provider</label>
        <div className="col-lg-7">
          <select
            className="form-control"
            onChange={changeTelco}
            name='select'
            value={formType}
          >
                {telcoOptions?.map((telco) => (
          <option key={telco?.id} value={telco?.text}>
            {telco.text}
          </option>
        ))}
          </select>
        </div>
      </div>
      <div className="form-group row">
        <label className="col-lg-5 col-form-label">Mobile Number</label>
        <div className="col-lg-7">
          <input
            type="text"
            className="form-control"
            id="tel"
            placeholder="Mobile Phone Number"
            onChange={event => setMobileNumber(event.target.value)}
          />
        </div>
      </div>
      <div className="form-group row">
        <label className="col-lg-5 col-form-label">Amount</label>
        <div className="col-lg-7">
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="mySpanClass input-group-text" id="basic-addon1">
                ₦
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              onChange={event => setAmount(event.target.value)}
              placeholder="Amount"
              aria-label="amount"
              aria-describedby="basic-addon1"
            />
          </div>
        </div>
      </div>
      <button type='submit' className="btn btn-primary" onClick={handleSubmit}>
        Submit
      </button>
    </>
  );
};

export default Airtime;
