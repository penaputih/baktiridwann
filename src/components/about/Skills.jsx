import React from "react";
import Skillsdata from "./Skillsdata";
import Image from "next/image";


const Skills = () => {
  return (
    <>
   
          {Skillsdata.map((item) => {
                  const { id, skillsContent, image} = item;

                  return (
                    <>
                    <div className="col-6 col-md-3 mb-3 mb-sm-5">
                    <div
                      key={id}>
                    </div><Image
                        src={image}
                        className="skillimage"
                        alt="" /><h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
                        {skillsContent}
                      </h6>
                      </div>
                      </>
                  );
                })}
  
          
       
    </>
  );
};

export default Skills;
