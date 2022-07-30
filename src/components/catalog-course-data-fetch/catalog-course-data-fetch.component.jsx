import React from "react";
import './catalog-course-data-fetch.styles.scss';


const CatalogCourseDataFetch = ({ item }) => {
    const { pro, pretitle, title, body, num, less, bottom } = item;

    return (
        <div className="catalog-data-fetch">
            <div className="cata-card">
                <p className="cc1"><span>{pro}</span>{pretitle}</p>
                <h3>{title}</h3>
                <li><p className="cc2">{body}<b>{num}</b>{less}</p></li>
                <span className="cb1">{bottom}</span>
            </div>
        </div>

    )
}
export default CatalogCourseDataFetch;






