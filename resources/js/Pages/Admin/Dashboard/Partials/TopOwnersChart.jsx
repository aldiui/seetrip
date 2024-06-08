import React from "react";
import Chart from "react-apexcharts";

const TopOwnersChart = ({ data }) => {
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
            categories: data.map((item) => item.owner_name),
        },
        yaxis: {
            title: {
                text: "Total Tickets",
            },
        },
        fill: {
            opacity: 1,
        },
    };

    const chartSeries = [
        {
            name: "Total Tickets",
            data: data.map((item) => item.total_tickets),
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

export default TopOwnersChart;
