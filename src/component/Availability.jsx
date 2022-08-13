import React from 'react'
import '../scss/availability.scss'
import Moment from 'moment';


const Availability = () => {
  const formatDate = Moment().format('DD-MM-YYYY')
  return (
    <>
        <span className='border-bottom d-block'>Availability</span>
        
            <div className='quality'> 

            <div className='sol'>
            <div className='h6 small text-white'>Uptime</div>
            <div className='h6 small text-white'>{formatDate} </div>
            <div className='h6 small text-black'>workDuration</div>
            </div>

            <div className='ortaa'>            
            <div className='h6 small text-white'>Downtime</div>
            <div className=' h6 small text-white'>00:34</div>
            <div className='h6 small text-black'>failureDuration</div>
            </div> 
           
                           
            <div className='h6 small '>Availability
              
              <div className='sagt'>
              <div class="flex-wrapper">
              <div class="single-chart">
              <svg viewBox="0 0 36 36" class="ccircular-chart orange">
              <path class="circle-bg"
                     d="M18 2.0845
                     a 15.9155 15.9155 0 0 1 0 31.831
                     a 15.9155 15.9155 0 0 1 0 -31.831"
               />
              <path class="circle"
              stroke-dasharray="43, 100"
               d="M18 2.0845
               a 15.9155 15.9155 0 0 1 0 31.831
               a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <text x="18" y="20.35" class="percentage">43%</text>
                 </svg>
              </div></div></div>
            </div>
    </div>
    </>
  )
}

export default Availability