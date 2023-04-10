import React, { useContext, useState } from "react";
import "./Home.css";
import HeaderCover from "../HeaderCover/HeaderCover";
import { useLoaderData } from "react-router-dom";
import Category from "../Category/Category";
import { JobsContext } from "../Root/Root";
import Job from "../Job/Job";
const Home = () => {
  const categories = useLoaderData();
  const jobsData = useContext(JobsContext);
  const [all, setAll] = useState(false);
  let jobArr = [...jobsData];
  if( all === false){
    jobArr = jobArr.splice(0,4);
  }
  const seeAllJobs = () => {
    setAll(!all);
  };
  console.log(all);
  const [jobs, setJobs] = useState([]);
  return (
    <div className="Home_jobs_container">
      <HeaderCover></HeaderCover>
      <div className="job_category_list">
        <h1>Job Category List</h1>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="categories_container">
        {categories.map((category) => (
          <Category key={category.id} category={category}></Category>
        ))}
      </div>
      <div className="job_category_list">
        <h1>Featured Jobs</h1>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="jobs_container_home">
        {   
                jobArr.map((job) => (
                <Job key={job.id} job={job}></Job>
            
        ))
        }
      </div>
      <button onClick={seeAllJobs} className="see_all_jobs">
        {all ? 'Show less' : "See All Jobs"}
      </button>
    </div>
  );
};

export default Home;
