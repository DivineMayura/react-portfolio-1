import React from 'react';


function Projects() {
    const projects = [
        {
            id: 1,
            image: "https://github.com/DivineMayura/react-portfolio-1/blob/main/src/images/dungeonrunner.gif?raw=true",
            name: "Dungeon Runner",
            about: "My second Group Project. Created with phaser.js, Dungeon Runner is a small Browser Game with SQL backed player interaction.",
            github: "",
            deployed: ""
        },
        {
            id: 2,
            image: "https://github.com/DivineMayura/react-portfolio-1/blob/main/src/images/holyhour.jpg?raw=true",
            name: "Holy Hour",
            about: "First Group Project. Holy-Hour compares the amount of Bars in an area versus the amount of Churches, and provides accurate weather information to help you make the decision of whether or not to go out.",
            github: "",
            deployed: ""
        },
        {
            id: 3,
            image: "https://github.com/DivineMayura/react-portfolio-1/blob/main/src/images/weather.jpg?raw=true",
            name: "Weather Dashboard",
            about: "This is a simple weather dasboard using Open Weather Map One Call API, and GeoLocation API, to display the weather of any city the user types in. Uses Local Storage for search history",
            github: "",
            deployed: ""
        },
        {
            id: 4,
            image: "https://github.com/DivineMayura/react-portfolio-1/blob/main/src/images/quiz.jpg?raw=true",
            name: "Javascript Quiz",
            about: "A small quiz relying entirely on JavaScript for its functionality with local storage for scoring system.",
            github: "",
            deployed: ""
        },
        {
            id: 5,
            image: "https://github.com/DivineMayura/react-portfolio-1/blob/main/src/images/pswrdgen.jpg?raw=true",
            name: "Password Generator",
            about: "Rudimentary password generator using window alerts, prompts, and confirms.",
            github: "",
            deployed: ""
        },
        {
            id: 6,
            image: "",
            name: "old",
            about: "",
            github: "",
            deployed: ""
        },
    ]
    const cardStyle = {
        //Equal to the computed value of font-size on the root element. When specified on the font-size property of the root element, the rem units refer to the property’s initial value.
        width: '40rem',
        backgroundColor: "black",
        padding: "1vw",
    };

    return (



        <div className="flexProjects">
            {projects.map(projects => (
                <div className="card" style={cardStyle}>
                    <img
                        className="card-img-top"
                        src={projects.image}
                        alt={projects.name}
                    />
                    <div className="card-body">
                        <h5 className="card-title">Name: {projects.name}</h5>
                        <p className="card-text">Description: {projects.about}</p>
                        <a href={projects.github} target="_blank" rel="noreferrer" className="card-text">GitHub</a> <br />
                        <a href={projects.deployed} target="_blank" rel="noreferrer" className="card-text">Deployed Site</a>
                    </div>
                </div>
            ))}

        </div>

    )

}

export default Projects;