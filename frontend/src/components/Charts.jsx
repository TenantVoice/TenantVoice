// 'use client';
import React, { useEffect, useState } from 'react';

import {
    PieChart, Pie, Cell,
    BarChart, Bar, XAxis, YAxis, CartesianGrid,
    Tooltip, Legend, ResponsiveContainer,
} from 'recharts';

const salesData = [
    {
        name: 'Jan',
        revenue: 4000,
        profit: 2400,
    },
    {
        name: 'Feb',
        revenue: 3000,
        profit: 1398,
    },
    {
        name: 'Mar',
        revenue: 9800,
        profit: 2000,
    },
    {
        name: 'Apr',
        revenue: 3908,
        profit: 2780,
    },
    {
        name: 'May',
        revenue: 4800,
        profit: 1890,
    },
    {
        name: 'Jun',
        revenue: 3800,
        profit: 2390,
    },
];

const BarChartComponent = () => {
    return (
        <div style={{ width: '100%', height: '400px' }}> {/* Ensure some default sizing */}
            <ResponsiveContainer>
                <BarChart
                    data={salesData}
                    margin={{
                        right: 30,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend />
                    <Bar dataKey="revenue" fill="#2563eb" />
                    <Bar dataKey="profit" fill="#8b5cf6" />
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
            { name: "Manhattan", value: 400 },
            { name: "Brooklyn", value: 300 },
            { name: "Queens", value: 300 },
            { name: "Bronx", value: 200 },
            { name: "Staten Island", value: 100 },
        ];
    };

    useEffect(() => {
        setData(fetchData());
        // Your fetch request will go here
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
                    outerRadius={150}
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

export { ThePieChart, BarChartComponent };
