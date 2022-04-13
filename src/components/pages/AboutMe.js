import React from 'react';
import selfie from "./../../images/selfie11.jpg";
// if I view my about me page,
// then I am presented with a profile picture, as well as a paragraph about me
//  and a list of all my skills that I have acquired thus far.


export default function aboutCosette() {
    return (
        <div className="cosetteCenter padding">
            <div className="cosetteFlex cosetteJustifyCenter">
                <img alt="imageOfCosette" className="profImage" src={selfie} />
            </div>
            <br/>
            <div className="lilBackground">
            <div className="topPadding">
                <h3>
                    About Me:
                </h3>
                <p>
                    I'm a twenty one year old full stack web developer and a certified pilot!  <br /><br />
                    I have a very wide skill set, I love learning new things, and I want to use those skills for awesome things. <br /><br />
                    After I graduated high school, I went to acquire my pilot’s license. <br />
                    Upon receiving my certificate I attended a community college in Eureka California for a year. <br /> 
                    Then I attended and graduated UC Berkeley's full stack web development bootcamp, and now I'm looking for a job!!
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
                    Self-Improvement <br />
                    Creating Things <br />
                    Flying  <br />
                    <br />
                    <br />
                </p>
            </div>
            </div>
        </div>
    )
}