import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
// import Select2 from "react-select2-wrapper";
// import dynamic from "next/dynamic";
// import recentinvoices from "../json/recentinvoices";
// import recentestimates from "../json/recentestimates";
// import Header from "../layouts/Header";
// import Sidebar from "../layouts/Sidebar";

// import $ from "jquery";
// import Data from "./components/Data";
// import Airtime from "./components/Airtime";
let SlideToggle;

const Cabletv = () => {
  const [date, setDate] = useState(new Date());
  const [currencyOptions, setcurrencyOptions] = useState([
    { id: 1, text: "--Select Currency--" },
    { id: 2, text: "EUR Euro" },
    { id: 3, text: "INR Indoan Rupee" },
    { id: 4, text: "USD- US Dollar" },
  ]);
  const [cableTvOptions, setOptions] = useState([
    { id: 1, text: "GoTV" },
    { id: 2, text: "DSTV" },
    { id: 3, text: "StarTimes" },
  ]);
  const [tvPlanOptions, setTvPlanOptions] = useState([
    {id:0, text: "--Select Pakage--"},
    { id: 1, text: "Premium" },
    { id: 2, text: "Basic" },
    { id: 3, text: "Standard" },
  ]);
  // const [countryOptions, setcountryOptions] = useState([
  //   { id: 1, text: "Select Country" },
  //   { id: 2, text: "Afghanistan" },
  //   { id: 3, text: "Albania" },
  //   { id: 4, text: "American Samoa" },
  //   { id: 5, text: "Algeria" },
  //   { id: 6, text: "Andorra" },
  //   { id: 7, text: "Angola" },
  //   { id: 8, text: "Anguilla" },
  //   { id: 9, text: "United States" },
  // ]);
  // const salesOptions = {
  //     colors: ["#7638ff", "#fda600"],
  //     chart: {
  //       type: "bar",
  //       fontFamily: "Poppins, sans-serif",
  //       height: 350,
  //       toolbar: {
  //         show: false,
  //       },
  //     },
  //     series: [
  //       {
  //         name: "Received",
  //         type: "column",
  //         data: [70, 150, 80, 180, 150, 175, 201, 60, 200, 120, 190, 160, 50],
  //       },
  //       {
  //         name: "Pending",
  //         type: "column",
  //         data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16, 80],
  //       },
  //     ],
  //     plotOptions: {
  //       bar: {
  //         horizontal: false,
  //         columnWidth: "60%",
  //         endingShape: "rounded",
  //       },
  //     },
  //     dataLabels: {
  //       enabled: false,
  //     },
  //     stroke: {
  //       show: true,
  //       width: 2,
  //       colors: ["transparent"],
  //     },
  //     xaxis: {
  //       categories: [
  //         "Jan",
  //         "Feb",
  //         "Mar",
  //         "Apr",
  //         "May",
  //         "Jun",
  //         "Jul",
  //         "Aug",
  //         "Sep",
  //         "Oct",
  //       ],
  //     },
  //     yaxis: {
  //       title: {
  //         text: "$ (thousands)",
  //       },
  //     },
  //     fill: {
  //       opacity: 1,
  //     },
  //     tooltip: {
  //       y: {
  //         formatter: function (val) {
  //           return "$ " + val + " thousands";
  //         },
  //       },
  //     },
  //     responsive: [
  //       {
  //         breakpoint: 480,
  //         options: {
  //           chart: {
  //             width: 200,
  //           },
  //           legend: {
  //             position: "bottom",
  //           },
  //         },
  //       },
  //     ],
  //   },
  //   invoiceOptions = {
  //     colors: ["#7638ff", "#ff737b", "#fda600", "#1ec1b0"],
  //     chart: {
  //       fontFamily: "Poppins, sans-serif",
  //       height: 350,
  //       type: "donut",
  //     },
  //     series: [55, 40, 20, 10],
  //     labels: ["Paid", "Unpaid", "Overdue", "Draft"],
  //     legend: { show: false },
  //     responsive: [
  //       {
  //         breakpoint: 480,
  //         options: {
  //           chart: {
  //             width: 200,
  //           },
  //           legend: {
  //             position: "bottom",
  //           },
  //         },
  //       },
  //     ],
  //   },
  //   recentestimates_ = recentestimates,
  //   recentinvoices_ = recentinvoices;

  useEffect(() => {
    if (document) {
      const ApexCharts = require("apexcharts");
    }
  }, []);

  const [data, setData] = useState([])
  const [cable, setCable] = useState("");
  const [tv, setTV] = useState("");
  const [modemNumber, setModemNumber] = useState();
  const [amount, setAmount] = useState();
  const [mobileNumber, setMobileNumber] = useState();
  const getRequest = async()=>{
    try {
     const response = await fetch('http://localhost:3000/api/v1/tvCable/')
     const data = await response.json()
     setData(data);
    } catch (error) {
     console.log(error);
    }
   }

   useEffect(() => {
    getRequest();
   }, [cable, tv, modemNumber, amount, mobileNumber]);
   
     const submitForm = async () => {
       try {
         const myHeaders = new Headers();
         myHeaders.append('Content-Type', 'application/json');
        
         const data = {
            cable, tv, modemNumber, amount, mobileNumber
         };
   
         const requestOptions = {
           method: 'POST',
           headers: myHeaders,
           body: JSON.stringify(data),
           redirect: 'follow',
         };
   
         const response = await fetch('http://localhost:3000/api/v1/tvCable/', requestOptions);
         const result = await response.json();
       } catch (error) {
         console.log('error', error);
       }
       setAmount('');
       setMobileNumber('');
       setCable('');
       setTV('');
       setModemNumber('');
     };

  return (
    <div className="page-wrapper">
      <div className="content container-fluid">
        <div id="filter_inputs" className="card filter-card">
          <div className="card-body pb-0">
            <div className="row">
              <div className="col-sm-6 col-md-3">
                <div className="form-group">
                  <label>Name</label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="form-group">
                  <label>Email</label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="form-group">
                  <label>Phone</label>
                  <input type="text" className="form-control" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* container */}
        <div className="row">
          <div className="col-xl-4 col-sm-6 col-12">
            <div className="card">
              <div className="card-body">
                <div className="dash-widget-header">
                  <div className="avatar mr-2 mt-4">
                    <img
                      className="avatar-img rounded"
                      alt=""
                      src={
                        "https://res.cloudinary.com/dev-staunty007/image/upload/v1645338943/paymax/icons/ei8wg9ooutt7c5ndr7of.png"
                      }
                    />
                  </div>
                  <div className="dash-count">
                    <div className="dash-title"> Successful Payments </div>
                  </div>
                </div>

                <div className="d-flex justify-content-between align-items-center mt-3">
                  <div
                    className="dropdown text-muted mt-3 mb-0"
                    data-toggle="dropdown"
                  >
                    <span className="text-success me-1">
                      <i className="fas fa-arrow-up me-1"></i>2.37%
                    </span>
                    <a
                      href="#"
                      className="btn btn-white btn-sm dropdown-toggle"
                      role="button"
                      data-toggle="dropdown"
                    >
                      Select
                    </a>
                    <div className="dropdown-menu dropdown-menu-left">
                      <a href="#" className="dropdown-item">
                        Today
                      </a>
                      <a href="#" className="dropdown-item">
                        This Week
                      </a>
                      <a href="#" className="dropdown-item">
                        This Month
                      </a>
                      <a href="#" className="dropdown-item">
                        This Year
                      </a>
                    </div>
                  </div>

                  <div className="input-group-prepend">
                    <span className="nairaSlim input-group-text">₦</span>
                    <div className="dash-counts mt-2">
                      <p>3,642</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-sm-6 col-12">
            <div className="card">
              <div className="card-body">
                <div className="dash-widget-header">
                  <div className="avatar mr-2 mt-4">
                    <img
                      className="avatar-img rounded"
                      alt=""
                      src={
                        "https://res.cloudinary.com/dev-staunty007/image/upload/v1645338942/paymax/icons/lh2uk3vhnov4w7eidees.png"
                      }
                    />
                  </div>
                  <div className="dash-count">
                    <div className="dash-title"> Failed Payments </div>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <div
                    className="dropdown text-muted mt-3 mb-0"
                    data-toggle="dropdown"
                  >
                    <span className="text-success me-1">
                      <i className="fas fa-arrow-up me-1"></i>2.37%
                    </span>
                    <a
                      href="#"
                      className="btn btn-white btn-sm dropdown-toggle"
                      role="button"
                      data-toggle="dropdown"
                    >
                      Select
                    </a>
                    <div className="dropdown-menu dropdown-menu-left">
                      <a href="#" className="dropdown-item">
                        This Week
                      </a>
                      <a href="#" className="dropdown-item">
                        This Month
                      </a>
                      <a href="#" className="dropdown-item">
                        This Year
                      </a>
                    </div>
                  </div>
                  <div className="input-group-prepend">
                    <span className="nairaSlim input-group-text">₦</span>
                    <div className="dash-counts mt-2">
                      <p>3,642</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-sm-6 col-12">
            <div className="card">
              <div className="card-body">
                <div className="dash-widget-header">
                  <div className="avatar mr-2 mt-4">
                    <img
                      className="avatar-img rounded"
                      alt=""
                      src={
                        "https://res.cloudinary.com/dev-staunty007/image/upload/v1645340671/paymax/icons/yidm8jdbyxeljsfluuwm.png"
                      }
                    />
                  </div>
                  <div className="dash-count">
                    <div className="dash-title"> Referral</div>
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <div
                    className="dropdown text-muted mt-3 mb-0"
                    data-toggle="dropdown"
                  >
                    <span className="text-success me-1">
                      <i className="fas fa-arrow-up me-1"></i>2.37%
                    </span>
                    <a
                      href="#"
                      className="btn btn-white btn-sm dropdown-toggle"
                      role="button"
                      data-toggle="dropdown"
                    >
                      Select
                    </a>
                    <div className="dropdown-menu dropdown-menu-left">
                      <a href="#" className="dropdown-item">
                        All
                      </a>

                      <a href="#" className="dropdown-item">
                        This Month
                      </a>
                      <a href="#" className="dropdown-item">
                        This Year
                      </a>
                    </div>
                  </div>
                  <div className="input-group-prepend">
                    <span className="nairaSlim input-group-text">₦</span>
                    <div className="dash-counts mt-2">
                      <p>3,642</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-5 d-flex">
            <div className="card flex-fill">
              <div className="card-header">
                <h5 className="card-title">Cabletv Related Payments</h5>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6">
                    <div className="ribbon ribbon-primary">
                      Featured Service Providers
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="col-md-12 ">
                      <div className="avatar m-auto">
                        <img
                          className="avatar-img rounded"
                          alt="User Image"
                          src={
                            "https://res.cloudinary.com/dev-staunty007/image/upload/v1595664160/paymax/cabletv/nq09isd5os4fo9rklg4n.png"
                          }
                        />
                      </div>

                      <div className="avatar mr-2">
                        <img
                          className="avatar-img rounded"
                          alt="GoTV"
                          src={
                            "https://res.cloudinary.com/dev-staunty007/image/upload/v1595664160/paymax/cabletv/rw0mnoxhp6ub3uy7x3bc.png"
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <form action="#">
                  <div className="form-group row">
                    <label className="col-lg-5 col-form-label">
                      Cable TV Provider
                    </label>
                    <div className="col-lg-7">
                    <select
                    className="form-control"
                    onChange={(e)=> setCable(e.target.value)}
                    name='cable'
                    value={cable}
                  >
                        {currencyOptions?.map((telco) => (
                  <option key={telco?.id} value={telco?.text}>
                    {telco?.text}
                  </option>
                ))}
                  </select>
                    </div>
                  </div>
                  {/* Form - For School Fees Only */}
                  <div className="form-group row">
                    <label className="col-lg-5 col-form-label">
                      Tv Package/Plan
                    </label>
                    <div className="col-lg-7">
                    <select
                    className="form-control"
                    onChange={(e)=> setTV(e.target.value)}
                    name='tv'
                    value={tv}
                  >
                        {tvPlanOptions?.map((telco) => (
                  <option key={telco?.id} value={telco?.text}>
                    {telco?.text}
                  </option>
                ))}
                  </select>
                      {/* <Select2
                        className="w-100"
                        onChange={changeForm}
                        data={tvPlanOptions}
                        options={{
                          placeholder: "Select Desired Plan",
                        }}
                      /> */}
                    </div>
                  </div>

                  <div className="form-group row">
                    <label className="col-lg-5 col-form-label">
                      Modem Number
                    </label>
                    <div className="col-lg-7">
                      <input
                        type="text"
                        name="modemNumber"
                        value={modemNumber}
                        className="form-control"
                        placeholder="Your Modem Number"
                        onChange={(e) => setModemNumber(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="form-group row">
                    <label className="col-lg-5 col-form-label">Amount</label>
                    <div className="col-lg-7">
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span
                            className="mySpanClass input-group-text"
                            id="basic-addon1"
                          >
                            ₦
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          name="amount"
                          value={amount}
                          onChange={(e) => setAmount(e.target.value)}
                          placeholder="Amount"
                          aria-label="amount"
                          aria-describedby="basic-addon1"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-group row">
                    <label className="col-lg-5 col-form-label">
                      Phone Number
                    </label>
                    <div className="col-lg-7">
                      <input
                        type="text"
                        name="mobileNumber"
                        value={mobileNumber}
                        className="form-control"
                        placeholder="Your Phone Number"
                        onChange={(e) => setMobileNumber(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="text-right">
                    <button type="submit" className="btn btn-primary" onClick={submitForm}>
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-7 col-sm-7">
            <div className="card">
              <div className="card-header">
                <div className="row">
                  <div className="col">
                    <h5 className="card-title">Recent Invoices</h5>
                  </div>
                  <div className="col-auto">
                    <Link href="/invoices">
                      <a className="btn-right btn btn-sm btn-outline-primary">
                        View All
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div className="mb-3">
                  <div className="progress progress-md rounded-pill mb-3">
                    <div
                      className="progress-bar bg-success"
                      role="progressbar"
                      style={{ width: "47%" }}
                      aria-valuenow="47"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                    <div
                      className="progress-bar bg-warning"
                      role="progressbar"
                      style={{ width: "28%" }}
                      aria-valuenow="28"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                    <div
                      className="progress-bar bg-danger"
                      role="progressbar"
                      style={{ width: "15%" }}
                      aria-valuenow="15"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                    <div
                      className="progress-bar bg-info"
                      role="progressbar"
                      style={{ width: "10%" }}
                      aria-valuenow="10"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <div className="row">
                    <div className="col-auto">
                      <i className="fas fa-circle text-success mr-1"></i> Paid
                    </div>
                    <div className="col-auto">
                      <i className="fas fa-circle text-warning mr-1"></i> Unpaid
                    </div>
                    <div className="col-auto">
                      <i className="fas fa-circle text-danger mr-1"></i> Overdue
                    </div>
                    <div className="col-auto">
                      <i className="fas fa-circle text-info mr-1"></i> Draft
                    </div>
                  </div>
                </div>

                {/* table  data */}
                <div className="table-responsive">
                  <div className="flex grid-cols-5 justify-evenly p-1 border-b-2 border-gray-500">
                    <p className="text-gray-800 text-base">Customer</p>
                    <p className="text-gray-800 text-base">Amount</p>
                    <p className="text-gray-800 text-base">Tv Provider</p>
                    <p className="text-gray-800 text-base">Tv Plan</p>
                    <p className="text-gray-800 text-base">Action</p>
                  </div>
                  <div className="">
                  {data?.slice(-6)?.map((item, index)=> {
                     
                        const {cable, id, tv, mobileNumber, modemNumber, amount, } = item;
                        return (
                          <div key={id} className="flex p-1 mt-2 justify-evenly border-b-2 border-gray-900">
                            <p>Peter Doe </p>
                           <p>{cable}</p>
                           <p>{tv}</p>
                           <p>{modemNumber}</p>
                           <p>{amount}</p>
                          </div>
                        )
                      })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cabletv;
