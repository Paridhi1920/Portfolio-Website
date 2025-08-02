import React from 'react';

const Footer = () => {
  return (
    <footer className="text-center py-6 bg-white dark:bg-primary text-gray-600 dark:text-gray-300 border-t dark:border-gray-700">
      <p>&copy; {new Date().getFullYear()}  Built with ❤️ by Paridhi Jain.</p>
    </footer>
  );
};

export default Footer;
