import React from "react";

const experienceContent = [
  {
    year: "   2023 - Present",
    position: "Camera Person",
    compnayName: "Kulkas-Aang Ridwan",
    details: `Camera Person di Program Acara KULKAS (Kuliah Riangkas) Inspira Tv Bandung. `,
  },
  {
    year: "   2019 - 2022",
    position: "Editor & Video Grapher",
    compnayName: "MAN 1 Pandeglang",
    details: `Editor & Video Grapher di Tim Media MAPANSA (MAN 1 PANDEGLANG). `,
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
