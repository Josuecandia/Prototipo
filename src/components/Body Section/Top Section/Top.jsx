import React from "react";
import "./top.css";

import { BiSearchAlt } from "react-icons/bi";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { BsArrowRightShort } from "react-icons/bs";

import img from "../../../Assets/perfil.jpg";
import img2 from "../../../Assets/per.jpg";
import video from "../../../Assets/video.mp4";

const Top = () => {
  return (
    <div className="topSection">
      <div className="headerSection flex">
        <div className="title">
          <h1>Bienvenido a APpiq</h1>
          <p>Hola Julieta, bienvenida de nuevo</p>
        </div>

        <div className="searchBar flex">
          <input type="text" placeholder="Search Dashboard" />
          <BiSearchAlt className="icon" />
        </div>

        <div className="adminDiv flex">
          
          <MdOutlineNotificationsNone className="icon" />
          <div className="adminImage">
            <img src={img} alt="Admin Image" />
          </div>
        </div>
      </div>

      <div className="cardSection flex">
        <div className="rightCard flex">
          <h1>Por un mejor futuro</h1>
          <div className="buttons flex">
          </div>
          <div className="videoDiv">
            <video src={video} autoPlay loop muted></video>
          </div>
        </div>

        <div className="leftCard flex">
          <div className="main flex">
            <div className="textDiv">
              <h1>Reportes</h1>
              <div className="flex">
                <span>
                  Usuarios<br /> <small>20,000</small>
                </span>
                <span>
                  Actividades<br /> <small>10,000</small>
                </span>
              </div>
              <span className="flex link">
                Ir a actividades <BsArrowRightShort className="icon" />
              </span>
            </div>

            <div className="imgDiv">
              <img src={img2} alt="Image Name" />
            </div>

            {/*<div className='sideBarCard'>
          <BsQuestionCircle className="icon"/>
          <div className='cardContent'>
            <div className='circle1'></div>
            <div className='circle2'></div>

            <h3> Help Center </h3>
            <p>Having trouble in Appiq, please contact us from more questions</p>
            
            <button className='btn'>Go to help center</button>
             </div>
             </div>*/}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;