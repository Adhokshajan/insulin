import React from 'react';

const GlucoseCard = ({ glucoseLevel = 180 }) => {
  const getGlucoseStatus = (level) => {
    if (level < 70) return { status: 'Low', color: 'danger-red', bgColor: 'bg-red-50', textColor: 'text-red-600' };
    if (level > 180) return { status: 'High', color: 'warning-orange', bgColor: 'bg-orange-50', textColor: 'text-orange-600' };
    return { status: 'Normal', color: 'glucose-green', bgColor: 'bg-green-50', textColor: 'text-green-600' };
  };

  const { status, color, bgColor, textColor } = getGlucoseStatus(glucoseLevel);

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Current Blood Glucose Level</h3>
        <div className={`px-3 py-1 rounded-full text-sm font-medium ${bgColor} ${textColor}`}>
          {status}
        </div>
      </div>
      
      <div className="flex items-center justify-center mb-4">
        <div className="relative">
          <div className="w-32 h-32 rounded-full border-8 border-gray-200 flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900">{glucoseLevel}</div>
              <div className="text-sm text-gray-500">mg/dL</div>
            </div>
          </div>
          <div 
            className={`absolute inset-0 rounded-full border-8 border-${color} rounded-full`}
            style={{
              background: `conic-gradient(from 0deg, var(--tw-color-${color}) 0deg, var(--tw-color-${color}) ${(glucoseLevel / 300) * 360}deg, transparent ${(glucoseLevel / 300) * 360}deg)`
            }}
          ></div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 text-center">
        <div className="bg-red-50 rounded-lg p-3">
          <div className="text-xs text-red-600 font-medium">Low</div>
          <div className="text-sm text-red-800 font-semibold">&lt;70</div>
        </div>
        <div className="bg-green-50 rounded-lg p-3">
          <div className="text-xs text-green-600 font-medium">Normal</div>
          <div className="text-sm text-green-800 font-semibold">70-180</div>
        </div>
        <div className="bg-orange-50 rounded-lg p-3">
          <div className="text-xs text-orange-600 font-medium">High</div>
          <div className="text-sm text-orange-800 font-semibold">&gt;180</div>
        </div>
      </div>

      <div className="mt-4 text-center">
        <div className="text-sm text-gray-500">Last updated: {new Date().toLocaleTimeString()}</div>
      </div>
    </div>
  );
};

export default GlucoseCard;
