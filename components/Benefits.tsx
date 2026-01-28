import React from 'react';
import { Benefit } from '../types';
import FadeInSection from './common/FadeInSection';

const BriefcaseIcon = ({ className }: { className?: string }) => <svg className={className} stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>;
const UsersIcon = ({ className }: { className?: string }) => <svg className={className} stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>;
const ZapIcon = ({ className }: { className?: string }) => <svg className={className} stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>;
const AwardIcon = ({ className }: { className?: string }) => <svg className={className} stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>;
const HandshakeIcon = ({ className }: { className?: string }) => <svg className={className} stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 10c.83 0 1.5-.67 1.5-1.5v-5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v5c0 .83.67 1.5 1.5 1.5z"></path><path d="M9.5 10c.83 0 1.5-.67 1.5-1.5v-5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v5c0 .83.67 1.5 1.5 1.5z"></path><path d="M16 16.5c0 .83.67 1.5 1.5 1.5h.5a2 2 0 002-2v-3a2 2 0 00-2-2h-7a2 2 0 00-2 2v3a2 2 0 002 2h.5c.83 0 1.5-.67 1.5-1.5V11"></path><path d="M8 16.5c0 .83.67 1.5 1.5 1.5h.5a2 2 0 002-2v-3a2 2 0 00-2-2H3a2 2 0 00-2 2v3a2 2 0 002 2h.5c.83 0 1.5-.67 1.5-1.5V11"></path></svg>;


const benefits: Benefit[] = [
  { icon: BriefcaseIcon, title: 'Career Opportunities', description: 'Access to an exclusive job board with positions from alumni-led companies.' },
  { icon: UsersIcon, title: 'Professional Networking', description: 'Connect with thousands of alumni across various industries and countries.' },
  { icon: ZapIcon, title: 'Mentorship Programs', description: 'Get guidance from experienced professionals or become a mentor yourself.' },
  { icon: AwardIcon, title: 'Scholarships', description: 'Opportunities for continuing education and professional development funding.' },
  { icon: HandshakeIcon, title: 'Partnership Opportunities', description: 'Find collaborators, co-founders, and business partners within the network.' },
];

const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="py-20 bg-light-bg">
      <div className="container mx-auto px-6">
        <FadeInSection>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-4">Membership & Benefits</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Unlock a world of opportunities and stay connected to the UICT community.
          </p>
        </FadeInSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <FadeInSection key={index}>
              <div className="text-center p-8 bg-white rounded-lg shadow-md h-full transform hover:-translate-y-2 transition-transform duration-300">
                <div className="inline-block p-4 bg-secondary/10 rounded-full mb-4">
                  <benefit.icon className="h-10 w-10 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
