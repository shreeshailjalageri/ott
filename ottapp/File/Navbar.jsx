// import { Link } from "react-router-dom";

// const Navbar = () => {
//     return ( 
//         <nav>
//             <div id="logo">
//                 <Link to="/"><h1>Movies 🕷</h1></Link>
//             </div>
//             <div id="search-bar">
//                 <input type="search" placeholder="Search for movies"/>
//                 <button>search</button>
//             </div>
//             <div id="add-movie">
//                 <Link to="/add">Add movie</Link>
//             </div>
//         </nav>
//      );
// }
 
// export default Navbar;





// const Navbar = () => {
//     return ( 
//         <nav>
//             <div id="logo">
//                 <a href="/"><h1>Movies 🕷</h1></a>
//             </div>
//             <div id="search-bar">
//                 <input type="search" placeholder="Search for movies"/>
//                 <button>search</button>
//             </div>
//             <div id="fav-movie">
//                 <a href="/fav">Favorite movies</a>
//             </div>
//             <div id="add-movie">
//                 <a href="/add">Add movie</a>
//             </div>
//         </nav>
//      );
// }
 
// export default Navbar;



import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

    let[searchword , setSearchword] = useState("");

    return ( 
        <nav>
            <div id="logo">
                <Link to="/"><h1>Movies 🕷</h1></Link>
            </div>
            <div id="search-bar">
                <input type="search" placeholder="Search for movies" value={searchword}
                onChange={(e)=>{ setSearchword( e.target.value ); }}
                />
                <Link to={`/search/${searchword}`}><button>search</button></Link>
            </div>
            <div id="fav-movie">
                <Link to="/fav">Favorite movies</Link>
            </div>
            <div id="add-movie">
                <Link to="/add">Add movie</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;