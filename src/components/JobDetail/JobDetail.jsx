import { useLoaderData, useParams } from "react-router-dom";
import "./JobDetail.css";
import React, { useContext, useEffect, useState } from "react";
// import { JobsContext } from "../Root/Root";

const JobDetail = () => {
  const { jobId } = useParams();
  let jobsData = useLoaderData(); 

  jobsData = jobsData.find(job => job.id == jobId);
//   const currentJobs = jobsData.map(job => console.log(typeof job.id));

  return (
    <div className="job-details-container">
    </div>
  );
};

export default JobDetail;
