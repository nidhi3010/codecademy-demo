import React, { useState } from "react";
import CATALOG_COURSES from '../../catalog-courses.data';
import CatalogCourseDataFetch from "../catalog-course-data-fetch/catalog-course-data-fetch.component";

import './catalog-course.styles.scss';

const CatalogCourse = () => {
    const [items] = useState(CATALOG_COURSES);
    return (
        <div className="catalog-course">
           
            {
                items.map((item) => (<CatalogCourseDataFetch key={item.id} item={item} />))

            }
        </div>
    )
}

export default CatalogCourse;




















