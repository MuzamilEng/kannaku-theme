import React, { useEffect, useState } from "react";

const Electricity = () => {
  const [telcoOptions, setTelcoOptions] = useState([
    { id: 1, text: "MTN" },
    { id: 2, text: "GLO" },
    { id: 3, text: "9Mobile" },
    { id: 4, text: "Airtel" },
  ]);
  const [billType, setBillType] = useState("");
  const [disco, setDisco] = useState("");
  const [amount, setAmount] = useState();
  const [meterNumber, setMeterNumber] = useState();
  const getRequest = async()=>{
    try {
     const response = await fetch('http://localhost:3000/api/v1/electricity/')
     const data = await response.json()
     console.log(data);
    } catch (error) {
     console.log(error);
    }
   }
   
     const submitForm = async () => {
       try {
         const myHeaders = new Headers();
         myHeaders.append('Content-Type', 'application/json');
   
         const data = {
           billType,
           disco,
           meterNumber,
           amount,
         };
   
         const requestOptions = {
           method: 'POST',
           headers: myHeaders,
           body: JSON.stringify(data),
           redirect: 'follow',
         };
   
         const response = await fetch('http://localhost:3000/api/v1/electricity/', requestOptions);
         console.log(response, "success howa k nhio");
         const result = await response.json();
         console.log(result);
       } catch (error) {
         console.log('error', error);
       }
       setAmount('');
       setMeterNumber('');
       setBillType('');
       setDisco('');
     };

  return (
    <>
     <div className="form-group row">
                    <label className="col-lg-5 col-form-label">Bill Type</label>
                    <div className="col-lg-7">
                      <select className="form-control" value={billType} onChange={(e) => setBillType(e.target.value)}>
                        <option value="">-- Select --</option>
                        <option value="Prepaid">Prepaid</option>
                        <option value="PostPaid">PostPaid</option>
                      </select>
                    </div>
                  </div>
      <div className="form-group row">
        <label className="col-lg-5 col-form-label">Disco </label>
        <div className="col-lg-7">
        <select
            className="form-control"
            value={disco}
            onChange={(e) => setDisco(e.target.value)}
            name='disco'
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
        <label className="col-lg-5 col-form-label">Meter Number</label>
        <div className="col-lg-7">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Meter Number"
            value={meterNumber}
            onChange={(e) => setMeterNumber(e.target.value)}
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
              onChange={(e) => setAmount(e.target.value)}
              value={amount}
              placeholder="Amount"
              aria-label="amount"
              aria-describedby="basic-addon1"
            />
          </div>
        </div>
      </div>
      <br />
      <div className="text-right">
      <button type="submit" className="btn btn-primary" onClick={submitForm}>
                      Submit
                    </button>
                  </div>
    </>
  );
};
export default Electricity;
