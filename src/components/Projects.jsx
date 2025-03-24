import { getIpfsGatewayUrl } from "../utils/ipfs";

function Projects({ projects }) {
  return (
    <section id="projects" className="ml-10 md:m-auto md:mt-30 text-white">
      <h2 className="font-bold text-2xl mb-20 text-center mt-20">PROJECTS</h2>

      <div className="flex flex-row justify-center">
        <div className="flex flex-row gap-7 place-content-center flex-wrap text-center w-full md:w-4/5">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-indigo-700 shadow-lg shadow-indigo-500/50 p-4 rounded-xl transition-transform duration-300 hover:scale-105"
            >
              <img 
                src={getIpfsGatewayUrl(project.imageUrl)} 
                alt={project.title} 
                className="w-full h-40 object-cover rounded-t-lg"
              />

              <h3 className="text-center font-bold mt-3 text-lg">{project.title}</h3>
              <p className="text-center p-2 text-sm">{project.details}</p>

              <a 
                href={project.repoLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-block font-bold rounded-lg px-5 py-2 mt-3 bg-gradient-to-bl from-violet-500 to-cyan-500 transition duration-200 ease-in-out hover:scale-110"
              >
                Github Repository
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
