import React from "react";
import Chart from "react-apexcharts";

const MonthlyRevenueChart = ({ data }) => {
    const chartOptions = {
        chart: {
            type: "bar",
            height: 350,
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: "55%",
            },
        },
        dataLabels: {
            enabled: false,
        },
        xaxis: {
            categories: data.map((item) => item.month),
        },
        yaxis: {
            title: {
                text: "Revenue",
            },
        },
        fill: {
            opacity: 1,
        },
    };

    const chartSeries = [
        {
            name: "Revenue",
            data: data.map((item) => item.revenue),
        },
    ];

    return (
        <Chart
            options={chartOptions}
            series={chartSeries}
            type="bar"
            height={350}
        />
    );
};

export default MonthlyRevenueChart;
