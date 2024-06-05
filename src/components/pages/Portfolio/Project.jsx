
export default function Project ({project}) {

return (

  <div className='projectcard' style={{ backgroundImage: `url(${project.image})`, backgroundRepeat: 'no-repeat' }}>
      
      
      <div className='links'>

        {/* Rendered link */}
        <a className= "projectlink" href={project.renderlink} target='_blank'>
          <h3 className='title'>{project.title}</h3>
        </a>

        {/* GitHub link*/}
        <a href={project.gitHub} target='_blank'>
          <img src='/src/assets/github.svg' height="70px" alt='github logo' id='githublogo' />
        </a>
     

      {/* Description */}
      <p className='description'>{project.description}</p>
      </div>
   
    </div>
)
}