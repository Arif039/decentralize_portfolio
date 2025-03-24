function Contact () {
    return (
        <div id="contact" className="text-white">
            <form action="" className=" flex flex-col " >
                <label htmlFor="name" className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-4">Your Name:</label>
                <input type="text" placeholder="Please Enter Your Name" className="border-1 border-white-500/100 ... invalid:border-pink-500 invalid:text-pink-600 focus:border-green-700 focus:text-sky-500 focus:outline focus:outline-sky-500 focus:invalid:border-pink-500 focus:invalid:outline-pink-500 disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500 disabled:shadow-none dark:disabled:border-gray-700 dark:disabled:bg-gray-800/20 ... w-xs md:w-sm p-2 rounded-sm"/>
                <label htmlFor="email" className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-4 mt-2">Your Email</label>
                <input type="email" placeholder="Please Enter Your Email" className="border-1 border-white-500/100 ... invalid:border-pink-500 invalid:text-pink-600 focus:border-green-700 focus:outline focus:outline-sky-500 focus:invalid:border-pink-500 focus:invalid:outline-pink-500 disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500 disabled:shadow-none dark:disabled:border-gray-700 dark:disabled:bg-gray-800/20 ... w-xs md:w-sm p-2 rounded-sm"/>
                <label htmlFor="message" className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-4 mt-2">Your Messaga</label>
                <textarea name="message" id="message" placeholder="Please Enter Your Message" className="border-1 border-white-500/100 ... focus:border-green-700 focus:text-sky-500 w-xs md:w-sm p-2 rounded-sm" ></textarea>
            </form>
            <button type="submit" className='text-base font-bold bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ... p-3 text-white  cursor-pointer rounded-sm transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 mt-4'>Submit Info</button>
        </div>
    )
}

export default Contact;