import React, { useState } from 'react';
import NavTabs from './navTabs';
import Home from './pages/home';
import About from './pages/about';
import Work from './pages/work';
import Contact from './pages/contact';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('home');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'home') {
      return <Home />;
    }
    if (currentPage === 'about') {
      return <About />;
    }
    if (currentPage === 'work') {
      return <Blog />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
    </div>
  );
}