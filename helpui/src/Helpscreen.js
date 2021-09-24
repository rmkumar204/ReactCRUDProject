import React from 'react';
import {FaTimes} from 'react-icons/fa';
function Helpscreen() {
    return (
    <div className="helpclass">
        
        <div className="helptitle">
        <div className="cross" ><FaTimes  /></div>
        <div className="help">Help</div>
        <div></div>
        </div>
        
        <div className="helpinst">
        <div className="inst">Help Center</div><hr></hr>
        <div className="inst">Terms &amp; Use</div><hr></hr>
        <div className="inst">Privacy Policy</div><hr></hr>
        <div className="inst">Report a Problem</div><hr></hr>
        <div className="inst">Report Us</div><hr></hr>
        </div>
        
        <div className="App">
        <div >
        <div className="logoversion"><span className="logospan">Logo</span></div>
        <span>Version 1.1.0</span>
        </div>
        </div>


    </div>  
    );
}

export default Helpscreen;