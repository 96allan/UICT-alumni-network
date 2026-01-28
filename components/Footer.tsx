import React from 'react';

const TwitterIcon = ({ className }: { className?: string }) => <svg className={className} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22.46 6c-.77.35-1.6.58-2.46.67.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98-3.56-.18-6.73-1.89-8.84-4.48-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.22-1.95-.55v.05c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"></path></svg>;
const FacebookIcon = ({ className }: { className?: string }) => <svg className={className} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"></path></svg>;
const LinkedinIcon = ({ className }: { className?: string }) => <svg className={className} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zM8 18H5V9h3v9zm-1.5-10.25c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75S7.466 7.75 6.5 7.75zM19 18h-3v-5.092c0-1.259-.444-2.115-1.571-2.115-.857 0-1.357.589-1.571 1.157-.079.202-.099.485-.099.77V18h-3V9h3v1.325c.42-.79 1.403-1.325 2.65-1.325 2.887 0 3.393 1.896 3.393 4.362V18z"></path></svg>;

const Footer: React.FC = () => {
  const quickLinks = [
    { name: 'About', href: '#benefits' },
    { name: 'Directory', href: '#directory' },
    { name: 'Events', href: '#events' },
    { name: 'Contact', href: '#footer' },
  ];

  return (
    <footer id="footer" className="bg-primary text-gray-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold text-white mb-4">UICT Alumni</h3>
            <p className="text-sm">Connecting UICT Alumni for Growth, Opportunities & Community.</p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="hover:text-white transition-colors"><TwitterIcon className="w-6 h-6" /></a>
              <a href="#" className="hover:text-white transition-colors"><FacebookIcon className="w-6 h-6" /></a>
              <a href="#" className="hover:text-white transition-colors"><LinkedinIcon className="w-6 h-6" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map(link => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-white hover:underline text-sm">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <address className="text-sm not-italic">
              123 University Ave,<br/>
              City, State, 12345<br/>
              Email: <a href="mailto:contact@uictalumni.com" className="hover:underline">contact@uictalumni.com</a><br/>
              Phone: (123) 456-7890
            </address>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Newsletter</h4>
            <p className="text-sm mb-4">Stay updated with our latest news and events.</p>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="flex">
                <input type="email" placeholder="Your email" className="w-full px-4 py-2 rounded-l-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-secondary border-none" />
                <button type="submit" className="bg-secondary text-white px-4 py-2 rounded-r-md hover:bg-opacity-90 transition-colors">Sign Up</button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} UICT Alumni Network. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
