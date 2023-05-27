// import { useEffect, useState } from "react";
// import Movieslist from "./Movieslist";

// const Favorites = () => {

//     let[favoriteMovies , setFav] = useState(null);

//     useEffect(()=>{
//         setFav(JSON.parse(localStorage.getItem("fav")))
//     } , [])

//     return ( 
//     <div>
//        {favoriteMovies &&
//         <Movieslist movies={favoriteMovies} title="Favorite movies"/>}
//     </div> );
// }
 
// export default Favorites;


import { useEffect, useState } from "react";
import Movieslist from "./Movieslist";

const Favorites = () => {

    let[fav , setFav] = useState(null);
    let[altered,setaltered]=useState(0);

    useEffect( ()=>{
     setFav( JSON.parse(localStorage.getItem("fav")) );
    } , [altered]);

    return(
        <div>
            {fav && <Movieslist movies={fav} title="Favorites"/>  }
        </div>
    )
}
 
export default Favorites;