import React from 'react';
import FadeInSection from './common/FadeInSection';

const AlumniMap: React.FC = () => {
  const alumni = [
    { city: 'New York', x: 850, y: 180, count: '2.4K' },
    { city: 'London', x: 550, y: 150, count: '1.8K' },
    { city: 'Tokyo', x: 950, y: 280, count: '1.5K' },
    { city: 'Sydney', x: 1000, y: 380, count: '890' },
    { city: 'Dubai', x: 650, y: 250, count: '1.2K' },
    { city: 'Singapore', x: 820, y: 340, count: '950' },
  ];

  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-6 text-center">
        <FadeInSection>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Global Network</h2>
          <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
            UICT alumni are making their mark in every corner of the globe.
          </p>
        </FadeInSection>
        <FadeInSection>
          <div className="relative w-full max-w-5xl mx-auto">
            <svg viewBox="0 0 1200 500" className="w-full h-auto">
              <defs>
                <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#3B82F6', stopOpacity: 0.1 }} />
                  <stop offset="100%" style={{ stopColor: '#1E40AF', stopOpacity: 0.2 }} />
                </linearGradient>
              </defs>
              
              <rect width="1200" height="500" fill="url(#mapGradient)" />
              
              {/* Alumni location markers */}
              {alumni.map((location, index) => (
                <g key={index}>
                  <circle cx={location.x} cy={location.y} r="8" fill="#FCD34D" opacity="0.8" />
                  <circle cx={location.x} cy={location.y} r="8" fill="none" stroke="#FCD34D" strokeWidth="2" opacity="0.4">
                    <animate attributeName="r" from="8" to="16" dur="2s" repeatCount="indefinite" />
                  </circle>
                  <text x={location.x} y={location.y + 25} textAnchor="middle" className="text-xs fill-white font-semibold">
                    {location.city}
                  </text>
                  <text x={location.x} y={location.y + 38} textAnchor="middle" className="text-xs fill-yellow-300">
                    {location.count}
                  </text>
                </g>
              ))}
            </svg>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default AlumniMap;
