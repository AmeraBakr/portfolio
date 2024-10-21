import { motion } from 'framer-motion';
import React, { useState } from 'react';
import './Main.css';


const myProjects = [
  { projectTitle: "React Project", category: "react", imgPath: "/img/Eslam.jpg" },
  { projectTitle: "React Project", category: "react", imgPath: "/img/6.jpg" },
  { projectTitle: "Css Project", category: "css", imgPath: "/img/3.jpg" },
  { projectTitle: "Css Project", category: "css", imgPath: "/img/4.jpg" },
  { projectTitle: "Bootstrap Project", category: "Bootstrap", imgPath: "/img/5.jpg" },
  { projectTitle: "Bootstrap Project", category: "Bootstrap", imgPath: "/img/2.jpg" },
  { projectTitle: "JavaScript Project", category: "JavaScript", imgPath: "/img/7.jpg" },
];

function Main() {
  const [currentActive, setCurrentActive] = useState("all");
  const [array, setArray] = useState(myProjects);

  return (
    <div>
      <section className='main flexx'>
        <div className="left flexx">
          <button
            onClick={() => {
              setCurrentActive("all");
              setArray(myProjects); 
            }}
            className={currentActive === "all" ? "active" : null}
          >
            All Projects
          </button>

          <button
            onClick={() => {
              setCurrentActive("css");
              const newArray = myProjects.filter((item) => item.category === "css");
              setArray(newArray); 
            }}
            className={currentActive === "css" ? "active" : null}
          >
            HTML & CSS
          </button>

          <button
            onClick={() => {
              setCurrentActive("react");
              const newArray = myProjects.filter((item) => item.category === "react");
              setArray(newArray); 
            }}
            className={currentActive === "react" ? "active" : null}
          >
            React & MUI
          </button>
          <button
            onClick={() => {
              setCurrentActive("JavaScript");
              const newArray = myProjects.filter((item) => item.category === "JavaScript");
              setArray(newArray);
            }}
            className={currentActive === "JavaScript" ? "active" : null}
          >
            JavaScript
          </button>
          <button
            onClick={() => {
              setCurrentActive("Bootstrap");
              const newArray = myProjects.filter((item) => item.category === "Bootstrap");
              setArray(newArray);
            }}
            className={currentActive === "Bootstrap" ? "active" : null}
          >
            Bootstrap
          </button>
                  
          


        </div>

        <div className="right flex">
          {
          Array.isArray(array) && array.length > 0 ? (
            array.map((item) => (
              <motion.article 
              layout
              initial={{transform: "scale(0)"}}
              animate={{transform: "scale(1)"}}
              transition={{damping: 8, stiffness: 50}}
              className="popular-movies card"
              key={item.imgPath} >
                <img width={266} src={item.imgPath} alt={item.projectTitle} />
                <div style={{ width: "254px" }} className="box">
                  <h1>{item.projectTitle}</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum delectus nihil possimus, consequatur iste quisquam?
                  </p>
                  <div className="icons">
                    <div style={{ gap: "13px" }} className='flexx'>
                      <div className='icon-link'></div>
                      <div className='icon-github'></div>
                    </div>
                    <a className='link'>
                      more
                      <span style={{ alignSelf: "center" }} className='icon-arrow_forward'></span>
                    </a>
                  </div>
                </div>
              </motion.article>
            ))
          ) : (
            <p>No projects available</p> 
          )}
        </div>
      </section>
    </div>
  );
}

export default Main;
