import React from "react";
import Skillsdata from "./Skillsdata";
import Image from "next/image";


const skillsContent = [
  { skillClass: "./skill/illustrator.png", skillName: "Premierepro" },
  { skillClass: "p75", skillName: "Davinci Resolve" },
  { skillClass: "p70", skillName: "FL Studio" },
  { skillClass: "p70", skillName: "Illustrator" },
  { skillClass: "p70", skillName: "WORDPRESS" },
  { skillClass: "p50", skillName: "HTML" },
  { skillClass: "p45", skillName: "VUE" },
  { skillClass: "p45", skillName: "REACT" },
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="col-6 col-md-3 mb-3 mb-sm-5" key={i}>
          <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
            {val.skillName}
          </h6>
        </div>
      ))}
    </>
  );
};

export default Skills;
