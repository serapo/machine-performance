import React from 'react'
import '../scss/quality.scss'

const Quality = () => {
  return (
    <>
        <span className='border-bottom d-block'>Quality</span>
            <div className='quality'> 

            <div className='sol'>
            <div className='h6 small text-white'>Produced</div>
            <div className='h6 small text-white'>387.491</div>
            <div className='h6 small text-black'>prodAmount</div>
            </div>

            <div className='ort'>            
            <div className='h6 small text-white'>Defect</div>
            <div className=' h6 small text-white'>54,213</div>
            <div className='h6 small text-black'>defectAmount</div>
            </div>
            <div className='h6 small'>Quality
              
              <div className='sagt'>
              <div class="flex-wrapper">
              <div class="single-chart">
              <svg viewBox="0 0 36 36" class="ciircular-chart orange">
              <path class="circle-bg"
                     d="M18 2.0845
                     a 15.9155 15.9155 0 0 1 0 31.831
                     a 15.9155 15.9155 0 0 1 0 -31.831"
               />
              <path class="circle"
              stroke-dasharray="87, 100"
               d="M18 2.0845
               a 15.9155 15.9155 0 0 1 0 31.831
               a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <text x="18" y="20.35" class="percentage">87%</text>
                 </svg>
              </div></div></div>
            </div>
    </div>
    </>
  )
}

export default Quality