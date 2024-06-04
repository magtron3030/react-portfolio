
import resume from '../../assets/maggiesresume.pdf'
import './ResumePage.css'


export default function ResumePage () {
   return (
      <main>
         <h2 className='title'>Resume</h2>
         <a href={resume} target='_blank' download="Maggies Resume">
            <button className='resumebutton'>Click to download my resume</button>
         </a>

         <div>
            <h3>Front-end Profeciencies</h3> 
               <ul>
                  <li> HTML</li>
                  <li> CSS</li>
                  <li>JavaScript</li>
                  <li>Bootstrap</li>
                  <li>JQuery</li>
                  <li>Media Queries</li>
                  <li>React</li>
               </ul>
            
            
            <h3> Back-end Profeciencies </h3>
               <ul>
                  <li>APIs</li>
                  <li>Node</li>
                  <li>Express</li>
                  <li>MySQL, Sequelize</li>
                  <li>MongoDB, Mongoose</li>
                  <li>REST</li>
                  <li>GraphQL</li>
               </ul>
           </div>

      </main>
   )    
}