import portfoliopic from "../../assets/portfoliopic.svg";

export default function AboutPage() {
  return (
    <main className="container mt-5">
      <div className="row align-items-center">
         <div className="col-6 text-center row justify-content-center">
        <h1>About Me</h1>
        <div className="w-50 h-50">
          <img
            src={portfoliopic}
            className="img-fluid"
            alt="about me pic"
          ></img>
          </div>
        </div>
      <div className="col-6">
        <p>
          Welcome to my personal portfolio of the top projects from my recent full stack computer coding class taken at the University of Minnesota. We have spent the last three month eating, sleeping and breathing code and it has been so fun to come up with new ideas and learn how to implement different techniques.</p>

          <p>
          I grew up in Boise, Idaho but have traveled near and far. I recently was the owner and operator of a home interior painting company and I also recently got my private pilots license. I've worked in hospitality and love creating new things and finding ways to make my clientel happy. I enjoy skiing, yoga, backpacking, cooking, photography and I am a soon to mom (August 2024!). I love working with a team and also have the disapline to conquer projects on my own. 
        </p>
        </div>
      </div>
    </main>
  );
}
