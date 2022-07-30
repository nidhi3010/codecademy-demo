import React from "react";
import AskedQue from "../../components/asked-questions/asked-questions.component";
import LearnersWork from "../../components/learners-work/learners-work.component";
import PriceTable from "../../components/price-table/price-table.component";
import './pricing-page.styles.scss';

const PricingPage = () => (
    <div className="pricing-page">
        <PriceTable />
        <LearnersWork/>
        <AskedQue/>
    </div>

);





export default PricingPage;