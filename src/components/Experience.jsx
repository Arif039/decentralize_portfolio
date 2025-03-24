function Experience({ experience }) {
    return (
      <section id="experience" className=" mt-30">
        <h2 className="text-white mb-20 font-black text-center">EXPERIENCE</h2>
        <ul className="text-white  flex flex-row flex-wrap place-content-center gap-6 flex-wrap">
          {experience.map((exp) => (
            <li key={exp.id} className="bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-600 p-4 rounded-xl shadow-lg transition-all duration-300 hover:shadow-purple-500/50 hover:scale-105 cursor-pointer">
              <h3 className="mb-3 font-bold">{exp.qualification}</h3>
              <p className="mb-3"><strong>Duration:</strong> {exp.duration}</p>
              <p className="mb-3"><strong>Position:</strong> {exp.position}</p>
              <p className="mb-3"><strong>Skills Gained:</strong> {exp.skillsGained}</p>
              <p className="mb-3"><strong>Organization:</strong> {exp.organization}</p>
            </li>
          ))}
        </ul>
      </section>
    );
  }
  
  export default Experience;
  

