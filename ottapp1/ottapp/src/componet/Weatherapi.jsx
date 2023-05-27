const weather=()=>{
   
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
		'X-RapidAPI-Host': 'ai-weather-by-meteosource.p.rapidapi.com'
	}
};

fetch("https://ai-weather-by-meteosource.p.rapidapi.com/find_places?text=fishermans%20wharf&language=en", options)
    .then (Response=> Response.json())
    .then((Res)=>{Res.current.humidity})
     

  
}