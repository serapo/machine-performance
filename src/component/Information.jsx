import React from 'react'
import '../scss/information.scss'
import { FaDharmachakra,FaUserAlt, FaClock } from "react-icons/fa";

const Information = ({name, status}) => {
  return (
    <>
        {/* <span className='border-bottom d-block text-black h6 small'>machine.name</span> */}
        {/* <span className='d-inline'>ÇİKOLATA 1</span> */}
        <span className='d-block text-black'>machine.name</span>
        <span className='d-block'>{name}</span>
            <div className='quality'> 
            <div className='info'>
            <span></span> 
            <div className='d-block'>
            <div className='h6 small text-white d-inline'><FaDharmachakra/>{status}</div>
            <div className='d-inline text-black '> status </div>
            <div className='small-text d-inline text-black '> 0=Working 1=Failure Other=Unknown </div>
            </div>
         
            <div>
            <div className='h6 small text-white d-inline'><FaUserAlt/>Cormind Admin</div>
            <div className='d-inline text-black '> operator.user </div>
            </div>
            
            <div className='h6 small text-white d-inline'><FaClock/>06:00 - 04:00</div>
            <div className='d-inline text-black '> shift </div>
            </div>
            <div className='h6 small'>OEE
              
            <div className='sagt'>
            <div class="flex-wrapper">
            <div class="single-chart">
            <svg viewBox="0 0 36 36" class="circulaar-chart orange">
            <path class="circle-bg"
                   d="M18 2.0845
                   a 15.9155 15.9155 0 0 1 0 31.831
                   a 15.9155 15.9155 0 0 1 0 -31.831"
             />
            <path class="circle"
            stroke-dasharray="10, 100"
             d="M18 2.0845
             a 15.9155 15.9155 0 0 1 0 31.831
             a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <text x="18" y="20.35" class="percentage">10%</text>
               </svg>
            </div></div></div>                    
            
               </div>    
    </div>
  
    </>
  )
}

export default Information