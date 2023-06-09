
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Home from "./component/Home";
import Navbar from './component/Navbar';
import Addmovie from './component/Addmovie';
import Moviedetails from './component/Moviedetails';
import Favorites from './component/Favorites';
import Searchpage from './component/Relevant';
import Editmovie from './component/Editmovie';

function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Routes>

            <Route path="/" element={<Home/>}/>
            <Route path="/add" element={<Addmovie/>}/>
            <Route path="/moviedetails/:id" element={<Moviedetails/>}/>
            <Route path="/fav" element={<Favorites/>} />
            <Route path="/search/:searchword" element={<Searchpage/>}/>
            <Route path="/edit/:id" element={<Editmovie/>}/>

          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;