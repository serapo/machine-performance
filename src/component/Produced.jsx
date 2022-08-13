import React from 'react'
import '../scss/produced.scss'
import { FaWpforms , FaPaperclip} from "react-icons/fa";

const Produced = () => {
  return (
    <> 
        <div className='quality'>
            <div className='h6 small text-white d-inline'> <FaPaperclip/>Gofret </div>
            <div className='small-text d-inline text-black'> currentProdPlan.goods.code</div>
        </div>
        <div className='quality border-bottom' >
            <div className='h6 small text-white d-inline'><FaWpforms/>C1_GOF_100K_GOODS</div>
            <div className='small-text d-inline text-black '> currentProdPlan.goods.product.code </div>
        </div>
              
        <div className='quality d-flex '> 
            <div className='solp'>
                 <div className='h6 small text-white'>Produced</div>
                 <div className='small-text text-black'>currentProdPlan.goods.current_produced</div>
                 <div className='text-white'>447,028</div>
            </div> 

            <div className='orta'>            
                 <div className='h6 small text-white'>Targeted</div>
                 <div className='small-text text-black'> currentProdPlan.goods.amount</div>
                 <div className='h6 small text-white'>500,000</div>
            </div>           
           
            <div className='h6 small'>Availability
              
              <div className='sagt'>
              <div class="flex-wrapper">
              <div class="single-chart">
              <svg viewBox="0 0 36 36" class="circullar-chart orange">
              <path class="circle-bg"
                     d="M18 2.0845
                     a 15.9155 15.9155 0 0 1 0 31.831
                     a 15.9155 15.9155 0 0 1 0 -31.831"
               />
              <path class="circle"
              stroke-dasharray="89, 100"
               d="M18 2.0845
               a 15.9155 15.9155 0 0 1 0 31.831
               a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <text x="18" y="20.35" class="percentage">89%</text>
                 </svg>
              </div></div></div>
           
          </div> 
          </div> 
          {/* <div className='d-flex'>
            <div className='border w-50,,'>
              <p>jkdkdjkdks</p>
            </div>
            <div className='border w-25'>
              <p>djksdkaskdk</p>
            </div>
            <div className='border w-25'>
              <p>fjejsdkfjawkoaolal</p>
            </div>
          </div> */}
    
    </>
  )
}

export default Produced