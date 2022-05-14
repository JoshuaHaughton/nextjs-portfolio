import ProjectCard from '../ProjectCard/ProjectCard';
import classes from './Projects.module.css';
import projectPhoto from "../../../public/Ecom-Project.png";

const Projects = () => {
  return (
    <div clasdName={classes.container}>
      <div className={classes.row}>
        <h1>
            Here are some of my <span className={classes.secondary}>projects</span>
        </h1>
        <ul>
          <ProjectCard
             title={'E-Commerce App - Vinyl Fresh'}
             techStack={'React.js, Redux, Typescript, Firebase'}
             projectDescription={`An E-Commerce application where users can browse and order
             vinyl record covers based on popular album covers. Users can
             create accounts, manage their cart, checkout with vinyl
             records, and view their orders scheduled for delivery.`}
             projectImage={projectPhoto}
             githubLink={'https://github.com/JoshuaHaughton/vinyl-shop'}
             demoLink={"https://vinyl-fresh.netlify.app/"}
          />
        </ul>
      </div>
    </div>
  )
}

export default Projects