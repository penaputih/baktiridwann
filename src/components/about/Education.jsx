import React from "react";

const educationContent = [
  {
    year: "2023",
    degree: "S1",
    institute: "UIN Sunan Gunung Djati Bandung",
    details: `Sedang menempuh S1 di UIN Sunan Gunung Djati Bandung prodi Komunikasi dan Penyiaran Islam.`,
  },
  {
    year: "2022",
    degree: "SMA",
    institute: "MAN 1 Pandeglang",
    details: `Lulusan dari Madrasah 'Aliyah Negeri 1 pandeglang angkatan ke-32 tahun 2022.`,
  },
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
            <span className="place open-sans-font">{val.institute}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;
