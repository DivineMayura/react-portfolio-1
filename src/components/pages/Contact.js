import React from 'react';

// if I select contact 
// then I am presented with either a form, or various links, perhaps both
// 


export default function contact() {



    const handleInputChange = () => {
        // Getting the value and name of the input which triggered the change

        // Ternary statement that will call either setFirstName or setLastName based on what field the user is typing in
        // return name === 'firstName' ? setFirstName(value) : setLastName(value);

    };

    const handleFormSubmit = (e) => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        e.preventDefault();

        // Alert the user their first and last name, clear the inputs

        // setFirstName('');
        // setLastName('');
    };









    return (
        <div className="padding">
            <ul className="contactList">
                <li className="contactItem">
                    <a href="https://github.com/DivineMayura"
                        rel="noreferrer"
                        target="_blank"
                        className="contactLink">
                        GitHub Profile
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
                    <a href="https://medium.com/@mayyfaucher"
                        rel="noreferrer"
                        target="_blank"
                        className="contactLink">
                        Medium.com Profile
                    </a>
                </li>
            </ul>
            <h5>
                <a href="./../../Resume-May.docx" download>
                    resume
                </a>
            </h5>
            <hr/>
            <div>
                <div>
                    <form className="form">
                        <input
                            //   value={firstName}
                            name="firstName"
                            onChange={handleInputChange}
                            // onChange={orThisWayForBoth}
                            type="text"
                            placeholder="First Name"

                        />
                        <input
                            //   value={lastName}
                            name="lastName"
                            onChange={handleInputChange}
                            // onChange={orThisWayForBoth}
                            type="text"
                            placeholder="Last Name"

                        />
                        <button type="button" onClick={handleFormSubmit}>
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>

    );
}