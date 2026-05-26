"use client"

import React, { useEffect, useState } from 'react';

const ImpactSection = () => {
  const stats = [
    { id: 1, icon: '📅', target: 4, label: 'Years in Operation' },
    { id: 2, icon: '😊', target: 500, label: 'Happy Clients' },
    { id: 3, icon: '🌍', target: 25, label: 'Markets Served' },
    { id: 4, icon: '📦', target: 500, label: 'Products Delivered' },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));
  const [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
    // Only run animation once
    if (animationStarted) return;
    
    setAnimationStarted(true);
    
    const timeouts = [];
    
    stats.forEach((stat, index) => {
      const increment = () => {
        setCounts((prevCounts) => {
          const updatedCounts = [...prevCounts];
          if (updatedCounts[index] < stat.target) {
            updatedCounts[index] = Math.min(
              updatedCounts[index] + Math.ceil(stat.target / 50),
              stat.target
            );
            // Schedule next increment
            timeouts.push(setTimeout(increment, 20));
          }
          return updatedCounts;
        });
      };
      increment();
    });
    
    // Cleanup timeouts
    return () => {
      timeouts.forEach(timeout => clearTimeout(timeout));
    };
  }, [animationStarted, stats]);

  return (
    <div className="impact-section py-8 px-4 text-center">
      <h2 className="text-3xl font-bold mb-4">
        Our <span className="text-steelblue">Impact</span>
      </h2>
      <p className="pb-3 text-gray-600">
        Rayen Limited continues to drive growth and innovation across multiple sectors. Here’s a snapshot of our
        success.
      </p>

      <div className="impact-stats grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 container mx-auto">
        {stats.map((stat, index) => (
          <div
            key={stat.id}
            className="stat-box bg-white shadow-md rounded-lg p-6 flex flex-col items-center"
          >
            <div
              className="text-4xl mb-4 p-3 flex items-center justify-center"
              style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                backgroundColor: '#4682B4',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem',
              }}
            >
              {stat.icon}
            </div>
            <div className="stat-number text-3xl font-semibold text-steelblue">
              {counts[index]}+
            </div>
            <div className="stat-label text-gray-700">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImpactSection;