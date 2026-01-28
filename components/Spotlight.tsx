import React from 'react';
import { alumniSpotlight } from '../data/mockData';
import FadeInSection from './common/FadeInSection';

const Spotlight: React.FC = () => {
  return (
    <section id="spotlight" className="py-20 bg-light-bg">
      <div className="container mx-auto px-6">
        <FadeInSection>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-4">Alumni Spotlight</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Celebrating the achievements and stories of our distinguished alumni making an impact worldwide.
          </p>
        </FadeInSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {alumniSpotlight.map((alumnus, index) => (
            <FadeInSection key={alumnus.id} className={`delay-${index * 100}`}>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 h-full flex flex-col">
                <img src={alumnus.photoUrl} alt={alumnus.name} className="w-full h-64 object-cover" />
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-primary mb-2">{alumnus.name}</h3>
                  <p className="text-gray-500 mb-4">{alumnus.profession} • Class of {alumnus.graduationYear}</p>
                  <blockquote className="text-gray-600 italic border-l-4 border-secondary pl-4 mb-4 flex-grow">
                    "{alumnus.quote}"
                  </blockquote>
                  <div>
                    {alumnus.achievements?.map((achievement, i) => (
                      <span key={i} className="inline-block bg-secondary/10 text-secondary text-xs font-semibold mr-2 mb-2 px-2.5 py-0.5 rounded-full">
                        {achievement}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Spotlight;
