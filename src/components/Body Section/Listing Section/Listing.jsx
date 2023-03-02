import React from 'react'
import './listing.css'

import img from '../../../Assets/plan.jpg'
import img1 from '../../../Assets/leng.jpg'
import img2 from '../../../Assets/cong.jpg'
import img3 from '../../../Assets/soci.jpg'
import img4 from '../../../Assets/us.jfif'
import {AiFillHeart} from 'react-icons/ai'
import {BsArrowRightShort} from 'react-icons/bs'

const Listing = () => {
  return (
    <div className='listingSection'>
      <div className='heading flex'>
        <h1>Microindicadores</h1>
        <button className='btn flex'>
          See All <BsArrowRightShort className="icon"/>
        </button>
      </div>
      <div className='secContainer flex'>
        <div className='singleItem'>
          <AiFillHeart className="icon"/>
          <img src={img} alt="Image Name" />
          <h3>Movimiento y sentidos</h3>
        </div>

        <div className='singleItem'>
          <AiFillHeart className="icon"/>
          <img src={img1} alt="Image Name" />
          <h3>Lenguaje</h3>
        </div>

        <div className='singleItem'>
          <AiFillHeart className="icon"/>
          <img src={img2} alt="Image Name" />
          <h3>Cognición</h3>
        </div>

        <div className='singleItem'>
          <AiFillHeart className="icon"/>
          <img src={img3} alt="Image Name" />
          <h3>Psicosocial</h3>
        </div>

      </div>

      <div className='sellers flex'>
        <div className='topSellers'>
          <div className='heading flex'>
            <h3>Acompañantes </h3>
            <button className='btn flex'>
                Ir <BsArrowRightShort className='icon'/>
            </button>
          </div>
          <div className='card flex'>
            <div className='users'>
              <img src={img4} alt="Users Image" />
            </div>
            <div className='cardText'>
              <span>
                Juan Manuel Guendulain<br />
                <small>
                  Lic.<span className='date'> en Psicología</span>
                </small>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Listing