import React, { useEffect, useRef } from 'react';
import h337 from 'heatmap.js';

const HeatMap = ({ data }) => {
  const heatmapContainer = useRef(null);

  useEffect(() => {
    if (!heatmapContainer.current) return;

    const heatmapInstance = h337.create({
      container: heatmapContainer.current,
      maxOpacity: 0.6,
      radius: 50,
      blur: 0.90,
      gradient: {
        '.5': 'blue',
        '.8': 'red',
        '.95': 'white'
      }
    });

    heatmapInstance.setData(data);

    return () => {
      if (heatmapInstance._renderer.canvas) {
        heatmapInstance._renderer.canvas.remove();
      }
    };
  }, [data]);

  return <div className="heatmap-container" ref={heatmapContainer}></div>;
};

export default HeatMap;
