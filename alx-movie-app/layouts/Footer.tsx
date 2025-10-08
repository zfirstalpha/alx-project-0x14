import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-4">
      <div className="container mx-auto text-center">
        <p>© {new Date().getFullYear()} MovieApp. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
