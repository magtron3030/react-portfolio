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
        <p className="lead">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, dolorum
          tempora recusandae ratione doloribus delectus a exercitationem ullam
          neque. At ea nihil voluptates architecto pariatur nostrum alias maxime
          amet! Harum!
        </p>
        </div>
      </div>
    </main>
  );
}
