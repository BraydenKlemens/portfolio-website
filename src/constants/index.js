// eslint-disable no-unused-vars
const ABOUT = `Aye there traveller, thanks for stopping by! Feel free to browse my dev journey thus far.
After graduating from the University of Guelph with a Computer Science Degree, I completed two short contract opportunities.
I am now honing my mobile development skills in Flutter, learning ReactJS, & learning game development in Unity.`;

const HOBBIES = [
  "Writing and recording 5 piece band music - I typically record piano and guitar using Logic Pro X",
  "Travelling the world with friends - This year I visted Thailand, Italy, Croatia & Montenegro",
  "Going on hiking trips and outdoor rock climbing trips",
  "Training both in the gym and running",
  "Snowboarding through the winter",
  "Playing competative PC games, & binge watching new tv shows",
];

const SKILL_LANGUAGES = [
  {
    name: "Java",
    level: 90,
  },
  {
    name: "Python",
    level: 90,
  },
  {
    name: "C",
    level: 90,
  },
  {
    name: "Dart",
    level: 80,
  },
  {
    name: "C#",
    level: 80,
  },
  {
    name: "Javascript/Typescript",
    level: 70,
  },
  {
    name: "HTML / CSS",
    level: 70,
  },
  {
    name: "Swift/Kotlin",
    level: 30,
  },
];

const SKILL_FRAMEWORKS = [
  {
    name: "Flutter",
    level: 90,
  },
  {
    name: "AWS",
    level: 90,
  },
  {
    name: "Azure/GCP",
    level: 80,
  },
  {
    name: "MySQL",
    level: 70,
  },
  {
    name: "React.JS / Node.js",
    level: 70,
  },
  {
    name: "React Native",
    level: 70,
  },
  {
    name: "Angular.Js",
    level: 50,
  },
];

const EDUCATION = {
  position: "Honours Bachelor of Computing, Computer Science",
  title: "University of Guelph",
  date: "2017 - 2022",
  location: "Guelph, Ontario",
  image: require("../assets/jobicons/uofg.png"),
  bullets: [
    "Notable Courses: Discrete Mathematics, Data Structures, Algorithms, Object Oriented Programming, Operating Systems, System Design &Integration, Cloud Computing, Mobile Development",
    "Deans list 6/8 semesters",
    "85% average - graduated with distinction",
  ],
};

const WORK = [
  {
    position: "Flutter Developer (Contract)",
    title: "University of Guelph",
    date: "Jul 2022 - Oct 2022",
    location: "Remote",
    image: require("../assets/jobicons/uofg.png"),
    bullets: [
      "Developed a cross platform Flutter application, to be used as a survey tool in research collection",
      "Dynamically updated user data using the Cloud Firestore service",
      "Designed and created wireframe and control flow for all states of the application",
      "Features: create/delete accounts, complete surveys, history log, notification services",
    ],
  },
  {
    position: "Data Science Software Developer (Contract)",
    title: "University of Moncton",
    date: "May 2022 - Jun 2022",
    location: "Remote",
    image: require("../assets/jobicons/moncton.jpeg"),
    bullets: [
      "Architected a data cleaning pipeline for an ergonomic research study",
      "Developed python scripts to clean bad motion capture data from CSV files",
      "Developed python scripts to calculate an ergonomic rating for arms, neck, and trunk, using angle data over time",
    ],
  },
  {
    position: "Software Developer (Co-op)",
    title: "Brock Solutions",
    date: "Jan 2021 - Apr 2021",
    location: "Remote | Kitchener, Ontario",
    image: require("../assets/jobicons/brock.jpeg"),
    bullets: [
      "Developed and improved manufacturing execution systems for R.J. Reynolds",
      "Traced through code to delete unused/outdated functions and rewrote them",
      "Updated old data, and custom object tables in SQL",
    ],
  },
  {
    position: "Machine Learning Developer (Co-op)",
    title: " UofG Thermal Camera Project",
    date: "May 2020 - Aug 2020",
    location: "Remote | Guelph, Ontario",
    image: require("../assets/jobicons/uofg.png"),
    bullets: [
      "Architected a machine learning pipeline, which uses thermal imaging data to detect COVID-19",
      "Developed a facial detection script using a human face data set and a 64 nodal point mesh",
      "Used adaptive thresholding to calculate average and mean pixel values in regions of thermal faces to determine body temperature and breath rate",
      "Check out the official article: https://guides.uoguelph.ca/2021/09/researchers-aim-to-improve-covid-19-screening-with-thermal-camera-based-imaging-tool/",
    ],
  },
  {
    position: "Software Developer (Co-op)",
    title: "Camis Inc.",
    date: "Sep 2019 - Dec 2019",
    location: "Guelph, Ontario",
    image: require("../assets/jobicons/camis.jpeg"),
    bullets: [
      "Built front end UI systems and user flows for various Ontario Parks reservations systems",
      "Implemented front-end bug fixes and added style changes for the client website",
      "Used Jira to manage pull requests and complete code reviews",
    ],
  },
  {
    position: "Mobile Developer (Co-op)",
    title: "Perpetual Motion Sports & Entertainment",
    date: "May 2019 - Aug 2019",
    location: "Guelph, Ontario",
    image: require("../assets/jobicons/motion.jpeg"),
    bullets: [
      "Developed a cross platform application using React Native, populated dynamically using website API data",
      "Tested IOS on Test Flight and generated an APK to test on Android",
      "Features: scheduling, league standings, team registration, score reporting, and location routing",
    ],
  },
];

