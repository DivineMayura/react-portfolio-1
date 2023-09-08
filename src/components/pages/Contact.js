
import React from 'react';



export default function contact() {
    
    // This throws an error when I import useState from react for some reason.
    // const [email, setEmail] = useState('');
    // const [name, setName] = useState('');




    return (
        <div className="padding flexContact">
            <h5 className="cosetteAlignTextCenter">
                <button className="contactButton">
                    <a href="https://github.com/DivineMayura"
                        rel="noreferrer"
                        target="_blank"
                        className="contactLink nav-link">GitHub</a>
                </button>
            </h5>
            <h5 className="cosetteAlignTextCenter">
                <button className="contactButton">
                    <a href="https://www.linkedin.com/in/cosettefaucher/"
                        rel="noreferrer"
                        target="_blank"
                        className="contactLink nav-link">LinkedIn</a>
                </button>

            </h5>
            <h5 className="cosetteAlignTextCenter">
                <button className="contactButton">
                    <a href="https://medium.com/@cosettefaucher"
                        rel="noreferrer"
                        target="_blank"
                        className="contactLink nav-link">Medium.com</a>
                </button>
            </h5>
            <h5 className="cosetteAlignTextCenter">
                <button className="contactButton">
                    <a className="contactLink nav-link" target="_blank" rel="noreferrer" href="https://drive.google.com/drive/folders/1nlS_3OJolUbQDhC7ayuc0yAnT_uEWCji?usp=sharing">download resume on Google Drive</a></button>
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
                            This Feature Hasn't fully been implemented yet because I'm going to make a new portfolio. You can instead email me here at: the.cosette.faucher@gmail.com .
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
}