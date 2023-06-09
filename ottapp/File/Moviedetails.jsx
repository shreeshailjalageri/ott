// import {useState,useEffect} from "react"
// import { useParams } from "react-router-dom";
// import Movieslist from "./Movieslist.jsx";


// const moviedetails=()=>{ 
//  let{id}=useParams
//     let[movie,setMovie] = useState(null);
//     let[error,setError]=useState(null);
//     let[pending,setPending]=useState(true);

//         useEffect(()=>{
//             setTimeout(()=>{
//                 fetch("http://localhost:4000/movies/"+id)
//                 .then((res)=>{ return res.json() })
//                 .then((data)=>{ 
//                     console.log(data);
//                     setMovie(data);
//                     setPending(false);
//                     })
//                 .catch((err)=>{
//                     setError("404 Network issue !!! please try again later");
//                     setPending(false);
//                 })
//             } , 3000)
//         } , [])
    
    
//         return ( 
//             <div className="home">   
    
//             {pending==true  &&  <h1>Loading.......</h1>}
    
//             {error && <h1> {error} </h1>}
    
//             {movie && <div className="movie-details">
          
//           <h1>watch complete movie</h1>

//           <img src={movie.poster} alt="poster" width="200px" height="250px" />
//                                 <h2>{movie.moviename}</h2>
//                                 <h3>Actor:{movie.hero}</h3>
//                                 <p>Director:{movie.director}</p>
//                                 <p>languages{movie.languages.join( " , ")}:</p>
//                                 <p>Genre:{movie.genre}</p>
//                                 <h3>Story line:</h3>
//                                 <h3>{movie.synopsis}</h3>
//                                 <iframe width="560" height="315" src="https://www.youtube.com/embed/r51cYVZWKdY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
//        </div>  }
    
//             </div>
//          );
//     }

// export default moviedetails;



// import { useState , useEffect} from "react";
// import { useParams } from "react-router-dom";
// import Movieslist from "./Movieslist";
// const Moviedetails = () => {

//     let {id} = useParams();
//     let [movie , setMovie] = useState(null);
//     let [error , setError] = useState(null);
//     let [pending , setPending] = useState(true);
    
//     useEffect(()=>{
//         setTimeout(()=>{
//             fetch("http://localhost:4000/movies/"+id)
//             .then((res)=>{ return res.json() })
//             .then((data)=>{ 
//                 console.log(data);
//                 setMovie(data);
//                 setPending(false);
//                 })
//             .catch((err)=>{
//                 setError("404 Network issue !!! please try again later");
//                 setPending(false);
//             })
//         } , 3000)
//     } , [])

//     return (<div>
//         {pending==true  &&  <h1>Loading.......</h1>}
//         {error && <h1> {error} </h1>}
//         {movie &&   <div className="movie-details">
//                         <h1>Watch Complete movie</h1>
//                         <img src={movie.poster} alt="poster" />
//                         <h1>Movie : {movie.moviename}</h1>
//                         <h3>Actor : {movie.hero}</h3>
//                         <p>Director : {movie.ditrector}</p> 
//                         <p>Languages : {movie.languages.join(" , ")}</p>
//                         <p>Genre : {movie.genre}</p>
//                         <h3>Story Line : </h3>
//                         <p>{movie.synopsis}</p>
//                         <iframe width="560" height="315" src={movie.trailer} 
//                         title="YouTube video player" frameborder="0" 
//                         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
//                         allowfullscreen></iframe>
//                     </div> }

//     </div> );
// }
 
// export default Moviedetails;





// import { useEffect, useState } from "react";
// import Movieslist from "./Movieslist";
// import { useParams } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import Relevant from "./Relevent";

// const Moviedetails = () => {

//     let {id} = useParams();
//     let navigate = useNavigate();
//     let [movie , setMovie] = useState(null);
//     let [error , setError] = useState(null);
//     let [pending , setPending] = useState(true);
    
//     useEffect(()=>{
//         setTimeout(()=>{
//             fetch("http://localhost:4000/movies/"+id)
//             .then((res)=>{ return res.json() })
//             .then((data)=>{ 
//                 console.log(data);
//                 setMovie(data);
//                 setPending(false);
//                 })
//             .catch((err)=>{
//                 setError("404 Network issue !!! please try again later");
//                 setPending(false);
//             })
//         } , 3000)
//     } , [id])

//     let deleteMovie = ()=>{
//         fetch("http://localhost:4000/movies/"+id , {method : "DELETE"} )
//         .then(()=>{ navigate("/") })
//     }

//     return (<div>
//         {pending==true  &&  <h1>Loading.......</h1>}
//         {error && <h1> {error} </h1>}
//         {movie &&   <div className="movie-details">
//                         <h1>Watch Complete movie</h1>
//                         <img src={movie.poster} alt="poster" />
//                         <h1>Movie : {movie.moviename}</h1>
//                         <h3>Actor : {movie.hero}</h3>
//                         <p>Director : {movie.ditrector}</p> 
//                         <p>Languages : {movie.languages.join(" , ")}</p>
//                         <p>Genre : {movie.genre}</p>
//                         <h3>Story Line : </h3>
//                         <p>{movie.synopsis}</p>
//                         <iframe width="560" height="315" src={movie.trailer} 
//                         title="YouTube video player" frameborder="0" 
//                         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
//                         allowfullscreen></iframe>

//                         <button onClick={deleteMovie}>delete</button>

//                     </div> }

//         {movie && <Relevant genre={movie.genre}/>}

//     </div> );
// }
 
// export default Moviedetails;





import { useState , useEffect} from "react";
import { useParams } from "react-router-dom";
import Movieslist from "./Movieslist";

import { useNavigate } from "react-router-dom";
import Relevant from "./Relevent";

const Moviedetails = () => {

    let {id} = useParams();
    let navigate = useNavigate();
    let [movie , setMovie] = useState(null);
    let [error , setError] = useState(null);
    let [pending , setPending] = useState(true);
    
    useEffect(()=>{
        setTimeout(()=>{
            fetch("http://localhost:4000/movies/"+id)
            .then((res)=>{ return res.json() })
            .then((data)=>{ 
                console.log(data);
                setMovie(data);
                setPending(false);
                })
            .catch((err)=>{
                setError("404 Network issue !!! please try again later");
                setPending(false);
            })
        } , 3000)
    } , [id])

    let deleteMovie = ()=>{
        fetch("http://localhost:4000/movies/"+ id , {method : "DELETE"} )
        .then(()=>{ navigate("/") })
    }

    return (<div>
        {pending==true  &&  <h1>Loading.......</h1>}
        {error && <h1> {error} </h1>}
        {movie &&   <div className="movie-details">
                        <h1>Watch Complete movie</h1>
                        <img src={movie.poster} alt="poster" />
                        <h1>Movie : {movie.moviename}</h1>
                        <h3>Actor : {movie.hero}</h3>
                        <p>Director : {movie.ditrector}</p> 
                        <p>Languages : {movie.languages.join(" , ")}</p>
                        <p>Genre : {movie.genre}</p>
                        <h3>Story Line : </h3>
                        <p>{movie.synopsis}</p>
                        <iframe width="560" height="315" src={movie.trailer} 
                        title="YouTube video player" frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowfullscreen></iframe>

                        <button onClick={deleteMovie}>delete</button>

                    </div> }

        {movie && <Relevant genre={movie.genre}/>}

    </div> );
}
 
export default Moviedetails;