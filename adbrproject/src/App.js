
import './App.css';
import Login from './Login';

function App() {
  return (
    <div className="App">
              <div className='head'>
                      <div className="container header">
                        <h1>App Name</h1>
                      <select className="lang"><option >English</option></select>
                        </div>
                      
                    <div>  
                    <hr className="line"/>
                    </div>
              </div>  
              <div className='loginpop'>
                    <Login ></Login>
              </div>
              <div className=' container footer'>
                Footer<br/>
                Footer<br/>
                Footer<br/>
                Footer<br/>
                Footer<br/>
                Footer<br/>
              </div>
    </div>
  );
}

export default App;
