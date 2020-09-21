import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';

export default function PieChartThirty() {
  const data = [
    { name: 'Errors Caught by Automated Testing', value: 30 },
    { name: 'Errors Requiring Manual Testing', value: 70 },
  ];

  const COLORS = ['#3A6884', '#695282'];

  const renderCustomizedLabel = data => {
    return data.name;
  };

  return (
    <PieChart fontSize="20px" width={800} height={800}>
      <Pie
        data={data}
        cx={400}
        cy={200}
        label={renderCustomizedLabel}
        outerRadius={120}
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
}
