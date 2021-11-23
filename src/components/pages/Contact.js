import React from 'react';

// if I select contact 
// then I am presented with either a form, or various links, perhaps both
// 


export default function contact() {
    return(

        <ul className="contactList">
            <li className="contactItem">
                <a href="https://github.com/DivineMayura"
                    rel="noreferrer"
                    target="_blank"
                    className="contactLink">
                        Git Hub Profile
                    </a>
            </li>
            <li className="contactItem">
                <a href="https://www.linkedin.com/in/mayfaucher/"
                    rel="noreferrer"
                    target="_blank"
                    className="contactLink">
                        LinkedIn Profile
                    </a>
            </li>
            <li className="contactItem">
                <a href="https://www.linkedin.com/in/mayfaucher/"
                    rel="noreferrer"
                    target="_blank"
                    className="contactLink">
                        LinkedIn Profile
                    </a>
            </li>
        </ul>

    );
}