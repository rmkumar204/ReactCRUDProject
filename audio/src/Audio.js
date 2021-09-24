import React from 'react';
import { IoMdMenu } from "react-icons/io";
import { VscCircleFilled } from "react-icons/vsc";

import { IoPersonAddSharp,IoMicOffSharp,IoVolumeLowSharp } from "react-icons/io5";
import {FaPhone, FaUserCircle} from "react-icons/fa";
import { IconContext } from "react-icons";
function Audio(){
return(
<div className="mainclass">
    <div className=" main">
        <IconContext.Provider className="iconsize" value={{size:"30px"}}>
        <div className="corner">
            <IoMdMenu size="40px" className="cornerleft"/>
            <div className="subcorner">
                <span className="record">Record</span>&nbsp;&nbsp;
                <VscCircleFilled className="cornerright"/>
            </div>
        </div>
        <div><FaUserCircle color="white" size="100px"/>
            
            <h3 >John Doe</h3>
        </div>
        <div>
            <form className="formaudiclass">
                <IoPersonAddSharp color="blue"/>
                <IoMicOffSharp/>
                <IoVolumeLowSharp/>
                <FaPhone className="phone" color="red"/>
            </form>
        </div>
        </IconContext.Provider>
    </div>
    </div>
)
}
export default Audio;