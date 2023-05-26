import React from "react";

export default function About() {
  return (
    <section id="about" className="px-4 md:px-0">
      <div className="container mx-auto flex flex-col md:flex-row items-center py-10 md:py-20">
        <div className="md:w-1/2 lg:pr-24 md:pr-16 flex flex-col items-center text-center mb-16 md:mb-0">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Sourav.
            <br className="hidden lg:inline-block" />I love to build amazing apps.
          </h1>
          <p className="mb-8 leading-relaxed">
            I specialize in creating dynamic and responsive web applications that are both visually appealing and user-friendly. I have experience in developing both front-end solutions using a variety of programming languages and frameworks. My goal is to build web applications that are not only functional but also efficient and scalable.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center md:items-start">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg mb-4 md:mb-0 md:mr-4">
              Work With Me
            </a>
            <a
              href="#projects"
              className="inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Past Work
            </a>
          </div>
        </div>
        <div className="md:w-1/2 w-full flex justify-center">
          <div className="max-w-md w-full">
            <img
              className="object-cover object-center rounded-full w-full h-full"
              alt="hero"
              src="./sourav_img.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
