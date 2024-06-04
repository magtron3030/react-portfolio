import projects from '../../../assets/projects.json'
import Project from './Project'
import './portfolio.css'


export default function PortfolioPage () {
   return (
      <div className='portfolio'>
         <h2 className='title'>Portfolio</h2>

         <div className='projects'>
            {projects.map((project, i) => (
               <Project project={project} key={i}/>
            ))}
         </div>




      </div>
   )
}