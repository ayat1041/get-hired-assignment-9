import { Link } from "react-router-dom";
import AppliedJobs from "../AppliedJobs/AppliedJobs";
import Job from "../Job/Job";
import "./Applied.css";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faLandmark,
  faLocation,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

const Applied = ({ id, data, type }) => {
  const job = data.find((item) => item.id == id);
  // console.log(job)
  const {
    company_logo,
    company_name,
    job_title,
    remote_or_onsite,
    fulltime_or_parttime,
    location,
    salary,
  } = job;
  if (type == 0) {
    return (
      <div className="applied_container">
        {/* <h1>{job.company_name}</h1> */}
        <div className="applied_image_container">
          <img src={company_logo}></img>
        </div>
        <div className="applied_info_container">
          <h1>{job_title}</h1>
          <h2>{company_name}</h2>
          <div className="job_type">
            <small>{remote_or_onsite}</small>
            <small>{fulltime_or_parttime}</small>
          </div>
          <div className="location_salary">
            <span>
              <FontAwesomeIcon icon={faLocationDot} /> {location}
            </span>
            <span>$ Salary : {salary}</span>
          </div>
        </div>
        <button>
          <Link to={`/job/${id}`}>View Details</Link>
        </button>
      </div>
    );
  } else if (type == 1) {
    if (remote_or_onsite == "Remote") {
      return (
        <div className="applied_container">
          {/* <h1>{job.company_name}</h1> */}
          <div className="applied_image_container">
            <img src={company_logo}></img>
          </div>
          <div className="applied_info_container">
            <h1>{job_title}</h1>
            <h2>{company_name}</h2>
            <div className="job_type">
              <small>{remote_or_onsite}</small>
              <small>{fulltime_or_parttime}</small>
            </div>
            <div className="location_salary">
              <span>
                <FontAwesomeIcon icon={faLocationDot} /> {location}
              </span>
              <span>$ Salary : {salary}</span>
            </div>
          </div>
          <button>
            <Link to={`/job/${id}`}>View Details</Link>
          </button>
        </div>
      );
    }
  } else if (type == 2) {
    if (remote_or_onsite == "Onsite") {
      return (
        <div className="applied_container">
          {/* <h1>{job.company_name}</h1> */}
          <div className="applied_image_container">
            <img src={company_logo}></img>
          </div>
          <div className="applied_info_container">
            <h1>{job_title}</h1>
            <h2>{company_name}</h2>
            <div className="job_type">
              <small>{remote_or_onsite}</small>
              <small>{fulltime_or_parttime}</small>
            </div>
            <div className="location_salary">
              <span>
                <FontAwesomeIcon icon={faLocationDot} /> {location}
              </span>
              <span>$ Salary : {salary}</span>
            </div>
          </div>
          <button>
            <Link to={`/job/${id}`}>View Details</Link>
          </button>
        </div>
      );
    }
  }
};

export default Applied;
