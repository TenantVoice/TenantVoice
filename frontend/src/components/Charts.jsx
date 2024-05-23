// 'use client';
import React, { useEffect, useState } from 'react';
import {
    PieChart, Pie, Cell,
    BarChart, Bar, XAxis, YAxis, CartesianGrid,
    Tooltip, Legend, ResponsiveContainer, LineChart,
    Line,
} from 'recharts';
import { getAllPosts } from '../adapters/post-adapter';
import { buildTransform } from 'framer-motion';

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


const serviceLevelPerformance = () => {
    return [
        { "month": "Jan-2024", "Average Days": 370 },
        { "month": "Feb-2024", "Average Days": 379 },
        { "month": "Mar-2024", "Average Days": 370 },
        { "month": "Apr-2024", "Average Days": 371 }
    ];
};

const DayToSolveBarChart = () => {
    return (
        <div style={{ width: '100%', height: '400px' }}>
            <ResponsiveContainer>
                <BarChart
                    data={serviceLevelPerformance()}
                    margin={{
                        top: 10, right: 30, left: 0, bottom: 0
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Average Days" fill="#2563eb" />
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
                    Created:
                    <span className="ml-2">{payload[0].value}</span>
                </p>
                <p className="text-sm text-indigo-400">
                    Closed/cancelled:
                    <span className="ml-2">{payload[1].value}</span>
                </p>
            </div>
        );
    }
};

// pie chart:

const ThePieChart = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        getAllPosts().then(posts => {
            const categoryCounts = posts.reduce((acc, post) => {
                acc[post.category] = (acc[post.category] || 0) + 1;
                return acc;
            }, {});

            const totalPosts = posts.length;
            const transformedData = Object.keys(categoryCounts).map(category => ({
                name: category,
                value: categoryCounts[category],
                percent: (categoryCounts[category] / totalPosts)
            }));

            setData(transformedData);
        });
    }, []);

    console.log(data)
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

    return (
        <ResponsiveContainer width="1000%" height={500}>
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
                <Legend />
            </PieChart>
        </ResponsiveContainer>
    );
};

const UsersPieChart = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        getAllPosts().then(posts => {
            const boroughCounts = posts.reduce((acc, post) => {
                acc[post.borough] = (acc[post.borough] || 0) + 1;
                return acc;
            }, {});

            const transformedData = Object.keys(boroughCounts).map(borough => ({
                name: borough,
                value: boroughCounts[borough],
            }));

            setData(transformedData);
        });
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
                <Tooltip />
                <Legend />
            </PieChart>
        </ResponsiveContainer>
    );
};

const boroughs = () => {
    return [
        { name: "Manhattan", value: 99777 },
        { name: "Brooklyn", value: 102907 },
        { name: "Queens", value: 30452 },
        { name: "Bronx", value: 87903 },
        { name: "Staten Island", value: 9079 },
    ];
}

const LineChartComponent = () => {
    const data = boroughs();  // Call the function to get the data
    return (
        <ResponsiveContainer width="100%" height={400}>
            <LineChart
                data={data}  // Use the data here
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="value" stroke="#3b82f6" />
            </LineChart>
        </ResponsiveContainer>
    );
};

export default LineChartComponent;

export { ThePieChart, BarChartComponent, LineChartComponent, DayToSolveBarChart, UsersPieChart };
