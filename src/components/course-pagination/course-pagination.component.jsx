import React from "react";
import { useState } from "react";
import { useEffect } from "react";

import { FiChevronLeft } from 'react-icons/fi';
import { FiChevronRight } from 'react-icons/fi';

import './course-pagination.styles.scss';

const CoursePagination = ({ showPerPage, onPaginationChange, total }) => {
    //  console.log(showPerPage);

    const [counter, setCounter] = useState(1);
    const [numberOfButtons, setNumberOfButtons] = useState(
        Math.ceil(total / showPerPage)
    );


    useEffect(() => {
        const value = showPerPage * counter;
        //    console.log("start value:" , value - showPerPage);
        //    console.log("end value:", value);
        onPaginationChange(value - showPerPage, value);
    }, [counter]);

    const onButtonClick = (type) => {
        if (type === "prev") {
            if (counter === 1) {
                setCounter(1);
            } else {
                setCounter(counter - 1);
            }
        } else if (type === "next") {
            if (numberOfButtons === counter) {
                setCounter(counter)
            } else {
                setCounter(counter + 1);
            }
        }
    }

    return (
        <div className="course-pagiantion">
            <nav aria-label="Page navigation example">
                <ul class="pagination">
                    <li class="page-item"><a class="page-link" href="#"><FiChevronLeft style={{"fontSize":"1.7rem"}} onClick={() => onButtonClick("prev")} /></a></li>

                    {
                        new Array(numberOfButtons).fill("").map((el, index) => (
                            <li class={`page-item ${index + 1 === counter ? "active" : null}`}>
                                <a class="page-link" href="#" onClick={() => setCounter(index + 1)}>
                                    {index + 1}
                                </a></li>
                        ))
                    }
                    <li class="page-item"><a class="page-link" href="#"><FiChevronRight style={{"fontSize":"1.7rem"}} onClick={() => onButtonClick("next")} /></a></li>
                </ul>
            </nav>

        </div>
    )
}

export default CoursePagination;