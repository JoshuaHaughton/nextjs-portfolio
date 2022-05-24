import EcomProjectPhoto from "../../../public/Ecom-Project.png";
import WatchlistProjectPhoto from "../../../public/Watchlist-Project.png";
import LinkedinProjectPhoto from "../../../public/LinkedIn-Remake.png";
import CryptoProjectPhoto from "../../../public/Crypto-Project.png";
import AirbnbProjectPhoto from "../../../public/Airbnb-Remake.png";

const projects = [
  {
    title: "Vinyl Fresh",
    techStack: "React.js, Redux, Typescript, Firebase",
    description: `An E-Commerce application where users can browse and order
             vinyl record covers based on popular album covers. Users can
             create accounts, manage their cart, checkout with vinyl
             records, and view their orders scheduled for delivery.`,
    projectImage: EcomProjectPhoto,
    githubLink: "https://github.com/JoshuaHaughton/vinyl-shop",
    demoLink: "https://vinyl-fresh.netlify.app/",
    primary: "0652b4",
    secondary: "8e8d8d",
  },

  {
    title: "Watchlist",
    techStack: "React.js, Node.js, Express.js MongoDB",
    description: `A media searching app where users can search and find
    detailed descriptions of their favourite movies and tv
    series via TMDBapi. Users can create an account, save movies
    and tv series they find, and then give them ratings, as well
    as check off when they watched them.`,
    projectImage: WatchlistProjectPhoto,
    githubLink: "https://github.com/JoshuaHaughton/watchlist",
    demoLink: "https://watchlist-client.netlify.app/",
    primary: "ba181b",
    secondary: "c78f03",
  },

  {
    title: "LinkedIn Remake",
    techStack: "React.js, Redux, Typescript, Firebase",
    description: `This LinkedIn Remake served as a way for me to improve my
    knowledge about React with Redux, Custom Hooks, Typescript,
    as well as my CSS. Users can create an account, make posts,
    and view posts other users make in real time.`,
    projectImage: LinkedinProjectPhoto,
    githubLink: "https://github.com/JoshuaHaughton/linkedin",
    demoLink: "https://jh-linkedin-clone.netlify.app/",
    primary: "0177b7",
    secondary: "8e8d8d",
    // secondary: "868686"
  },

  {
    title: "Crypto Tracker",
    techStack: "React.js, Redux, Next.js",
    description: `A Nextjs app where users can find detailed information and chart data on their favourite cryptocurrencies. Users can also change the currency being displayed to CAD, USD, GBP, or AUD.`,
    projectImage: CryptoProjectPhoto,
    githubLink: "https://github.com/JoshuaHaughton/crypto-tracker",
    demoLink: "https://jh-crypto-tracker.vercel.app/",
    primary: "ff9500",
    secondary: "8e8d8d",
  },

  {
    title: "Airbnb Remake",
    techStack: "React.js, Next.js, Tailwind.css, Firebase (API)",
    description: `A design-focused project built in order to upgrade my CSS
    knowledge by using the framework Tailwind.css, as well as
    become more familiar with server-side rendering through
    Next.js.`,
    projectImage: AirbnbProjectPhoto,
    githubLink: "https://github.com/JoshuaHaughton/airbnb",
    demoLink: "https://landbnb-xi.vercel.app/",
    primary: "F87171",
    secondary: "8e8d8d",
  },
];

export default projects;
