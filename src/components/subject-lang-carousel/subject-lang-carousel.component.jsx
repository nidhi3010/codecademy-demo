import React from "react";
import { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from 'react-elastic-carousel';
import SUB_LANG_CAROUSEL_DATA from "../../sub-lang-carousel.data";
import SubLangDataFetch from "../subject-lang-data-fetch/subject-lang-data-fetch.component";
import './subject-lang-carousel.styles.scss';


const SubLangCarousel = () => {
    const [items] = useState(SUB_LANG_CAROUSEL_DATA);
    const breakPoints = [{
        width: 1, itemsToShow: 3
    }];

    return (
        <div className="sublang-carousel">
            <div className="fetch">
                <Carousel className="break-point" breakPoints={breakPoints}>
                    {
                        items.map((item) => (<SubLangDataFetch key={item.id} item={item} />))
                    }
                </Carousel>
            </div>
        </div>

    )
};
export default SubLangCarousel;










