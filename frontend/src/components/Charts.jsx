// 'use client';
import React, { useEffect, useState } from 'react';

import {
    PieChart, Pie, Cell,
    BarChart, Bar, XAxis, YAxis, CartesianGrid,
    Tooltip, Legend, ResponsiveContainer, LineChart,
    Line,
} from 'recharts';

// import { getAllPosts } from '../adapters/post-adapter';

const salesData = [

    { "month": "Jan", "created": 211800, "closed": 214500 },
    { "month": "Feb", "created": 241500, "closed": 201000 },
    { "month": "Mar", "created": 208300, "closed": 203300 },
    { "month": "Apr", "created": 240100, "closed": 205500 }

];




const BarChartComponent = () => {
    return (
        <div style={{ width: '100%', height: '400px' }}>
            <ResponsiveContainer>
                <BarChart
                    data={salesData}
                    margin={{
                        right: 30,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend />
                    <Bar dataKey="created" fill="#2563eb" />
                    <Bar dataKey="closed" fill="#8b5cf6" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

// export default BarChartComponent;



const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="p-4 bg-slate-900 flex flex-col gap-4 rounded-md">
                <p className="text-medium text-lg">{label}</p>
                <p className="text-sm text-blue-400">
                    Revenue:
                    <span className="ml-2">${payload[0].value}</span>
                </p>
                <p className="text-sm text-indigo-400">
                    Profit:
                    <span className="ml-2">${payload[1].value}</span>
                </p>
            </div>
        );
    }
};

// pie chart:

const ThePieChart = () => {
    const [data, setData] = useState([]);

    // Dummy data to simulate the expected structure
    const fetchData = () => {
        return [
            { name: "Manhattan", value: 99777 },
            { name: "Brooklyn", value: 102907 },
            { name: "Queens", value: 30452 },
            { name: "Bronx", value: 87903 },
            { name: "Staten Island", value: 9079 },
        ];


    };

    useEffect(() => {
        setData(fetchData());
        // fetch go here

    }, []);

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

    return (
        <ResponsiveContainer width="100%" height={400}>
            <PieChart>
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                {/* <Tooltip /> */}
                <Legend />
            </PieChart>
        </ResponsiveContainer>
    );
};

const serviceLevelPerformance = () => {
    return [
        { "month": "Apr-2023", "Average Days": 358 },
        { "month": "May-2023", "Average Days": 366 },
        { "month": "Jun-2023", "Average Days": 352 },
        { "month": "Jul-2023", "Average Days": 356 },
        { "month": "Aug-2023", "Average Days": 358 },
        { "month": "Sep-2023", "Average Days": 366 },
        { "month": "Oct-2023", "Average Days": 359 },
        { "month": "Nov-2023", "Average Days": 366 },
        { "month": "Dec-2023", "Average Days": 378 },
        { "month": "Jan-2024", "Average Days": 370 },
        { "month": "Feb-2024", "Average Days": 379 },
        { "month": "Mar-2024", "Average Days": 370 },
        { "month": "Apr-2024", "Average Days": 371 }
    ];
};


const LineChartComponent = () => {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <LineChart
                data={serviceLevelPerformance()}  // Call the function to get the data
                margin={{ right: 30 }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                {/* <Tooltip content={<CustomTooltip />} /> */}
                <Legend />
                <Line type="monotone" dataKey="Average Days" stroke="#3b82f6" />
            </LineChart>
        </ResponsiveContainer>
    );
};


export default LineChartComponent;


export { ThePieChart, BarChartComponent, LineChartComponent };
