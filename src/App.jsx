import React, { useState } from 'react';
import Header from './components/Header';
import GlucoseCard from './components/GlucoseCard';
import DosageChart from './components/DosageChart';

function App() {
  const [glucoseLevel, setGlucoseLevel] = useState(180);
  const [insulinLevel, setInsulinLevel] = useState(75);
  const [isAdministering, setIsAdministering] = useState(false);

  const handleAdministerInsulin = () => {
    setIsAdministering(true);
    
    // Simulate insulin administration
    setTimeout(() => {
      alert('Insulin administered successfully! 2 units delivered.');
      setInsulinLevel(Math.max(0, insulinLevel - 20));
      setGlucoseLevel(Math.max(70, glucoseLevel - 15));
      setIsAdministering(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Glucose Level Card */}
          <div className="lg:col-span-1">
            <GlucoseCard glucoseLevel={glucoseLevel} />
          </div>

          {/* Insulin Dosage and Chart */}
          <div className="lg:col-span-2 space-y-8">
            {/* Insulin Dosage Card */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Insulin Dosage Level</h3>
                <div className="text-sm text-gray-500">Remaining: {insulinLevel}%</div>
              </div>
              
              <div className="flex items-center justify-center mb-6">
                <div className="relative w-48 h-48">
                  <svg className="w-48 h-48 transform -rotate-90" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="#e5e7eb"
                      strokeWidth="8"
                      fill="none"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="#3B82F6"
                      strokeWidth="8"
                      fill="none"
                      strokeDasharray={`${2 * Math.PI * 40}`}
                      strokeDashoffset={`${2 * Math.PI * 40 * (1 - insulinLevel / 100)}`}
                      strokeLinecap="round"
                      className="transition-all duration-1000 ease-in-out"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-gray-900">{insulinLevel}%</div>
                      <div className="text-sm text-gray-500">Available</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <button
                  onClick={handleAdministerInsulin}
                  disabled={isAdministering || insulinLevel < 20}
                  className={`px-8 py-3 rounded-lg font-semibold text-white transition-all duration-200 ${
                    isAdministering || insulinLevel < 20
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-insulin-blue hover:bg-blue-700 hover:shadow-lg transform hover:scale-105'
                  }`}
                >
                  {isAdministering ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Administering...</span>
                    </div>
                  ) : (
                    'Administer Insulin'
                  )}
                </button>
              </div>

              {insulinLevel < 20 && (
                <div className="mt-4 text-center">
                  <div className="text-sm text-warning-orange font-medium">
                    ⚠️ Low insulin level - refill required
                  </div>
                </div>
              )}
            </div>

            {/* Chart */}
            <DosageChart />
          </div>
        </div>

        {/* Status Cards */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-semibold text-gray-900">Device Status</h4>
                <p className="text-sm text-green-600">All systems operational</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-semibold text-gray-900">Last Reading</h4>
                <p className="text-sm text-blue-600">{new Date().toLocaleTimeString()}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-semibold text-gray-900">Battery Level</h4>
                <p className="text-sm text-purple-600">87% remaining</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
