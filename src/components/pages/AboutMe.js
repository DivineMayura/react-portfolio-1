import React from 'react';
import selfie from "./../../images/selfie12.jpg";
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
                    I'm a twenty three year web developer with a background in aviation!  <br /><br />
                    I have a very wide, yet exceptionally capable skill set and I love learning new things. <br /><br />
                    Currently living in San Francisco, open to hire full time or part time! <br />
                    Currently, the ideal email to contact me is at: the.cosette.faucher@gmail.com . <br /> 
                    I took a coding hiatus, however picking it back up is easier than riding a bike, especially with google.
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
                    Gaming <br />
                    Philosophy <br />
                    Psychology <br />
                    E-Sports <br />
                    Travel <br />
                    Self-Improvement <br />
                    Exploring the City <br />
                    Flying  <br />
                    <br />
                    <br />
                </p>
            </div>
            </div>
        </div>
    )
}