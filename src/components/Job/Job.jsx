import React from 'react';
import "./Job.css";
const Job = ({job}) => {
    const {company_logo,job_title,company_name,remote_or_onsite,fulltime_or_parttime,location,salary} = job;
    return (
        <div className='job_container'>
            <img src={company_logo} alt="" />
            <h1>{job_title}</h1>
            <h2>{company_name}</h2>
            <div className='job_type'>
                <small>{remote_or_onsite}</small>
                <small>{fulltime_or_parttime}</small>
            </div>
            <div className='location_salary'>
                <span>{location}</span>
                <span>{salary}</span>
            </div>
            <button className='view_details'>View Details</button> 
        </div> 
    );
};

export default Job;