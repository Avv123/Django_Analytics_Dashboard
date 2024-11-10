import React, { useState, useEffect } from 'react';
import PageViewsChart from './PageViewsChart';
import ClicksHeatmap from './ClicksHeatmap';
import RealTimeMetrics from './RealTimeMetrics';
import { useWebSocket } from '../services/websocket';

const Dashboard = () => {
  const [realTimeData, setRealTimeData] = useState({
    pageViews: [],
    userClicks: []
  });

  const onMessage = (data) => {
    setRealTimeData(prev => ({
      pageViews: [...prev.pageViews, data].slice(-100),
      userClicks: [...prev.userClicks, data].slice(-100)
    }));
  };

  useWebSocket(onMessage);

  return (
    <div className="space-y-6">
      <RealTimeMetrics data={realTimeData} />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PageViewsChart data={realTimeData.pageViews} />
        <ClicksHeatmap data={realTimeData.userClicks} />
      </div>
    </div>
  );
};

export default Dashboard;