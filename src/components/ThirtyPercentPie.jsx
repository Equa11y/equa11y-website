import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';

export default function PieChartThirty() {
  const data = [
    { name: 'Errors Caught', value: 30 },
    { name: 'Manual Testing Required', value: 70 },
  ];

  const COLORS = ['#3A6884', '#695282', '#A50060', '#BF5000'];

  const renderCustomizedLabel = data => {
    return data.name;
  };

  return (
    <PieChart width={800} height={800}>
      <Pie
        data={data}
        cx={400}
        cy={200}
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={120}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
}
