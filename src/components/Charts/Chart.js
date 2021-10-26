import React from "react";
import './Chart.css';
import ChartBar from "./ChartBar";


function Chart(props) {
    const maxValue = props.dataPoints.reduce((acc, data) => acc.value > data.value ? acc : data, 0).value;
    console.log(maxValue);
    return (
        <div className='chart'>
            {props.dataPoints.map(dataPoint => <ChartBar key={dataPoint.label} value={dataPoint.value} maxValue={maxValue} label={dataPoint.label} />)}
        </div>
    );
}

export default Chart;