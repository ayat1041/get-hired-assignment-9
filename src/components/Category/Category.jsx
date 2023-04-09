import "./Category.css"
import React from 'react';

const Category = ({category}) => {
    const {id,category_icon,category_name,num_positions_available} = category;
    return (
        <div className='category_container'>
            <img src={category_icon} alt="" />
            <h6>{category_name}</h6>
            <p>{num_positions_available} Jobs Available</p>
        </div>
    );
};

export default Category;