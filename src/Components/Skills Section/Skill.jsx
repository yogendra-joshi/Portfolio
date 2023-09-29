import React from "react";
import "../../styles/css/skills.css";
import { TbBrandReactNative } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoSass } from "react-icons/io";
import { SiCss3 } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { SiCanva } from "react-icons/si";
import { BiLogoFigma } from "react-icons/bi";
import { FaGitSquare } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";

export default function Skill() {
  return (
    <section id="skill" className="skills container section">
      <div className="sectionTitle">
        <span className="titleNumber">02.</span>
        <h5 className="titleText">
          Skills
          <div className="underline">
            <span></span>
          </div>
        </h5>
      </div>
      <div className="skillsContainer grid">
        <div className="skillGroup">
          <div className="groupTitle">
            <h2 className="title">Web Development</h2>
            {/* <span className="subTitle">2 Years Experience</span> */}
          </div>

          <div className="generalSkills">
            <div className="singleSkill">
              <div className="iconBox flex">
                <TbBrandReactNative className="icon" />
              </div>
              <span className="skillName">React</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <IoLogoJavascript className="icon" />
              </div>
              <span className="skillName">Java Script</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <IoLogoSass className="icon" />
              </div>
              <span className="skillName">Sass</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <SiCss3 className="icon" />
              </div>
              <span className="skillName">CSS</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <FaHtml5 className="icon" />
              </div>
              <span className="skillName">HTML</span>
            </div>
          </div>
        </div>
        <div className="skillGroup">
          <div className="groupTitle">
            <h2 className="title">UI/UX Design</h2>
            {/* <span className="subTitle">2 Years Experience</span> */}
          </div>

          <div className="generalSkills">
            <div className="singleSkill">
              <div className="iconBox flex">
                <BiLogoFigma className="icon" />
              </div>
              <span className="skillName">Figma</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <SiCanva className="icon" />
              </div>
              <span className="skillName">Canva Script</span>
            </div>
          </div>
        </div>
        <div className="skillGroup">
          <div className="groupTitle">
            <h2 className="title">Other Skills</h2>
            {/* <span className="subTitle">2 Years Experience</span> */}
          </div>

          <div className="generalSkills">
            <div className="singleSkill">
              <div className="iconBox flex">
                <FaGitSquare className="icon" />
              </div>
              <span className="skillName">Git</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <AiFillGithub className="icon" />
              </div>
              <span className="skillName">Github</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
