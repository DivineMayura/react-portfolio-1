import React from 'react';
// if I view my about me page,
// then I am presented with a profile picture, as well as a paragraph about me
//  and a list of all my skills that I have acquired thus far.


export default function aboutMay() {
    return (
        <div className="mayCenter padding">
            <div>
                <img alt="imageOfMay" />
            </div>
            <div>
                <h3>
                    About Me:
                </h3>
                <p>
                    I'm a twenty one year old full stack developer with a pilots license!
                </p>
            </div>
            <div>
                <h4>
                    My Skills Include:
                </h4>
                <p>
                Clear Communication,
                 Team-Working Skills,
                  Leadership skills,
                   HTML5,
                    Cascading Style Sheets (CSS),
                     Bootstrap,
                      JavaScript,
                       Problem-Solving,
                        Web APIs,
                         jQuery,
                          Server Side APIs,
                           Postman/Insomnia,
                            AJAX/Fetch,
                             JSON,
                              Git & GitHub,
                               GitLab,
                                Sequelize,
                                 Node.js,
                                  ES6,
                                   Express.js,
                                    Rest API,
                                     Heroku,
                                      Relational Databases,
                                       MySQL,
                                        Object-oriented Programming (OOP),
                                         Pseudocode,
                                          Frontend Development,
                                           Backend Development,
                                            and Full Stack Development,
                                             Bootstrap.
                </p>
            </div>
        </div>
    )
}