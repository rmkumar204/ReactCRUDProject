import React from 'react';
import {FaArrowLeft, FaSearch} from 'react-icons/fa';

import { FaUserCircle} from "react-icons/fa";

function Addparticipants(props) {
    return     (props.trigger)?(
        // 3.from audio.js props of addparticipants is trigger and it has become true and whole compo return will be executed
        <div className="size">
    <div className="helpclass">
        
        <div className="helptitle">
        
        <div className="cross" >
           
            <FaArrowLeft onClick={()=>props.setTrigger(false)} />
            {/* 1.1 in audio.js props setTrigger is in setAddpopup true and will become false so props of trigger will become false 
            and entire addparticipant component will be disabled */}
            {props.children}
            
            </div>
            
        <div className="help">Add Participants</div>
        <div></div>
        </div>
        <div className="popcolor">
            <div className=" search-box">
                <input className="inpsearch" id="icodiscurs"   type="text" placeholder="Search People" ></input>
                < FaSearch className="searchicon" />
            </div>
        <div className="contactlist"  >
            <div className="contact">
            <div className="contact1">< FaUserCircle style={{fontSize:50,opacity:0.5}} /><h2 className="name">John Doe</h2></div>
           
           <input className="check" style={{width:20,height:20}} type="checkbox"></input>
          
            </div>
            <div className="contact">
            <div className="contact1">< FaUserCircle style={{fontSize:50 ,opacity:0.5}} /><h2 className="name">John Doe</h2></div>
                <input className="check"  style={{width:20,height:20}} type="checkbox"></input>
                </div>
            <div className="contact">
            <div className="contact1">
                < FaUserCircle style={{fontSize:50 ,opacity:0.5}} />
                    <h2 className="name">John Doe</h2>  
                    </div>
                        <input className="check"  style={{width:20,height:20}} type="checkbox"></input>
                        
            </div>
            <div className="contact">
                <div className="contact1">
                    < FaUserCircle style={{fontSize:50 ,opacity:0.5}} />
                        <h2 className="name">John Doe</h2>
                        </div>
                        <input className="check"  style={{width:20,height:20}} type="checkbox"></input>
                        
            </div>
            <div className="contact">
                <div className="contact1">
                 < FaUserCircle style={{fontSize:50,opacity:0.5}} />
                    <h2 className="name">John Doe</h2>
                    </div>
                        <input className="check"  style={{width:20,height:20}} type="checkbox"></input>
                        
            </div>

            <div className="contact">
                <div className="contact1">
                    < FaUserCircle style={{fontSize:50,opacity:0.5}} />
                    <h2 className="name">John Doe</h2>
                    </div>
                    <input className="check"  style={{width:20,height:20}} type="checkbox"></input>
            </div>
            <div className="contact">
                <div className="contact1">
                    < FaUserCircle style={{fontSize:50,opacity:0.5}} />
                    <h2 className="name">John Doe</h2>
                    </div>
                    <input className="check"  style={{width:20,height:20}} type="checkbox"></input>
            </div>
            <div className="contact">
                <div className="contact1">
                    < FaUserCircle style={{fontSize:50,opacity:0.5}} />
                    <h2 className="name">John Doe</h2>
                    </div>
                    <input className="check"  style={{width:20,height:20}} type="checkbox"></input>
            </div>
            <div className="contact">
                <div className="contact1">
                    < FaUserCircle style={{fontSize:50,opacity:0.5}} />
                    <h2 className="name">John Doe</h2>
                    </div>
                    <input className="check"  style={{width:20,height:20}} type="checkbox"></input>
            </div>
            <div className="contact">
                <div className="contact1">
                    < FaUserCircle style={{fontSize:50,opacity:0.5}} />
                    <h2 className="name">John Doe</h2>
                    </div>
                    <input className="check"  style={{width:20,height:20}} type="checkbox"></input>
            </div>
       
            
        </div>
        
        </div>
        
       
        <div className="doneinner">
            <button className="done" type="submit">Done</button>
      
        </div> 

    </div>
    

    </div>  
    ) :"";
}

export default Addparticipants;