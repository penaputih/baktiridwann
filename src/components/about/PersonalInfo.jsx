import React from "react";


const personalInfoContent = [
  { meta: "first name", metaInfo: "Bakti", hasColor: "" },
  { meta: "last name", metaInfo: "Ridwan Nur", hasColor: "" },
  { meta: "Age", metaInfo: "19 Years", hasColor: "" },
  { meta: "Nationality", metaInfo: "Indonesian", hasColor: "" },
  { meta: "Freelance", metaInfo: "Available", hasColor: "green" },
  /*{ meta: "Address", metaInfo: "Lorem ipsum", hasColor: "" },*/
  { meta: "phone", metaInfo: "+62123456789", hasColor: "" },
  { meta: "Email", metaInfo: "ridwannurbakti@gmail.com", hasColor: "" },
  { meta: "Instagram", metaInfo: " ridwannur.30", hasColor: "" },
  /*{ meta: "languages", metaInfo: "Indonesian", hasColor: "" },*/
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      <div>
        <p>
        Mahasiswa Komunikasi Penyiaran Islam <a href="https://uinsgd.ac.id/">UIN SGD</a>, Hanya manusia biasa, Photo & Video Grapher, Editor, Konten kreator, Web Designer.
        </p>
      </div>
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span
            className={`value d-block d-sm-inline-block d-lg-block d-xl-inline-block ${val.hasColor}`}
          >
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
