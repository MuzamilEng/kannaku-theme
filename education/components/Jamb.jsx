import React, { useEffect, useState } from 'react';

const Jamb = () => {
    // feeType, wacepkg, amount, phone
    const [feeType, setFeeType] = useState("");
    const [wacepkg, setWacepkg] = useState("");
    const [amount, setAmount] = useState("");
    const [phone, setPhone] = useState("");
    const getRequest = async()=>{
        try {
         const response = await fetch('http://localhost:3000/api/v1/education/')
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
               feeType,
               wacepkg,
               amount,
               phone,
             };
       
             const requestOptions = {
               method: 'POST',
               headers: myHeaders,
               body: JSON.stringify(data),
               redirect: 'follow',
             };
       
             const response = await fetch('http://localhost:3000/api/v1/education/', requestOptions);
             console.log(response, "success howa k nhio");
             const result = await response.json();
             console.log(result);
           } catch (error) {
             console.log('error', error);
           }
           setFeeType('');
           setWacepkg('');
           setPhone('');
           setAmount('');

         };

    return (
        <>
            <div className="form-group row">
                <label className="col-lg-5 col-form-label">Jamb Package  </label>
                <div className="col-lg-7">
                    <select className="form-control" value={wacepkg} onChange={(e) => setWacepkg(e.target.value)}>
                        <option>-- Select --</option>
                        <option value={'Jamb PIN'}>Jamb PIN</option>
                        <option value={'Jamb CBT'}>Jamb CBT</option>
                        <option value={'UTME Reg PIN'}>UTME Reg PIN</option>


                    </select>
                </div>
            </div>

            <div className="form-group row">
                <label className="col-lg-5 col-form-label">Phone Number</label>
                <div className="col-lg-7">
                    <input type="text" className="form-control" placeholder="Your Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>
            </div>

            <div className="form-group row">
                <label className="col-lg-5 col-form-label">Amount</label>
                <div className="col-lg-7">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">₦</span>
                        </div>
                        <input type="text" className="form-control" placeholder="Amount" aria-label="amount" aria-describedby="basic-addon1" value={amount} onChange={(e) => setAmount(e.target.value)} />
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
    )
}
export default Jamb;