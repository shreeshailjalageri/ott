import React, { Component }  from 'react';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Busdetail from './componets/Busdetails';
import Home from './componets/Home';
import Login from './componets/Login';
import Profile from './componets/Profile';
import Protect from './componets/Protect';
import Signup from './componets/Signup';
import Bookbus from './componets/Bookbus';
import Busdetails from './componets/Busdetails';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
            <Route path='/' element={<Signup/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/home' element={ <Protect Child={Home}/>  }/>
            <Route path='/profile' element={ <Protect Child={Profile}/>  }/>
            <Route path='/bus' element={<Protect Child={Bookbus}/>}/>
            <Route path='/busdetail/:busid' element={<Protect Child={Busdetails}/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}


export default App;