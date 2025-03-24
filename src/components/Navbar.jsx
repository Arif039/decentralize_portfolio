function Navbar () {
    return (
        <div className="" id="home">
           
            <div className="nav">
                <ul className="text-sm md:text-xl flex flex-row text-white">
                    <li className="md:px-3 "><a href="#home" className=" hover:text-gray-400 relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-1 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full">Home</a></li>
                    <li className="px-3"><a href="#experience" className=" hover:text-gray-400 relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-1 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full">Experiences</a></li>
                    <li className="px-3"><a href="#projects" className=" hover:text-gray-400 relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-1 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full">Project</a></li>
                    <li className="px-3"><a href="#education" className=" hover:text-gray-400 relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-1 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full">Education</a></li>
                    <li className="px-3"><a href="#support" className=" hover:text-gray-400 relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-1 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full">Support</a></li>
                </ul>
            </div>
            
        </div>
    )
}

export default Navbar;   