import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const DosageChart = () => {
  // Sample data for the last 24 hours
  const data = [
    { time: '00:00', glucose: 95, insulin: 0 },
    { time: '04:00', glucose: 98, insulin: 0 },
    { time: '08:00', glucose: 120, insulin: 2 },
    { time: '12:00', glucose: 110, insulin: 1 },
    { time: '16:00', glucose: 105, insulin: 0 },
    { time: '20:00', glucose: 130, insulin: 3 },
    { time: '24:00', glucose: 110, insulin: 0 },
  ];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg">
          <p className="text-sm font-medium text-gray-900">{`Time: ${label}`}</p>
          <p className="text-sm text-glucose-green">
            Glucose: {payload[0]?.value} mg/dL
          </p>
          <p className="text-sm text-insulin-blue">
            Insulin: {payload[1]?.value} units
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Recent Readings</h3>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-glucose-green rounded-full"></div>
            <span className="text-sm text-gray-600">Glucose</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-insulin-blue rounded-full"></div>
            <span className="text-sm text-gray-600">Insulin</span>
          </div>
        </div>
      </div>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis 
              dataKey="time" 
              stroke="#6b7280"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis 
              yAxisId="glucose"
              orientation="left"
              stroke="#6b7280"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis 
              yAxisId="insulin"
              orientation="right"
              stroke="#6b7280"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <Tooltip content={<CustomTooltip />} />
            <Line 
              yAxisId="glucose"
              type="monotone" 
              dataKey="glucose" 
              stroke="#10B981" 
              strokeWidth={3}
              dot={{ fill: '#10B981', strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, stroke: '#10B981', strokeWidth: 2 }}
            />
            <Line 
              yAxisId="insulin"
              type="monotone" 
              dataKey="insulin" 
              stroke="#3B82F6" 
              strokeWidth={3}
              dot={{ fill: '#3B82F6', strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, stroke: '#3B82F6', strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-4">
        <div className="bg-green-50 rounded-lg p-4">
          <div className="text-sm text-green-600 font-medium">Average Glucose</div>
          <div className="text-2xl font-bold text-green-800">108 mg/dL</div>
        </div>
        <div className="bg-blue-50 rounded-lg p-4">
          <div className="text-sm text-blue-600 font-medium">Total Insulin Today</div>
          <div className="text-2xl font-bold text-blue-800">6 units</div>
        </div>
      </div>
    </div>
  );
};

export default DosageChart;
