import React from 'react';
import selfie from "./../../images/selfie11.jpg";
// if I view my about me page,
// then I am presented with a profile picture, as well as a paragraph about me
//  and a list of all my skills that I have acquired thus far.


export default function aboutMay() {
    return (
        <div className="mayCenter padding">
            <div>
                <img alt="imageOfMay" className="profImage" src={selfie} />
            </div>
            <br/>
            <div className="lilBackground">
            <div className="topPadding">
                <h3>
                    About Me:
                </h3>
                <p>
                    I'm a twenty one year old full stack developer and a certified pilot!  <br /><br />
                    I have a wide skill set, I like learning new things, and I want to use those skills effectively. <br /><br />
                    After I graduated high school, I went to acquire my pilot’s license. <br /> Upon receiving my certificate I attended a community college in Eureka California for a year. <br /> Now, I’m currently in a full time coding bootcamp to learn full stack web development.
                    <br />
                </p>
            </div>
            <br/>
            <div>
                <h6>
                    My Hobbies Are:
                </h6><p>
                    Learning <br />
                    Coding <br />
                    Reading <br />
                    Philosophy <br />
                    Psychology <br />
                    Chess <br />
                    Travel <br />
                    Self-Improvement. <br />
                    Creating Things. <br />
                    Flying  <br />
                    <br />
                    <br />
                </p>
            </div>
            </div>
        </div>
    )
}