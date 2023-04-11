import { useLoaderData } from "react-router-dom";
import { getFromLocal } from "../../utilities/addToLocal";
import HeaderCoverRest from "../HeaderCoverRest/HeaderCoverRest";
import "./AppliedJobs.css";
import React, { useEffect, useState } from "react";
import Job from "../Job/Job";
import Applied from "../Applied/Applied";

const AppliedJobs = () => {
  const [local, setLocal] = useState([]);
  const data = useLoaderData();
  useEffect(() => {
    const storage = getFromLocal();
    setLocal(storage)
  },[])
  return (
    <div className="applied-page">
      <HeaderCoverRest>Applied Jobs</HeaderCoverRest>
      <div className="applied_job_page_container">
      {
        local?.length? local.map(id => <Applied key={id} id={id} data={data}></Applied>) : <h1 style={{textAlign:"center",paddingBlock:"100px"}}>You didn't applied for any jobs.</h1>
      }
    </div>
    </div>
  );
};

export default AppliedJobs;
