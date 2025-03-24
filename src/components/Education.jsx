function Education ({ education }) {
    return (

        <section id="education" className="text-center mt-30">
            <h2 className="text-white mb-20 font-black">EDUCATION</h2>
            <ul className="info-list text-white  flex flex-row flex-wrap place-content-center gap-6 flex-wrap">
                {education.map ((edu) => (
                    <li key={edu.id} className="bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-600 p-1 rounded-xl shadow-lg transition-all duration-300 hover:shadow-purple-500/50 hover:scale-105 cursor-pointer">
                        
                        <h3 className="mb-3 font-bold">{edu.qualification}</h3>
                        <p className="mb-3"><strong>Period: </strong>{edu.period}</p>
                        <p className="mb-3"><strong>Institute: </strong>{edu.institute}</p>
                        <p className="mb-3"><strong>Skills Learned: </strong>{edu.skillsLearned}</p>
                        
                    </li>
                ))}
            </ul>
        </section>
        
    )
}

export default Education;