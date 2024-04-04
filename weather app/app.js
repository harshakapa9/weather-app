const apikey="4063363b9a549fee3be005d7f8ff03a9";
        const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
        const searchtext=document.querySelector(".search input");
        const searchbtn=document.querySelector(".search button");
        const weatherimg=document.querySelector(".weather-icon");
        async function checkweather(city){
            const responce=await fetch(apiurl+city+`&appid=${apikey}`);
            if(responce.status==404){
                document.querySelector(".error").style.display="block";
                
            document.querySelector(".weather").style.display="none";
            }
            else{
                document.querySelector(".error").style.display="none";
                var data=await responce.json();
            document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
            document.querySelector(".city").innerHTML=data.name;
            document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
            document.querySelector(".wind").innerHTML=data.wind.speed+"km/hr";
            if(data.weather[0].main=="clouds"){
                weatherimg.src="weather-app-img/images/clouds.png";
            }
            else if(data.weather[0].main=="Clear"){
                weatherimg.src="weather-app-img/images/clear.png"
            }
            else if(data.weather[0].main=="Rain"){
                weatherimg.src="weather-app-img/images/rain.png"
            }
            else if(data.weather[0].main=="Dizzle"){
                weatherimg.src="weather-app-img/images/drizzle.png"
            }
            else if(data.weather[0].main=="Mist"){
                weatherimg.src="weather-app-img/images/mist.png"
            }
            document.querySelector(".weather").style.display="block";
            }
            
        }
        searchbtn.addEventListener("click",()=>{
            checkweather(searchtext.value);
        })