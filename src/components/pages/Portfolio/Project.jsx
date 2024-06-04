
export default function Project ({project}) {

return (
  <div className='projectcard' style={{ backgroundImage: `url(${project.image})`, backgroundRepeat: 'no-repeat' }}>
      <div className='links'>

        {/* Live link to project */}
        <a href={project.liveLink} target='_blank'>
          <h3 className='title'>{project.title}</h3>
        </a>

        {/* GitHub Repository link for project */}
        <a href={project.github} target='_blank'>
          <img src='/src/assets/github.svg' height="70px" alt='github logo' id='github-logo' />
        </a>
      </div>

      {/* short description for project */}
      <p className='description'>{project.description}</p>
    </div>
)
}