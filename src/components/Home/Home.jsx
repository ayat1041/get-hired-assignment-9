import React, { useContext, useState } from 'react';
import "./Home.css";
import HeaderCover from '../HeaderCover/HeaderCover';
import { useLoaderData } from 'react-router-dom';
import Category from '../Category/Category';
import { JobsContext } from '../Root/Root';
const Home = () => {
    const categories = useLoaderData();
    const jobsData = useContext(JobsContext);
    console.log(jobsData)
    const [jobs,setJobs] = useState([]);
    return (
        <div>
            <HeaderCover></HeaderCover>
            <div className='job_category_list'>
                <h1>Job Category List</h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='categories_container'>
            {
                categories.map(category => <Category
                key = {category.id}
                category = {category}
                ></Category>)
            }
            </div>
            <div className='job_category_list'>
                <h1>Featured Jobs</h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
        </div>
    );
};

export default Home;