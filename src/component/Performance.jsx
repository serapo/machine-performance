import React from 'react'
import '../scss/performance.scss'

const Performance = () => {
  return (
    <>
        <span className='border-bottom d-block'>Performance</span>
        
            <div className='quality'> 

            <div className='sol'>
            <div className='h6 small text-white'>Ideal Cycle</div>
            <div className='h6 small text-white'>00:02:000</div>
            <div className='h6 small text-black'>idealCycle</div>
            </div>

            <div className='or'>            
            <div className='h6 small text-white'>Average Cycle</div>
            <div className=' h6 small text-white'>00:07:334</div>
            <div className='h6 small text-black'>averageCycle</div>
            </div> 
            <div className='h6 small'>Performance
              
              <div className='sagt'>
              <div class="flex-wrapper">
              <div class="single-chart">
              <svg viewBox="0 0 36 36" class="circuular-chart orange">
              <path class="circle-bg"
                     d="M18 2.0845
                     a 15.9155 15.9155 0 0 1 0 31.831
                     a 15.9155 15.9155 0 0 1 0 -31.831"
               />
              <path class="circle"
              stroke-dasharray="27, 100"
               d="M18 2.0845
               a 15.9155 15.9155 0 0 1 0 31.831
               a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <text x="18" y="20.35" class="percentage">27%</text>
                 </svg>
              </div></div></div>
            </div>
    </div>
    </>
  )
}

export default Performance