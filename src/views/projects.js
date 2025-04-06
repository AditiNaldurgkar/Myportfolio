import React from "react";
import collegeProjectImg from "./college project-cuate.png"

const Projects = () => {
  return (
    <div className="overflow-hidden bg-[#0F172A]  text-white py-[30px] block mx-auto w-[90%] rounded-[10px] px-[10px] m-[30px]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg">
              <p className="text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl px-[50px]">
                Projects
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-white lg:max-w-none">
                <div className="relative pl-9">
                  <dt className="inline font-semibold text-[#22D3EE]">
                    <img
                      src="https://cdn-icons-png.flaticon.com/128/4283/4283062.png"
                      className="h-[20px] inline mr-[5px]"
                      alt="Wonders Icon"
                    />
                    Wonders of the World : 
                  </dt>
                  <dd className="inline">
                    This website revolves around the seven wonders of the world.
                    This was a group project aimed to enrich all the visitors
                    with valuable information about all the wonders. At the end
                    of every page, the user can evaluate his or her knowledge by
                    attempting an interesting quiz. I was given the
                    responsibility of developing a page dedicated to the wonder
                    of Mexico, Chichen Itza. I implemented some of the core and
                    basic concepts of JavaScript along with HTML and CSS to
                    create this webpage. My work and contribution to this
                    project can be reviewed at:
                    <br />
                    <a
                      href="https://github.com/AditiNaldurgkar/ICP-8.0-Grp2-Project3-Wonder-World"
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub Link
                    </a>
                  </dd>
                </div>

                <div className="relative pl-9">
                  <dt className="inline font-semibold text-[#22D3EE]">
                    <img
                      src="https://cdn-icons-png.flaticon.com/128/9612/9612167.png"
                      className="h-[20px] inline mr-[5px]"
                      alt="Career Icon"
                    />
                    Career Connect :
                  </dt>
                  <dd className="inline">
                    This is a website especially made for job seekers and
                    recruiters. It helps people in search of jobs find their
                    dream jobs. My task here was to develop a page titled as
                    "Tech and Talent" which could enrich the users with valuable
                    insights from the corporate world. This page includes
                    information about the latest innovations, developments, and
                    trends in today’s ever-growing technological and corporate
                    sectors. I have used HTML, CSS, and React to build this
                    page.
                    <br />
                    <a
                      href="https://github.com/AditiNaldurgkar/icp8.0-reactjs-group-project-4/tree/master"
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub Link
                    </a>
                  </dd>
                </div>

                <div className="relative pl-9">
                  <dt className="inline font-semibold text-[#22D3EE]">
                    <img
                      src="https://cdn-icons-png.flaticon.com/128/2603/2603741.png"
                      className="h-[20px] inline mr-[5px]"
                      alt="Hometown Icon"
                    />
                    Hometown :
                  </dt>
                  <dd className="inline">
                    This is a website made from scratch using HTML, CSS,
                    JavaScript, and React. This is an e-commerce website but is
                    focused on home décor items. Throughout the process of
                    developing this, I learned how to maintain a proper folder
                    structure and make a website completely and easily
                    configurable.
                    <br />
                    <a
                      href="https://github.com/AditiNaldurgkar/configurableui"
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub Link
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <img
            src={collegeProjectImg}
            alt="College Project Illustration"
            className="h-[500px] mt-[200px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
