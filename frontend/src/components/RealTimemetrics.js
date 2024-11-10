import React from 'react';
import { Card, Metric, Text } from '@tremor/react';

const RealTimeMetrics = ({ data }) => {
  const calculateMetrics = () => {
    const last5Minutes = Date.now() - 5 * 60 * 1000;
    const recentPageViews = data.pageViews.filter(
      pv => new Date(pv.timestamp) > last5Minutes
    ).length;
    const recentClicks = data.userClicks.filter(
      click => new Date(click.timestamp) > last5Minutes
    ).length;

    return { recentPageViews, recentClicks };
  };

  const { recentPageViews, recentClicks } = calculateMetrics();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Card>
        <Text>Page Views (Last 5 min)</Text>
        <Metric>{recentPageViews}</Metric>
      </Card>
      <Card>
        <Text>User Clicks (Last 5 min)</Text>
        <Metric>{recentClicks}</Metric>
      </Card>
    </div>
  );
};

export default RealTimeMetrics;