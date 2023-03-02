import React from 'react'
import './sidebar.css'
import Logo from '../../Assets/logo.png'
import {IoMdSpeedometer} from 'react-icons/io'
import {MdDeliveryDining} from 'react-icons/md'
import {MdOutlineExplore} from 'react-icons/md'
import {BsTrophy} from 'react-icons/bs'
import {AiOutlinePieChart} from 'react-icons/ai'
import {BiTrendingUp} from 'react-icons/bi'
import {MdOutlinePermContactCalendar  } from 'react-icons/md'     
import {BsQuestionCircle} from 'react-icons/bs'

const SideBar = () => {
  return (
    <><div className='sideBar grid'>
      <div className='logoDiv flex'>
        <img src={Logo} alt="Image Name" />
        <h2></h2>
      </div>

      <div className='menuDiv'>
        <h3 className='divTitle'>
          Menú de navegación
        </h3>
        <ul className='menuList grid'>
          <li className='listItem'>
            <a href="#" className='menuLink flex'>
              <IoMdSpeedometer className="icon" />
              <span className='smallText'>
                Usuarios
              </span>
            </a>
          </li>

          <li className='listItem'>
            <a href="#" className='menuLink flex'>
              <MdDeliveryDining className="icon" />
              <span className='smallText'>
                Infantes
              </span>
            </a>
          </li>

          <li className='listItem'>
            <a href="#" className='menuLink flex'>
              <MdOutlineExplore className="icon" />
              <span className='smallText'>
                Municipios
              </span>
            </a>
          </li>

          <li className='listItem'>
            <a href="#" className='menuLink flex'>
              <BsTrophy className="icon" />
              <span className='smallText'>
                Actividades
              </span>
            </a>
          </li>
          <li className='listItem'>
            <a href="#" className='menuLink flex'>
              <BsTrophy className="icon" />
              <span className='smallText'>
                Subir actividades
              </span>
            </a>
          </li>
          <div className='settingsDiv'>
      <h3 className='divTitle'>
          Acompañamiento
      </h3>
      <ul className='menuLists grid'>

      <li className='listItem'>
            <a href="#" className='menuLink flex'>
              <AiOutlinePieChart className="icon" />
              <span className='smallText'>
                Asignar acompañante
              </span>
            </a>
          </li>

          <li className='listItem'>
            <a href="#" className='menuLink flex'>
              <BiTrendingUp className="icon" />
              <span className='smallText'>
                Ingresar nuevo acompañante
              </span>
            </a>
          </li>

          <li className='listItem'>
            <a href="#" className='menuLink flex'>
              <MdOutlinePermContactCalendar className="icon" />
              <span className='smallText'>
                Editar
              </span>
            </a>
          </li>
      </ul>
    </div>
        </ul>
      </div>
        
     <div className='sideBarCard'>
          <BsQuestionCircle className="icon"/>
          <div className='cardContent'>
            <div className='circle1'></div>
            <div className='circle2'></div>
            <h3>Centro de ayuda</h3>
            <p>Monitoreo de actividaes no realizadas</p>
            <button className='btn'>Ir al centro de ayuda</button>
          </div>
        </div>
     </div>
    </>
  )
}

export default SideBar