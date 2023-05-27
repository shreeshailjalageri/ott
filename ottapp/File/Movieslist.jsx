// import { Link } from "react-router-dom";

// const Movieslist = ({movies , title}) => {
//     return ( 
//     <div>
//         <h1>{title}</h1>

//         <div className="movies">
//                     {movies.map((movie)=>{
//                         return(
//                             <div className="movie">
//                             <Link to={`/moviedetails/${movie.id}`}>
//                                 <img src={movie.poster} alt="poster" width="200px" height="250px" />
//                                 <h2>{movie.moviename}</h2>
//                                 <p>{movie.genre}</p>
//                                 </Link>
//                             </div>
//                         )
//                     })}
//         </div>

//     </div> );
// }
 
// export default Movieslist;




// import { Link } from "react-router-dom";
// <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
// const Movieslist = ({movies , title}) => {

//     let handleAddtofav = (movie)=>{
//       let fav = JSON.parse(localStorage.getItem("fav"));
//       fav.push(movie);
//       fav = JSON.stringify(fav);
//       localStorage.setItem("fav" , fav);
//       alert("movie added to favorites list")
//     }

//     return ( 
//     <div>
//         <h1 id="title">{title}</h1>

//         <div className="movies">
//                     {movies.map((movie)=>{
//                         return(
//                             <div className="movie">
//                                 <button onClick={()=>{ handleAddtofav(movie) }}> 💓  </button>
//                               <button onClick={()=>{ handleAddtofav(movie) }}> <i class='bx bx-heart'></i> </button>
//                                 <Link to={`/moviedetails/${movie.id}`}>
                                   
//                                     <img src={movie.poster} alt="poster" width="200px" height="250px" />
//                                     <h2>{movie.moviename}</h2>
//                                     <p>{movie.genre}</p>

//                                 </Link>
//                             </div>
//                         )
//                     })}
//         </div>

//     </div> );
// }
 
// export default Movieslist;






import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Movieslist = ({movies , title}) => 
{
    let[favId , setFavId] = useState([]);
     let[altered,setaltered] = useState(0);

    useEffect(()=>{
        let fav = JSON.parse(localStorage.getItem("fav"));
        setFavId(fav.map((m)=>{return m.id}));
    } , [altered]);

    let add = (movie)=>{ 
       let fav =  JSON.parse(localStorage.getItem("fav"));
       fav.push(movie);
       localStorage.setItem("fav" , JSON.stringify(fav));
       setaltered(altered+1);
       alert("movie added to favorites")
    }

    let removeMovie = (id)=>{ 
        let fav =  JSON.parse(localStorage.getItem("fav"));
        fav = fav.filter((m)=>{return m.id!=id })
        localStorage.setItem("fav" , JSON.stringify(fav));
        setaltered(altered+1);
        alert("movie removed from favorites")   
     }

    return ( 
    <div>
        <h1 id="title">{title}</h1>

        <div className="movies">
                    {movies.map((movie)=>{
                        return(
                            <div className="movie">

                              {favId.includes(movie.id) ?
                                <button onClick={ ()=>{removeMovie(movie.id)} }> <i class='bx bxs-heart'></i></button> :
                                
                                <button onClick={ ()=>{add(movie)} }><i class='bx bx-heart'></i></button>}

                                <Link to={`/moviedetails/${movie.id}`}>
                                   
                                    <img src={movie.poster} alt="poster" width="200px" height="250px" />
                                    <h2>{movie.moviename}</h2>
                                    <p>{movie.genre}</p>

                                </Link>
                            </div>
                        )
                    })}
        </div>

    </div> );
}
 
export default Movieslist; 