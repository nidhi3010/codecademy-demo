import React from "react";



import './get-inspired.styles.scss';

const GetInspired = () => (
    <div className="get-inspired">
        <h2 className="get">Get inspired</h2>
        <div className="best-resources">
            <div className="video">
                <a href="#">Video</a>
                <h3>What is a Programming<br /> Language?</h3>
            </div>
            <div className="blog">
                <a href="#">Blog</a>
                <h3>Our First Mobile <br />Development Path Has<br /> Arrived</h3>
            </div>
            <div className="video-2">
                <a href="#">Video</a>
                <h3>How to Think Like a<br /> Programmer</h3>
            </div>
            <div className="video-3">
                <a href="#">Video</a>
                <h3>How Long Does it Take to <br />Learn to Code?</h3>
            </div>
        </div>
        <div className="img-resource">
            <img src="https://images.ctfassets.net/go6kr6r0ykrq/12jJ3cWg6gTfZFfGZZZxM8/ff0e4bd1d60c86f8580a067e2f267854/image__7_.png" />
            <p>Resource</p>
            <h3>Our best resources for students</h3>
        </div>

        <div className="blog-video-card">
            <div className="blog-video-card-1">
                <img src="https://static-assets.codecademy.com/assets/components/resources/blog/standard/group-60.svg" />
                <p>Blog</p>
                <h3>How to stay motivated <br />when learning to code</h3>
            </div>

            <div className="blog-video-card-2">
                <img src="https://static-assets.codecademy.com/assets/components/resources/blog/standard/group-59.svg" />
                <p>Blog</p>
                <h3>What does a Data <br />Scientist do?</h3>
            </div>

            <div className="blog-video-card-3">
                <img src="https://static-assets.codecademy.com/assets/components/resources/video/standard/group-79.svg" />
                <p>Video</p>
                <h3>What Programming <br />Language Should You<br /> Learn?</h3>
            </div>
        </div>

        <div className="article">
            <img src="https://static-assets.codecademy.com/assets/components/resources/article/standard/group-7.svg" />
            <p>Article</p>
            <h3>Consider Design While You Build</h3>
        </div>
        <div className="article-video-blog">
            <div className="ar">
                <a href="#">Article</a>
                <h3>What is a Programming</h3>
            </div>
            <div className="vi">
                <a href="#">Video</a>
                <h3>Learn From Home Day: Intro<br /> to JavaScript—the Language<br /> of the Internet!</h3>
            </div>
            <div className="vi-2">
                <a href="#">Video</a>
                <h3>What is Front-End?</h3>
            </div>
            <div className="bl">
                <a href="#">Blog</a>
                <h3>Myspace and the Coding<br /> Legacy</h3>
            </div>
        </div>

        <div className="back-end">
            <img src="https://static-assets.codecademy.com/assets/components/resources/video/standard/group-79.svg" />
            <p>Video</p>
            <h3>What is Back-End?</h3>
        </div>



    </div>
)
export default GetInspired;