import React from 'react';

// NavTabs takes two parameters which are imported when this is linked/renders inside of PortfolioContainer.js
// current page sets the string that represents the page the user is on, to the link they clicked
// handlePageChange performs the set current page function which loads the page the string now has set

export default function NavTabs({ currentPage, handlePageChange }) {
    return (

        //   nav bar is an unordered list containing list items which are links

        <ul className="nav nav-tabs">
            <li className="nav-item">
                <a
                    href="#home"
                    //   onclick the function handlePageChange activates setting string to "home"
                    onClick={() => handlePageChange('Home')}
                    //   class name is nav-link active if the current page is actually "home"
                    // otherwise it's just 'nav-link" class
                    className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
                >
                    Home
                </a>
            </li>
            {/* The rest operate in the same manner */}
            <li className="nav-item">
                <a
                    href="#about"
                    onClick={() => handlePageChange('About')}
                    className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                >
                    About
                </a>
            </li>
            <li className="nav-item">
                <a
                    href="#projects"
                    onClick={() => handlePageChange('Projects')}
                    className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
                >
                    Projects
                </a>
            </li>
            <li className="nav-item">
                <a
                    href="#contact"
                    onClick={() => handlePageChange('Contact')}
                    className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                >
                    Contact
                </a>
            </li>
        </ul>
    );
}


