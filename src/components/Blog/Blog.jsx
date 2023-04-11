import HeaderCoverRest from "../HeaderCoverRest/HeaderCoverRest";
import "./Blog.css";
import React from "react";

const Blog = () => {
  return (
    <div className="blog-page">
      <HeaderCoverRest>Blog Page</HeaderCoverRest>
      <div className="blog_container">
        <h1>Question Answers</h1>
        <h3>When should you use Context API ?</h3>
        <h4>
          <b>Answer: </b>We use context API when we dont want prop drilling.
          Suppose in a component chain we have a data in the top most component.
          So, If we now want to send the data as props to the last component of
          the chain, we will need to transfer the data as from from the topmost
          parent to its immediate child. Thus we need to visit all the
          components in the chain to pass that data. To avoid this we can use
          Context API. So by creating and exporting a context we can easily
          access the data among all child.
        </h4>
        <h3>What is React custom hook ?</h3>
        <h4>
          <b>Answer: </b>Custom hooks are used for code reusability. It can use
          other built in hooks and also follow the rules of hooks. Its
          traditional naming convention is for example - <b>use</b>Checker
        </h4>
        <h3>What is useRef & useMemo ?</h3>
        <h4>
          <b>Answer: </b>
          <b>useRef</b> is used to access DOM elements directly and can store
          mutable value that wont re-render when updated.<br></br>
          <b>useMemo</b> is used when we wanna memorize a function task. for
          example - you can pass a function and an array of inputs. In next
          reloads useMemo will only recompute when the input values are changed.
        </h4>
      </div>
    </div>
  );
};

export default Blog;
