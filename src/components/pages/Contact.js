
import React from 'react';



export default function contact() {


    function handleFormSubmit() {


    //     return(  <div className={`alert alert-success'}`} role="alert">"horse"</div>
    // ) 
        alert("This feature hasn't been implemented yet. \nInstead you can email me at: MayyFaucher@gmail.com");
    }









    return (
        <div className="padding flexContact">
            <ul className="contactList">
                <li className="contactItem">
                    <a href="https://github.com/DivineMayura"
                        rel="noreferrer"
                        target="_blank"
                        className="contactLink">GitHub</a>
                </li>
                <li className="contactItem">
                    <a href="https://www.linkedin.com/in/mayfaucher/"
                        rel="noreferrer"
                        target="_blank"
                        className="contactLink">LinkedIn</a>
                </li>
                <li className="contactItem">
                    <a href="https://medium.com/@mayyfaucher"
                        rel="noreferrer"
                        target="_blank"
                        className="contactLink">Medium.com</a>
                </li>
            </ul>
            <h5 className="mayAlignTextCenter">
                <a href="./../../Resume-May.docx" download>download resume</a>
            </h5>
            <hr />
            <div>
                <div>
                    <form className="form">
                        <input
                            // onChange={orThisWayForBoth}
                            type="text"
                            placeholder="Name"
                        />
                        <br />
                        <input
                            // onChange={orThisWayForBoth}
                            type="text"
                            placeholder="Email"
                        />
                        <br />
                        <br />
                        <textarea placeholder="Email Content"></textarea>
                        <hr />
                        <button type="button" onClick={handleFormSubmit}>
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>

    );
}