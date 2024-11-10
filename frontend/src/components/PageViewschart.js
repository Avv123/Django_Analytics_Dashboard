import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Card, Title } from '@tremor/react';
import { format } from 'date-fns';

const PageViewsChart = ({ data }) => {
  const chartData = data.map(item => ({
    timestamp: format(new Date(item.timestamp), 'HH:mm:ss'),
    views: 1
  }));

  return (
    <Card>
      <Title>Page Views Over Time</Title>
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="timestamp" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="views" stroke="#3b82f6" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default PageViewsChart;