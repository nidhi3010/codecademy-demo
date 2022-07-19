import React from "react";

import './subject-lang-data-fetch.styles.scss';

const SubLangDataFetch = ({ item }) => {
    const { title, sub } = item;
    return (
        <div className="sublang-fetch-data">

            <div className="title-sub">
                <div className="ts">
                    <p className="title">{title}</p>
                    <p className="subject">{sub}</p>
                </div>
            </div>
        </div>


    )
}
export default SubLangDataFetch;



