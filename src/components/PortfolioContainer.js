import React, { useState } from 'react';
import NavTabs from './NavTabs';

// Pages to be rendered
import Home from './pages/Home';
import About from './pages/AboutMe';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

import "./PortfolioContainer.css"



export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('Home');

    // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
    //   if the current page === "home" which was set upon selection of nav link
    // then return home so the user can view it.
    const renderPage = () => {
        if (currentPage === 'Home') {
              return <Home />;
        }
        if (currentPage === 'About') {
              return <About />;
        }
        if (currentPage === 'Projects') {
            return <Projects />;
        }
        return <Contact />;
    };

    // handlePageChange 
    // on the nav bar, the onClick function passes in a string "home", "About" etc
    // which is then passed into setCurrentPage so the useState updates with the
    // string that represents a page
    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            {/* We are passing the currentPage from the useState 
                as well as the function that updates it as parameters to the function*/}
            <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
            {/* Then we are calling the renderPage method which will check the current page,
                and then pull it up  */}
            {renderPage()}
        </div>
    );
}
