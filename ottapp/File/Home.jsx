// import { useEffect, useState } from "react";
// import Movieslist from "./Movieslist.jsx";

// const Home = () => {

//     let [movies , setMovies] = useState(null);
//     let [error , setError] = useState(null);
//     let [pending , setPending] = useState(true);
    

//     useEffect(()=>{
//         setTimeout(()=>{
//             fetch("http://localhost:4000/movies")
//             .then((res)=>{ return res.json() })
//             .then((data)=>{ 
//                 console.log(data);
//                 setMovies(data);
//                 setPending(false);
//                 })
//             .catch((err)=>{
//                 setError("404 Network issue !!! please try again later");
//                 setPending(false);
//             })
//         } , 3000)
//     } , [])


//     return ( 
//         <div className="home">   

//         {pending==true  &&  <h1>Loading.......</h1>}

//         {error && <h1> {error} </h1>}

//         {movies && <Movieslist movies={movies} title="All movies"/>}


//         </div>
//      );
// }
// export default Home;




// import { useEffect, useState } from "react";
// import Movieslist from "./Movieslist.jsx";

// const Home = () => {

//     let [movies , setMovies] = useState(null);
//     let [error , setError] = useState(null);
//     let [pending , setPending] = useState(true);
    

//     useEffect(()=>{

//         if( localStorage.getItem("fav")==null )
//         {
//             localStorage.setItem("fav" , "[]")
//         }

//         setTimeout(()=>{
//             fetch("http://localhost:4000/movies")
//             .then((res)=>{ return res.json() })
//             .then((data)=>{ 
//                 console.log(data);
//                 setMovies(data);
//                 setPending(false);
//                 })
//             .catch((err)=>{
//                 setError("404 Network issue !!! please try again later");
//                 setPending(false);
//             })
//         } , 3000)
//     } , [])


//     return ( 
//         <div className="home">   

//         {pending==true  &&  <h1>Loading.......</h1>}

//         {error && <h1> {error} </h1>}

//         {movies && <Movieslist movies={movies} title="All movies"/>}

//         {movies && <Movieslist movies={movies.map((m)=>{return m.genre==action})} title="Action movies"/>}

//         {movies && <Movieslist movies={movies} title="Top movies"/>}

//         {movies && <Movieslist movies={movies} title="Drama movies"/>}



//         </div>
//      );
// }
// export default Home;




import { useEffect, useState } from "react";
import Movieslist from "./Movieslist.jsx";

const Home = () => {

    let [movies , setMovies] = useState(null);
    let [error , setError] = useState(null);
    let [pending , setPending] = useState(true);
    

    useEffect(()=>{

        if( localStorage.getItem("fav")==null )
        {
            localStorage.setItem("fav" , "[]")
        }

        setTimeout(()=>{
            fetch("http://localhost:4000/movies")
            .then((res)=>{ return res.json() })
            .then((data)=>{ 
                console.log(data);
                setMovies(data);
                setPending(false);
                })
            .catch((err)=>{
                setError("404 Network issue !!! please try again later");
                setPending(false);
            })
        } , 3000)
    } , [])


    return ( 
        <div className="home">   

        {pending==true  &&  <h1>Loading.......</h1>}

        {error && <h1> {error} </h1>}

        {movies && <Movieslist movies={movies} title="All movies"/>}

        {movies && <Movieslist movies={movies} title="Action movies"/>}

        {movies && <Movieslist movies={movies} title="Top movies"/>}

        {movies && <Movieslist movies={movies} title="Drama movies"/>}



        </div>
     );
}
export default Home;