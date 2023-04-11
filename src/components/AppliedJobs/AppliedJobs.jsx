import { Link, useLoaderData } from "react-router-dom";
import { getFromLocal } from "../../utilities/addToLocal";
import HeaderCoverRest from "../HeaderCoverRest/HeaderCoverRest";
import "./AppliedJobs.css";
import React, { useEffect, useState } from "react";
import Job from "../Job/Job";
import Applied from "../Applied/Applied";

const AppliedJobs = () => {
  const [local, setLocal] = useState([]);
  const [filter, setFilter] = useState(false);
  const [type, setType] = useState(0);
  const data = useLoaderData();
  useEffect(() => {
    const storage = getFromLocal();
    setLocal(storage);
  }, []);

  const filterBy = () => {
    setFilter((filter) => !filter);
  };
  const typeHandle = (mark) => {
    setType(mark);
    filterBy();
  };
  return (
    <div className="applied-page">
      <HeaderCoverRest>Applied Jobs</HeaderCoverRest>
      <div className="applied_job_page_container">
        <div className="filter_by">
          <div onClick={filterBy} className="filter">
            Filter By{" "}
          </div>
          {filter && (
            <div className="remote_onsite">
              <a onClick={() => typeHandle(1)}>Remote</a>
              <hr></hr>
              <a onClick={() => typeHandle(2)}>Onsite</a>
              <hr></hr>
              <a onClick={() => typeHandle(0)}>All</a>
            </div>
          )}
        </div>

        {local?.length ? (
          local.map((id) => (
            <Applied key={id} id={id} data={data} type={type}></Applied>
          ))
        ) : (
          <h1 style={{ textAlign: "center", paddingBlock: "100px" }}>
            You didn't applied for any jobs.
          </h1>
        )}
      </div>
    </div>
  );
};

export default AppliedJobs;
