import React from 'react';
import { Card, Title } from '@tremor/react';

const ClicksHeatmap = ({ data }) => {
  const canvasRef = React.useRef(null);

  React.useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    data.forEach(click => {
      ctx.beginPath();
      ctx.arc(click.x, click.y, 5, 0, 2 * Math.PI);
      ctx.fillStyle = 'rgba(59, 130, 246, 0.5)';
      ctx.fill();
    });
  }, [data]);

  return (
    <Card>
      <Title>Click Heatmap</Title>
      <canvas
        ref={canvasRef}
        width={800}
        height={400}
        className="w-full h-72"
      />
    </Card>
  );
};

export default ClicksHeatmap;