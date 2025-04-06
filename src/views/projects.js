import React from "react";
import collegeProjectImg from "./college project-cuate.png";

const Projects = () => {
  return (
    <div className="overflow-hidden bg-[#0F172A] text-white py-8 px-4 sm:px-6 lg:px-8 rounded-[10px] w-[90%] mx-auto my-[30px]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-16 lg:gap-x-8 items-center">
          <div>
            <p className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white text-center sm:text-left mb-6">
              Projects
            </p>
            <dl className="space-y-10 text-base leading-7 text-white">
              <div className="relative pl-9">
                <dt className="inline font-semibold text-[#22D3EE]">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/4283/4283062.png"
                    className="h-[20px] inline mr-2"
                    alt="Wonders Icon"
                  />
                  Wonders of the World :
                </dt>
                <dd className="inline">
                  A group project exploring the 7 wonders with an interactive quiz. I developed the Chichen Itza page using HTML, CSS, and JS.
                  <br />
                  <a
                    href="https://github.com/AditiNaldurgkar/ICP-8.0-Grp2-Project3-Wonder-World"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#22D3EE]"
                  >
                    GitHub Link
                  </a>
                </dd>
              </div>
              <div className="relative pl-9">
                <dt className="inline font-semibold text-[#22D3EE]">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/9612/9612167.png"
                    className="h-[20px] inline mr-2"
                    alt="Career Icon"
                  />
                  Career Connect :
                </dt>
                <dd className="inline">
                  A job portal site. I built the "Tech and Talent" section using React, HTML, and CSS.
                  <br />
                  <a
                    href="https://github.com/AditiNaldurgkar/icp8.0-reactjs-group-project-4/tree/master"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#22D3EE]"
                  >
                    GitHub Link
                  </a>
                </dd>
              </div>

              
              <div className="relative pl-9">
                <dt className="inline font-semibold text-[#22D3EE]">
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/2603/2603741.png"
                    className="h-[20px] inline mr-2"
                    alt="Hometown Icon"
                  />
                  Hometown :
                </dt>
                <dd className="inline">
                  An e-commerce site for home décor built using React. Focused on clean folder structure and configurable UI.
                  <br />
                  <a
                    href="https://github.com/AditiNaldurgkar/configurableui"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#22D3EE]"
                  >
                    GitHub Link
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          {/* Image Section */}
          <div className="flex justify-center lg:justify-end">
            <img
              src={collegeProjectImg}
              alt="College Project Illustration"
              className="w-[80%] sm:w-[60%] md:w-[70%] lg:w-[100%] max-h-[400px] sm:max-h-[450px] object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
