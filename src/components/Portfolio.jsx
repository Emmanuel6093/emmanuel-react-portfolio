import React from "react";
import budget from '../assets/portfolio/budget.jpg';
import hongry from '../assets/portfolio/hongry.jpg';
import noteEater from '../assets/portfolio/noteEater.jpg';
import noteTaker from '../assets/portfolio/noteTaker.jpg';
import techBlog from '../assets/portfolio/techBlog.jpg';
import weather from '../assets/portfolio/weather.jpg';

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: budget,
      deployedUrl: 'https://emmanuel-budget-tracker.herokuapp.com/',
      githubUrl: 'https://github.com/Emmanuel6093/budget-tracker',
    },
    {
      id: 2,
      src: hongry,
      deployedUrl: 'https://hongry.herokuapp.com/',
      githubUrl: 'https://github.com/Emmanuel6093/hongry',
    },
    {
      id: 3,
      src: noteEater,
      deployedUrl: 'https://foglea10.github.io/Note-Eater/',
      githubUrl: 'https://github.com/FogleA10/Note-Eater',
    },
    {
      id: 4,
      src: noteTaker,
      deployedUrl: 'https://note-taker-emman6093.herokuapp.com/', 
      githubUrl: 'https://github.com/Emmanuel6093/note-taker',
    },
    {
      id: 5,
      src: techBlog,
      deployedUrl: 'https://obscure-lowlands-04499.herokuapp.com/',
      githubUrl: 'https://github.com/Emmanuel6093/tech-blog',
    },
    {
      id: 6,
      src: weather,
      deployedUrl: 'https://emmanuel6093.github.io/weather-dashboard/',
      githubUrl: 'https://github.com/Emmanuel6093/weather-dashboard',
    },
  ];
  
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, deployedUrl, githubUrl }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a 
                className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                href={deployedUrl}
                target="_blank"
                rel="noopener noreferrer"
                >
                  Demo
                </a>
                <a 
                className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
