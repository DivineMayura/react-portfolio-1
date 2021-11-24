
import React from 'react';



export default function contact() {
    
    // This throws an error when I import useState from react for some reason.
    // const [email, setEmail] = useState('');
    // const [name, setName] = useState('');




    return (
        <div className="padding flexContact">
            <h5 className="mayAlignTextCenter">
                <button className="contactButton">
                    <a href="https://github.com/DivineMayura"
                        rel="noreferrer"
                        target="_blank"
                        className="contactLink">GitHub</a>
                </button>
            </h5>
            <h5 className="mayAlignTextCenter">
                <button className="contactButton">
                    <a href="https://www.linkedin.com/in/mayfaucher/"
                        rel="noreferrer"
                        target="_blank"
                        className="contactLink nav-link">LinkedIn</a>
                </button>

            </h5>
            <h5 className="mayAlignTextCenter">
                <button className="contactButton">
                    <a href="https://medium.com/@mayyfaucher"
                        rel="noreferrer"
                        target="_blank"
                        className="contactLink">Medium.com</a>
                </button>
            </h5>
            <h5 className="mayAlignTextCenter">
                <button className="contactButton">
                    <a href="./../../Resume-May.docx" download>download resume</a></button>
            </h5>
            <hr />
            <div>
                <div>
                    <form className="form">
                        <input
                            // value={name}
                            // onChange={handleInputChange}
                            type="text"
                            placeholder="Name" />
                        <br />
                        <input
                            // value={email}
                            // onChange={handleInputChange}
                            type="email"
                            placeholder="Email" />
                        <br />
                        <br />
                        <textarea placeholder="Email Content"></textarea>
                        <hr />
                        <button type="button">
                            Submit
                        </button>
                        <div className="formSubmitHidden">
                            This Feature Hasn't fully been implemented yet. You can instead email me here at: MayyFaucher@gmail.com .
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
}