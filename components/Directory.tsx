import React, { useState, useMemo } from 'react';
import { alumni } from '../data/mockData';
import { Alumnus } from '../types';
import FadeInSection from './common/FadeInSection';

const Directory: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    year: '',
    course: '',
    country: '',
  });

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const filteredAlumni = useMemo(() => {
    return alumni.filter(alumnus => {
      return (
        alumnus.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (filters.year ? alumnus.graduationYear.toString() === filters.year : true) &&
        (filters.course ? alumnus.course === filters.course : true) &&
        (filters.country ? alumnus.country === filters.country : true)
      );
    });
  }, [searchTerm, filters]);

  const uniqueCourses = useMemo(() => [...new Set(alumni.map(a => a.course))], []);
  const uniqueYears = useMemo(() => [...new Set(alumni.map(a => a.graduationYear))].sort((a,b) => b-a), []);
  const uniqueCountries = useMemo(() => [...new Set(alumni.map(a => a.country))].sort(), []);

  return (
    <section id="directory" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <FadeInSection>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-4">Alumni Directory</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Find and connect with fellow alumni from around the world.
          </p>
        </FadeInSection>
        
        <FadeInSection>
          <div className="bg-light-bg p-6 rounded-lg shadow-sm mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <input
              type="text"
              placeholder="Search by name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:outline-none"
            />
            <select name="year" value={filters.year} onChange={handleFilterChange} className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:outline-none">
              <option value="">All Graduation Years</option>
              {uniqueYears.map(year => <option key={year} value={year}>{year}</option>)}
            </select>
            <select name="course" value={filters.course} onChange={handleFilterChange} className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:outline-none">
              <option value="">All Courses</option>
              {uniqueCourses.map(course => <option key={course} value={course}>{course}</option>)}
            </select>
            <select name="country" value={filters.country} onChange={handleFilterChange} className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:outline-none">
              <option value="">All Countries</option>
              {uniqueCountries.map(country => <option key={country} value={country}>{country}</option>)}
            </select>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredAlumni.map(alumnus => (
            <FadeInSection key={alumnus.id}>
              <div className="bg-white rounded-lg shadow-md p-5 text-center transform hover:scale-105 transition-transform duration-300">
                <img src={alumnus.photoUrl} alt={alumnus.name} className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-gray-200" />
                <h3 className="font-bold text-lg text-primary">{alumnus.name}</h3>
                <p className="text-gray-600 text-sm">{alumnus.profession}</p>
                <p className="text-gray-500 text-xs mt-1">{alumnus.course} • {alumnus.graduationYear}</p>
                <p className="text-gray-500 text-xs mt-1">{alumnus.country}</p>
              </div>
            </FadeInSection>
          ))}
        </div>
        {filteredAlumni.length === 0 && (
          <p className="text-center text-gray-500 mt-8">No alumni found matching your criteria.</p>
        )}
      </div>
    </section>
  );
};

export default Directory;
