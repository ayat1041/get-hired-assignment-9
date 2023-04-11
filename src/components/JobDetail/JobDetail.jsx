import { useLoaderData, useParams } from "react-router-dom";
import "./JobDetail.css";
import React, { useContext, useEffect, useState } from "react";
import HeaderCoverRest from "../HeaderCoverRest/HeaderCoverRest";
import { addToLocal } from "../../utilities/addToLocal";
// import { JobsContext } from "../Root/Root";

const JobDetail = () => {
  const { jobId } = useParams();
  let jobsData = useLoaderData(); 

  jobsData = jobsData.find(job => job.id == jobId);
  const {id,job_description,job_responsibility,educational_requirements,experiences,salary,job_title,contact_information,location} = jobsData;
//   const currentJobs = jobsData.map(job => console.log(typeof job.id));

  return (
    <div className="job-details-page">
        <HeaderCoverRest>Job Details</HeaderCoverRest>
    <div className="job-details-container">
        <div className="job-details-left">
            <h1><span>Job Description: </span>{job_description}</h1>
            <h1><span>Job Responsibility: </span>{job_responsibility}</h1>
            <h1><span>Educational Requirements: </span><br></br>{educational_requirements}</h1>
            <h1><span>Experiences: </span><br></br>{experiences}</h1>
        </div>
        <div className="job-details-right-container">
            <div className="job-details-right">
            <h2>Job Details</h2>
            <hr></hr>
            <h3><span>Salary:</span> {salary} (Per Month)</h3>
            <h3><span>Job Title:</span> {job_title}</h3>
            <h2>Contact Information</h2>
            <hr></hr>
            <h3><span>Phone:</span> {contact_information.phone}</h3>
            <h3><span>Email:</span> {contact_information.email}</h3>
            <h3><span>Address:</span> {location}</h3>
            </div>
            <button onClick={()=> addToLocal(id) }>Apply Now</button>
        </div>
    </div>
    </div>
  );
};

export default JobDetail;
