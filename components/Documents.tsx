import React from 'react';
import { documents } from '../data/mockData';
import FadeInSection from './common/FadeInSection';

const DownloadIcon = ({ className }: { className?: string }) => (
  <svg className={className} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"></path></svg>
);

const Documents: React.FC = () => {
  return (
    <section id="documents" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <FadeInSection>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-4">Official Documents</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Access important documents, reports, and forms from the alumni association.
          </p>
        </FadeInSection>
        <FadeInSection>
          <div className="max-w-4xl mx-auto">
            <div className="bg-light-bg rounded-lg shadow-sm overflow-hidden">
              <ul className="divide-y divide-gray-200">
                {documents.map((doc) => (
                  <li key={doc.id} className="p-4 sm:p-6 hover:bg-gray-50 transition-colors duration-200 flex justify-between items-center">
                    <div>
                      <h4 className="font-semibold text-lg text-gray-800">{doc.title}</h4>
                      <span className="text-sm text-gray-500 bg-gray-200 px-2 py-0.5 rounded-full">{doc.type}</span>
                    </div>
                    <a
                      href={doc.url}
                      download
                      className="flex items-center space-x-2 text-primary hover:text-secondary font-semibold transition-colors duration-300"
                    >
                      <DownloadIcon className="w-5 h-5" />
                      <span>Download</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default Documents;
