import React from "react";

import { RiArrowDropUpLine } from 'react-icons/ri';

import './catalog-page.styles.scss';


const CatalogPage = () => (
    <div className="catalog-page">
        <div className="language">
            <p>Languages<RiArrowDropUpLine /></p>
            <ul>
                <li><a href="#">HTML & CSS</a></li>
                <li><a href="#">Python</a></li>
                <li><a href="#">Java Script</a></li>
                <li><a href="#">Java</a></li>
                <li><a href="#">SQL</a></li>
                <li><a href="#">Bash/Shell</a></li>
                <li><a href="#">Ruby</a></li>
                <li><a href="#">C++</a></li>
                <li><a href="#">R</a></li>
                <li><a href="#">C#</a></li>
                <li><a href="#">PHP</a></li>
                <li><a href="#">Go</a></li>
                <li><a href="#">Swift</a></li>
                <li><a href="#">Kotlin</a></li>
                <li><a href="#">C</a></li>
            </ul>
        </div>

    </div>
)

export default CatalogPage;