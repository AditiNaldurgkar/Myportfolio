import { useEffect, useState } from "react";
import me from "./../aditi prof.jpg"
import abticon from "./../person.png"
import Projects from "./projects";
const Portfolio = () => {
  const nameText = "Hello I am Aditi Naldurgkar!👋";
  const [displayText, setDisplayText] = useState("");
  const [i, setI] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (i < nameText.length) {
          setDisplayText(nameText.substring(0, i + 1));
          setI((prev) => prev + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        if (i > 0) {
          setDisplayText(nameText.substring(0, i - 1));
          setI((prev) => prev - 1);
        } else {
          setTimeout(() => setIsDeleting(false), 500);
        }
      }
    }, isDeleting ? 70 : 120);
  
    return () => clearTimeout(timeout);
  }, [i, isDeleting]);
  
  return (
    <div className="bg-black text-white">
      <nav className="flex items-stretch bg-sky-500 text-white h-[40px] font-semibold flex-row justify-evenly">
        {[
          "about",
          "education",
          "skills",
          "projects",
          "achievements",
          "extracurricular",
          "certifications",
          "contact",
        ].map((section) => (
          <a key={section} className="mx-[10px] mt-[5px]" href={`#${section}`}>
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </a>
        ))}
      </nav>

      <h1 className="text-4xl font-bold text-center mt-10 sm:text-3xl md:text">{displayText}</h1>

      <div className="flex flex-row items-center justify-center my-[20px]">
        <span className="font-bold text-3xl">About Me</span>
        <img src={abticon} className="bg-white h-[45px] mx-[10px] p-[6px] rounded-[3px]" alt="Person" />
      </div>

      <div className="flex flex-row items-center justify-center p-[20px] mt-[20px] md:flex-row items-center justify-center">
        <img src={me} className="h-[200px] border-white rounded-[5px] border-black border-[4px] mx-[50px]" alt="Aditi" />
        <div>
          <p>
          I am Aditi Naldurgkar, a B.Tech student at YCCE, Nagpur, specializing in Computer Science and Design.
         I have a strong foundation in Full Stack Development, Java, and Git/GitHub. As a dedicated and hardworking individual, 
         I am always eager to learn new technologies and apply them to real-world projects. My passion for continuous
          learning and problem-solving drives me to explore innovative solutions in the tech industry.
          </p>
          <span className="font-bold my-[25px] text-2xl ">Objective: </span>
          <span>
            To secure a position in a company where I can implement and enhance my skills and knowledge while
            contributing to the growth and success of the company.
          </span>
        </div>    <span className="font-bold my-[15px] text-lg md:text-2xl block">Objective:</span>
      </div>

      <section id="education" className="container mx-auto my-10 sm:px-10">
        <h2 className="font-bold text-3xl sm:text-3xl text-center my-5">Education</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-[#0F172A]">
                {['Degree', 'Institute', 'Year', 'Percentage'].map((heading) => (
                  <th key={heading} className="border-white border-[2px] px-4 py-2">
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[{
                degree: 'B.Tech (CSD)', institute: 'RTMNU', year: '2026', percentage: 'Pursuing', bg: 'bg-[#22D3EE] text-black'
              }, {
                degree: 'HSC', institute: 'CBSE', year: '2022', percentage: '86.4%', bg: 'bg-[#0F172A]'
              }, {
                degree: 'SSC', institute: 'CBSE', year: '2020', percentage: '94.4%', bg: 'bg-[#22D3EE] text-black'
              }].map((row, index) => (
                <tr key={index} className={`text-center ${row.bg}`}>
                  <td className="border-white border-[2px] px-4 py-2">{row.degree}</td>
                  <td className="border-white border-[2px] px-4 py-2">{row.institute}</td>
                  <td className="border-white border-[2px] px-4 py-2">{row.year}</td>
                  <td className="border-white border-[2px] px-4 py-2">{row.percentage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section id="skills" className="mb-[10px]">
        <span className="font-bold text-3xl text-center block">Skills</span>
        <ul>
          <li className="pl-[50px]"><strong>1. Frontend Development:</strong> HTML, CSS, React, JavaScript</li>
          <li className="pl-[50px]"><strong>2. Languages:</strong> C</li>
          <li className="pl-[50px]"><strong>3. Version Control:</strong> Git & GitHub</li>
        </ul>
      </section>
      
              <Projects/>
              <section id="achievements" class="container">
        <span class="font-bold text-3xl text-center block my-5 mx-auto">Achievements
        </span>
        <ul class="px-[50px] mb-[20px]">
            <li>1. Awarded a CBSE Certificate of Merit for achieving a perfect score of 100 in Mathematics.</li>
        </ul>
    </section>

    
    <section id="extracurricular" >
        <span class="font-bold text-3xl text-center block w-[100%]">Extracurricular Activities</span>
        <ul class="px-[50px]">
            <li class="mb-[10px]">1. Attended ISRO’s online summer school program.</li>
            <li class="mb-[10px]">2. Secured second position in the web design jam of the department’s annual event.</li>
            <li class="mb-[10px]">3. Member of the departmental magazine team.</li>
        </ul>
    </section>
    <section id="certifications" >
        <h2 class="font-bold text-center text-3xl my-[10px]">Certifications</h2>
        <ul class="px-[50px]">
            <li class="mb-[10px]">1. Cambridge English Empower Level C1 course certificate.</li>
            <li class="mb-[10px]">2. IBM’s "Getting Started with AI" course.</li>
        </ul>
    </section>

      <section id="contact" className="px-[50px] ">
        <h2 className="font-bold text-center text-3xl my-[10px]">Contact</h2>
        <p className="mb-[10px]"> <strong>1. Email:</strong> <a  className=" text-[#22D3EE]" href="mailto:aditianaldurgkar@gmail.com">aditianaldurgkar@gmail.com</a></p>
        <p className="mb-[10px]"><strong>2. LinkedIn:</strong> <a className=" text-[#22D3EE]" href="https://www.linkedin.com/in/aditi-naldurgkar" target="_blank" rel="noopener noreferrer">Aditi Naldurgkar</a></p>
        <p className="mb-[10px]"><strong>3. GitHub:</strong> <a className=" text-[#22D3EE]" href="https://github.com/AditiNaldurgkar" target="_blank" rel="noopener noreferrer">AditiNaldurgkar</a></p>
      </section>
    </div>
  );
};

export default Portfolio;
