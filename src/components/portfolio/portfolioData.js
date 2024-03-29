import Image1 from "../../../public/assets/img/portfolio/senandung.png";
import Image2 from "../../../public/assets/img/portfolio/hayyulhadi.png";
import Image3 from "../../../public/assets/img/portfolio/ramadhan.png";
import Image4 from "../../../public/assets/img/portfolio/salamullah.png";
import Image5 from "../../../public/assets/img/portfolio/logods.png";
import Image6 from "../../../public/assets/img/portfolio/nuruliman1.png";
import Image7 from "../../../public/assets/img/portfolio/logodiyaulq.png";
import Image8 from "../../../public/assets/img/portfolio/project-8.jpg";
import Image9 from "../../../public/assets/img/portfolio/project-9.jpg";



const PortfolioData = [
  {
    id: 1,
    type: "youtube project",
    image: Image1,
    tag: ["video"],
    delayAnimation: "0",
    modalDetails: [
      {
        project: "Music Video",
        client: "MAN 1 Pandeglang",
        
        preview: "YouTube",
        link: "https://youtu.be/oBK9uUq5gZ8?si=vFOYcU0KVWPg4ZcZ",
      },
    ],
  },
  {
    id: 2,
    type: "youtube project",
    image: Image2,
    tag: ["video"],
    delayAnimation: "100",
    modalDetails: [
      {
        project: "Music Video",
        client: "Diggy Studio",
  
        preview: "YouTube",
        link: "https://youtu.be/K_xptKru3R8?si=Y1w59ep9_7dsvRgN",
      },
    ],
  },
  {
    id: 3,
    type: "youtube project",
    image: Image3,
    tag: ["video"],
    delayAnimation: "100",
    modalDetails: [
      {
        project: "Music Video",
        client: "KPI UIN SGD 22",

        preview: "YouTube",
        link: "https://youtu.be/5tNWPSl4R4g?si=QhNGM3_Gvke1mwNv",
      },
    ],
  },
  {
    id: 4,
    type: "youtube project",
    image: Image4,
    tag: ["video"],
    delayAnimation: "100",
    modalDetails: [
      {
        project: "Music Video",
        client: "Diggy Studio",

        preview: "YouTube",
        link: "https://www.youtu.be/8X3JA0YSzdU?si=J324e2rM5dbI_jzA",
      },
    ],
  },

  
  {
    id: 5,
    type: "logo project",
    image: Image5,
    tag: ["logo"],
    delayAnimation: "100",
    modalDetails: [
      {
        project: "Company Logo Daarussyifa",
        client: "Daarussyifa",
        language: "",
        preview: " ",
        link: " ",
      },
    ],
  },
  {
    id: 6,
    type: "youtube project",
    image: Image6,
    tag: ["video"],
    delayAnimation: "100",
    modalDetails: [
      {
        project: "Music Video",
        client: "YPP Nurul Iman Cibaduyut",

        preview: "YouTube",
        link: "https://youtu.be/qFIHUYzlHbY?si=FzyqFWEgmQVtlHDn",
      },
    ],
  },
  {
    id: 7,
    type: "logo project",
    image: Image7,
    tag: ["logo"],
    delayAnimation: "0",
    modalDetails: [
      {
        project: "Company Logo Diyaul Quran",
        client: "Diyaul Quran As-sunnah",
        language: "HTML, CSS, Javascript",
        preview: "Logo",
        link: "https://drive.google.com/file/d/1agk2ZygqizqhY21NZ7260nN1bGrkdmMF/view?usp=drive_link",
      },
    ],
  },
  /*
  {
    id: 8,
    type: "dribble project",
    image: Image8,
    tag: ["graphic design"],
    delayAnimation: "100",
    modalDetails: [
      {
        project: "Website",
        client: "Dribbble",
        language: "HTML, CSS, Javascript",
        preview: "www.dribbble.com",
        link: "https://dribbble.com/ib-themes",
      },
    ],
  },
  {
    id: 9,
    type: "behence project",
    image: Image9,
    tag: ["graphic design", "mockup"],
    delayAnimation: "200",
    modalDetails: [
      {
        project: "Website",
        client: "Behance",
        language: "HTML, CSS, Javascript",
        preview: "www.behance.com",
        link: "https://www.behance.net/ib-themes",
      },
    ],
  },*/
];


const descending = PortfolioData.sort().reverse();
console.log(descending);


export default PortfolioData;
