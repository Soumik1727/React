import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {useState} from 'react'


function App() {

    let [uname, setUname] = useState('');
    let [pass, setPass] = useState('');
    let handleSubmit =(event)=>{
        event.preventDefault();
    }
    let getUname=(event)=>{
        setUname(event.target.value);
    }
  return (
    <div className="App">
        <div className='container'>
            <div className='row'>
                <div className='col-lg-6'>
                    <form onSubmit={handleSubmit}>
                        <div className='text-start my-3'>     {/*  Text will start from left*/}
                            <label>Username</label>
                            <input onChange={getUname} type='text' className="form-control" value={uname}/>
                        </div>
                        <div className='text-start my-3'>    
                            <label>Password</label>
                            <input onChange={(e)=>setPass(e.target.value)} type='text' className="form-control" value={pass}/>
                        </div>
                        <div className='text-start my-3'>
                            <button>Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
