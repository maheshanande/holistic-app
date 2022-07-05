import React from 'react'

import { poseImages } from '../../utils/pose_images'
import { useState } from 'react'

import './DropDown.css'

export default function DropDown({ poseList, currentPose, setCurrentPose }) {
    const[isDropdownVisible,setIsDropdownVisible]=useState(false);
    // list of dropdown items
    
    // reference to user seleccted  element
    
return (
        <div
        className='custom-dropdown'>
            <div className='custom-dropdown-selection'id='pose-dropdown-btn' onClick={e=>{
                setIsDropdownVisible(!isDropdownVisible);
            }}>
                {
                    // selectedItemIndex!= null ? poseList[selectedItemIndex].name:"please select pose..."
                    currentPose
                }

            </div>
            {/* dropdown list */}
            
            {
                isDropdownVisible?(
                    <div className='items-holder'>
                {
                    poseList.map(
                        (pose)=>(
                            <div className='dropdown-item' onClick={e=>{
                                
                                setIsDropdownVisible(false);
                                setCurrentPose(pose)
                            }}><p className="dropdown-item-1">{pose}
                            <img 
                            src={poseImages[pose]}
                            className="dropdown-img" alt="Img not found!!!"/></p>
                             
                            </div>
                        ))
                }
            </div>
                ):<></>
            }
        
              
          
      </div>
    )
}
 