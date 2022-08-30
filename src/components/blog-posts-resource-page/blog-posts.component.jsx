import React from "react";
import './blog-posts.styles.scss';

const BlogPosts = () => (
  <div className="blog-posts">
    <h2>Blog posts</h2>
    <div className="posts">
      <div className="learn-from-home">
        <img src="https://images.ctfassets.net/kcw3l04aboxk/6fLbJunqLLaYHIyQUwFZK1/d40b9e8465fceaae3a175089b4bef8cd/lfh.png" />
        <h3>7 tips for learning from home</h3>
        <p><a href="#"><b>Read on the blog</b></a></p>
      </div>
      <div className="codecademy-team">
        <img src="https://images.ctfassets.net/kcw3l04aboxk/2FUTutTLGUzDH4XnrfbhYf/c4feb59d3953e18dc6867a23a3557fb4/community.png" />
        <h3>Career and internship advice<br />from the Codecademy team</h3>
        <p><a href="#"><b>Read on the blog</b></a></p>
      </div>
      <div className="pro-mem">
        <img src="https://images.ctfassets.net/kcw3l04aboxk/4Qxzbp1RQ9yTpU8inqQM2z/d1b2f5b8938d4b1b386acdfe3912aa13/student_plan.png" />
        <h3>Get the most out of your<br />Codecademy Pro Student<br />membership</h3>
        <p><a href="#"><b>Read on the blog</b></a></p>
      </div>
    </div>
    <div className="get-free-pro-class">
    <h2 className="getfree-pro">Get free Pro memberships for your high school class</h2>
    <p>We've partnered with Clever to give free Pro memberships to high school<br />classes in the U.S. Teachers can sign up their entire class in a few simple steps<br />using the link below.</p>
    <a className="visit-clever" href="#">Visit Clever</a>
    </div>
  </div>
  
)
export default BlogPosts;