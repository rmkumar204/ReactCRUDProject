import React from "react";
function Login(){
    return(
        <div className='login-popup'>
            <div className="box">
                <div className='login-profile'>
                    <div>
                    <h1>LOGIN</h1>
                    <h2>Welcome Back !</h2>
                    </div>
                    <h4>Don't have an account ? <span>Sign Up</span></h4>
                </div>
                <div className='appform'>
                    <form>
                        <div >
                            <label>Email, Username or Phone Number</label>
                            <input className='form-group' type='text' placeholder='Email, Username or Phone Number'></input>
                        </div>
                    
                        <div className='password'>
                            <label>Password</label>
                            <input className='form-group1' type='password' placeholder='Password'></input>
                            <span className='forgot'>Forgot Password?</span>
                        </div>
                        
                        <div>
                            <p>By proceeding, you are agreeing with <span>Terms &amp; Policy</span></p>                            
                        </div>
                        <button className="form-log" type='submit' >Login</button>
                        <div className="staycheck">
                            <input className="check" type='checkbox'  ></input>
                            <label className='staylab' >Stay loged in</label>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Login;