const PROJECTS = [
  {
    title: "Portfolio Website",
    stack: "React.Js, Node.js",
    github: "https://github.com/BraydenKlemens",
    description:
      "Portfolio website that is constantly growing and being updated",
    urls: [require("../assets/projects/portfolio/website_home.png")],
  },
  {
    title: "Survey Hub",
    stack: "Flutter, Dart, Cloud Firestore, Firebase, Provider",
    github: "https://github.com/BraydenKlemens",
    description:
      "A centralized location for students to complete surveys they have signed up for at UofG",
    urls: [
      require("../assets/projects/survey_hub/login.png"),
      require("../assets/projects/survey_hub/register.png"),
      require("../assets/projects/survey_hub/home.png"),
      require("../assets/projects/survey_hub/survey.png"),
      require("../assets/projects/survey_hub/surveydone.png"),
      require("../assets/projects/survey_hub/history.png"),
      require("../assets/projects/survey_hub/profile.png"),
    ],
  },
  {
    title: "Attraction App",
    stack: "Flutter, Dart",
    github: "https://github.com/BraydenKlemens",
    description:
      "A simple Flutter app that shows details about attractions around guelph",
    urls: [
      require("../assets/projects/attractions_app/home.png"),
      require("../assets/projects/attractions_app/attraction.png"),
      require("../assets/projects/attractions_app/schedule.png"),
      require("../assets/projects/rattractions_app/filter.png"),
      require("../assets/projects/attractions_app/create.png"),
    ],
  },
  {
    title: "Recipe App",
    stack: "Flutter, Dart",
    github: "https://github.com/BraydenKlemens",
    description: "A simple Flutter app for discovering new recipes",
    urls: [
      require("../assets/projects/recipe_app/home.png"),
      require("../assets/projects/recipe_app/recipe.png"),
      require("../assets/projects/recipe_app/nav.png"),
    ],
  },
];

const GAMES = [
  {
    title: "Pokemon 2004GBA",
    stack: "Java, LibGDX",
    github: "https://github.com/BraydenKlemens",
    download: "poo",
    description:
      "A 2004 pokemon game inspired by Fire red/Leaf green. Includes a simple story progression, and battling system",
    urls: ["../assets/profilepic.png"],
  },
  {
    title: "Plants Vs Zombies 2.0",
    stack: "Java, LibGDX",
    github: "https://github.com/BraydenKlemens",
    download: "poo",
    description:
      "An infintie round based Plants vs Zombies remake of the origional mobile game",
    urls: ["../assets/profilepic.png"],
  },
  {
    title: "Connect 4",
    stack: "Java, LibGDX",
    github: "https://github.com/BraydenKlemens",
    download: "poo",
    description: "A remake of Connect 4 board game",
    urls: ["../assets/profilepic.png"],
  },
];

export const constants = {
  ABOUT,
  SKILL_LANGUAGES,
  SKILL_FRAMEWORKS,
  EDUCATION,
  WORK,
  PROJECTS,
  GAMES,
  HOBBIES,
};
