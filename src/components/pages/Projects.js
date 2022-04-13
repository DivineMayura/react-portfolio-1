import React from 'react';


function Projects() {
    const projects = [
        {
            id: 1,
            image: "https://github.com/DivineMayura/react-portfolio-1/blob/main/src/images/dungeonrunner.gif?raw=true",
            name: "Dungeon Runner",
            about: "My second Group Project. Created with Phaser.js. Dungeon Runner is a small Browser Game with SQL backed player interaction.",
            github: "https://github.com/DivineMayura/fullstack-browser-game",
            deployed: "https://young-castle-31920.herokuapp.com/#"
        },
        {
            id: 2,
            image: "https://github.com/DivineMayura/react-portfolio-1/blob/main/src/images/holyhour.jpg?raw=true",
            name: "Holy Hour",
            about: "First Group Project. Created with JavaScript, CSS, HTML. Holy-Hour compares the amount of Bars in an area versus the amount of Churches, and provides accurate weather information to help you make the decision of whether or not to go out.",
            github: "https://github.com/DivineMayura/holy-hour",
            deployed: "https://divinemayura.github.io/holy-hour/"
        },
        {
            id: 3,
            image: "https://github.com/DivineMayura/react-portfolio-1/blob/main/src/images/weather.jpg?raw=true",
            name: "Weather Dashboard",
            about: "This is a simple weather dashboard using Open Weather Map One Call API, and GeoLocation API, to display the weather of any city the user types in. Uses Local Storage for search history",
            github: "https://github.com/DivineMayura/weather-dashboard-server-side-api",
            deployed: "https://divinemayura.github.io/weather-dashboard-server-side-api/"
        },
        {
            id: 4,
            image: "https://github.com/DivineMayura/workout-tracker/raw/main/site.jpg",
            name: "Workout Tracker",
            about: "A simple workout tracker using Mongo database with a Mongoose schema and routes handled with Express. Also.. created with JavaScript.",
            github: "https://github.com/DivineMayura/workout-tracker",
            deployed: "https://ancient-woodland-82856.herokuapp.com/"
        },
        {
            id: 5,
            image: "https://github.com/DivineMayura/readme-generator/blob/main/video/readmegen.jpg?raw=true",
            name: "Readme Generator",
            about: "A simple README Generator built with NodeJS, JavaScript, and Inquirer.",
            github: "https://github.com/DivineMayura/readme-generator",
            deployed: "https://github.com/DivineMayura/readme-generator"
        },
        {
            id: 6,
            image: "https://github.com/DivineMayura/online-offline-budget-tracker/blob/main/site.jpg?raw=true",
            name: "Online-Offline Budget-Tracker",
            about: "A budget Tracker with offline access and functionality; add expenses and deposits to their budget with or without a connection. Mainly created with mongoDB, express, JavaScript.",
            github: "https://github.com/DivineMayura/online-offline-budget-tracker",
            deployed: "https://desolate-garden-48089.herokuapp.com/"
        },
    ]
    const cardStyle = {
        //Equal to the computed value of font-size on the root element. When specified on the font-size property of the root element, the rem units refer to the property’s initial value.
        width: '40rem',
        backgroundColor: "#1D2027",
        padding: "1vw",
    };

    return (



        <div className="flexProjects" >
            {projects.map(projects => (
                <div className="card cosetteFlex cosetteJustifyCenter" style={cardStyle} key={projects.id} >
                    <img
                        className="card-img-top"
                        src={projects.image}
                        alt={projects.name}
                        
                    />
                    <div className="card-body">
                        <h5 className="card-title">{projects.name}</h5>
                        <p className="card-text">{projects.about}</p>
                        <a href={projects.github} target="_blank" rel="noreferrer" className="card-text">GitHub</a> <br />
                        <a href={projects.deployed} target="_blank" rel="noreferrer" className="card-text">Deployed Site</a>
                    </div>
                </div>
            ))}

        </div>

    )

}

export default Projects;