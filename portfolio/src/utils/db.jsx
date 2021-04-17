export const cards = [
  {
    title: <>Well<i className="fas fa-heart"></i>Me App</>,
    intro:
      "Well Me is a Full Stack App where users can track their wellness journey by setting goals and finding inspiration.",
    introTech: "JavaScript, Node.js, MySQL, Express",
    thumbnail: "/assets/card-images/runner.jpg",
    alt: "screenshot of wellme app",
    target: "#modalWellme",
    dataName: "wellMe",
    id: "modalWellme",
    description:
      "This was a group project in which we collaborated using Github, Slack, Trello and Figma. Well Me utilizes the MVC design pattern and CRUD best practices. Front end and Back end communicate with HTML and API routes, generating HTML with express-handlebars.",
    functionality: [
      "Users sign-up entering their personal information and goals. Upon login they are verified using passport and bcrypt.",
      "Users log their results daily and get a wellbeing score along with an inspirational quote to stay motivated.",
      "They can update their weight and goals at any time.",
      "Users can view recipe suggestions that include caloric information.",
      "They can view a graph of their weekly progress to stay on top of their goals.",
    ],
    myContributions: [
      "Wire Frames, concept and design",
      "Mobile Responsiveness",
      "API routes and HTML routes",
      "Front end Javascript for the Members Page",
      "REST API: Members Page API endpoints ie daily log and user database updates.",
      "Handlebars templates and partials- associated HTML and CSS",
      "Deploying to Heroku with JAWSDB",
      "ENV variable",
    ],
    technology: [
      "JavaScript",
      "Node.js",
      "MySQL and Sequelize",
      "Heroku & JAWSDB",
      "Express and Express-session",
      "Handlebars",
      "GitHub",
      "HTML, CSS and Bootstrap",
      "Spoonacular API",
      "fitness-health-calculator npm",
      "chart.js npm",
      "Passport npm",
      "bcrypt npm",
    ],
    testing: ["ES Lint", "Travis", "Postman", "Jest"],
    github: "https://github.com/LeeKiri/WellMe-app",
    url: "https://wellme-leekiri.herokuapp.com/",
    screenshots: [
      "../../assets/screenshots/wellme1.PNG",
      "/assets/screenshots/wellme2.PNG",
      "/assets/screenshots/well3.PNG",
    ],
  },
  {
    title: "Eat-Da-Burger App",
    intro:
      "This project is a restaurant app that lets users input the names of burgers they'd like to eat and devour them!",
    introTech: "Node.js, MySQL, Handlebars, Heroku",
    thumbnail: "/assets/card-images/burger.jpg",
    alt: "screenshot of Burger app",
    target: "#modalBurger",
    dataName: "Eat-Da-Burger",
    id: "modalBurger",
    description:
      "In this project I use the MVC design pattern to create and interactive app where users can log burgers. I wrote an ORM to query the database, used handlebars to generate HTML and deployed the project to Heroku.",
    functionality: [
      "Model View Controller Design Patter",
      "Burgers are saved in the mysql database and updated when devoured.",
      "Front end and back end communicate via fetch API calls and express routes.",
      "CRUD best practices followed.",
      "HTML generated with Handlebars using Bootstrap column system design.",
      "Deployed to Heroku using JAWSDB",
    ],
    myContributions: ["Design, implementation and deployment"],
    technology: [
      "JavaScript",
      "Node.js",
      "MySQL",
      "Heroku & JAWSDB",
      "Express",
      "Handlebars",
      "GitHub",
      "CSS/Bootstrap",
    ],
    testing: "",
    github: "https://github.com/LeeKiri/handlebars-burger",
    url: "https://burger-leekiri.herokuapp.com/",
    screenshots: ["/assets/screenshots/eatdabur.PNG"],
  },
  {
    title: "Melbourne Reboot App",
    intro:
      "An app to help locals rediscover their community and boost the economy post Covid19 lockdown.",
    introTech: "JavaScript, Google Places API, Materialize CSS",
    thumbnail: "/assets/card-images/flinders.jpg",
    alt: "flinders street station",
    target: "#modalMelbourneReboot",
    dataName: "Melbourne Reboot",
    id: "modalMelbourneReboot",
    description:
      "Melbourne Reboot is a website for users to rediscover their local community. This was a group project in which we collaborated using GitHub, Trello and Figma.",
    functionality: [
      "The user enters their search criteria including; suburb, Km radius and checks boxes for the type of activity they seek.",
      "When the user hits the search button they are presented with 10 options in their local community.",
      "The user can enter their login details to save favourite places and view them later.",
    ],
    myContributions: [
      "Wireframes, concept and design.",
      "Sign-up and login javascript",
      "HTML and Materialize CSS Library",
      "Mobile Responsiveness",
      "Accuweather API",
    ],
    technology: [
      "Google places API",
      "Accuweather API",
      "Local Storage",
      "Moment.js",
      "Materialize CSS library",
      "Javascript, HTML and CSS",
    ],
    testing: "",
    github: "https://github.com/LeeKiri/MelbourneReboot-app",
    url: "https://leekiri.github.io/MelbourneReboot-app/",
    screenshots: [
      "assets/screenshots/reb-m.PNG",
      "assets/screenshots/reb-s.PNG",
    ],
  },
  {
    title: "Javascript Quiz",
    intro: "A timed multiple choice quiz about javascript.",
    introTech: "JavaScript, Local Storage, HTML, Responsive Design, Bootstrap",
    thumbnail: "/assets/card-images/timer.jpg",
    alt: "Clock",
    target: "#modalQuiz",
    dataName: "JavaScript Quiz",
    id: "modalQuiz",
    description: "This is a timed multiple choice quiz about JavaScript.",
    functionality: [
      "The quiz starts when you click the start button. It opens a set of multiple choice questions and starts a timer.",
      "When you select an answer by clicking the button it shows you the next question until the quiz is finished. Correct answers get 5 points incorrect answers loose 10 seconds off the timer.",
      "You can save your initials and score to the High Scores page then click the button to clear all high scores or take the quiz again.",
    ],
    myContributions: ["Design and implementation"],
    technology: [
      "JavaScript",
      "Local Storage",
      "Bootstrap CSS Library",
      "HTML",
      "GitHub",
      "GitBash",
    ],
    testing: "",
    github: "https://github.com/LeeKiri/javascript-quiz-local-storage",
    url: "https://leekiri.github.io/javascript-quiz-local-storage/",
    screenshots: [
      "assets/screenshots/quiz-md.png",
      "assets/screenshots/quiz- sm.png",
    ],
  },
  {
    title: "Work Day Scheduler",
    intro: "An app to plan your busy work day.",
    introTech: "JavaScript, HTML, CSS, Moment.js, Local Storage",
    thumbnail: "/assets/card-images/planner.jpg",
    alt: "diary",
    target: "#dailyPlanner",
    dataName: "Daily Planner",
    id: "dailyPlanner",
    description:
      "This is a work day scheduler where the user can add appointments to their calendar and save them to view throughout the day.",
    functionality: [
      "Each appointment is saved in local storage as the user clicks the calendar icon. When the page reloads the appointments remain displayed onscreen.",
      "Moment.js is used to display the current time and date at the top of the page",
      "The appointment field changes color if it's in the past, present or future",
    ],
    myContributions: ["Implementing the functionalilty with JavaScript"],
    technology: [
      "JavaScript",
      "Local Storage",
      "HTML",
      "CSS",
      "moment.js",
      "GitHub",
      "GitBash",
    ],
    testing: "",
    github: "https://github.com/LeeKiri/day-planner-jquery",
    url: "https://leekiri.github.io/day-planner-jquery/",
    screenshots: [
      "assets/screenshots/planner-m.png",
      "assets/screenshots/planner-s.PNG",
    ],
  },
];
export default cards;