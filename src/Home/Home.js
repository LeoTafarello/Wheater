import React, {useState} from 'react';
import './Home.css';

const api = {
    key: 'e1b1209d88fd684b0da45065c7d7587f',
    base:'http://api.openweathermap.org/data/2.5/'
}

export default function Home() {

    const [city,Setcity] = useState('')
    //const [state,Setstate] = useState('')
    const [weather,SetWheater] = useState({})

        const search = evt => {
            if (evt.key === 'Enter'){
                fetch(`${api.base}weather?q=${city}&units=metric&appid=${api.key}`)
                .then(res => res.json())
                .then(result => {
                    SetWheater(result);
                    Setcity('');
                    console.log(result);
                })
            }
        }


        return(

            <div className={(typeof weather.main != 'undefined') ? ((weather.main.temp > 15) ? 'home-main' : 'home-main-cold') : 'home-main'}>
               <main className='main'>
                   <div className='home-search-row'>
                       <input className='search-bar' type='text' placeholder='Search City' onChange= {e=> Setcity(e.target.value)} value={city} onKeyPress={search} />
                   </div>
                   {(typeof weather.main != 'undefined') ? (
                   <div>
                        <div className='location-box'>
                            <div className='location-name'>{weather.name}, {weather.sys.country}</div>
                        </div>
                        <div className={(typeof weather.main.temp > 15) ? 'temp-box-hot' : 'temp-box-cold'}>
                            <div className='temp-box-main'>
                                <div className='temp-celsius'>
                                     {Math.round(weather.main.temp)}º
                                    <span className='after-temp'>C</span>
                        
                                 </div>
                                <div className='weather-main'>
                                    <img className='weather-icons' src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt='weather'/>
                                    <div className='weather-name'>{weather.weather[0].description}</div>
                                </div>
                                </div>
                                <div className='temp-box-footer'>
                                    <div className='weather-enviroment'>Temperature Fells Like: {weather.main.feels_like}</div>
                                    <div className='weather-min-max'>Max {weather.main.temp_max}º / Min{weather.main.temp_min}º</div>
                                </div>
                            
                        </div>
                        </div>
                   ) : ('')}
               </main>
            </div>
        );
}