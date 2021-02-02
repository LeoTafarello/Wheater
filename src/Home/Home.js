import React from 'react';
import './Home.css';

const api = {
    key: 'e1b1209d88fd684b0da45065c7d7587f',
    base:'http://api.openweathermap.org/data/2.5/'
}

export default class Home extends React.Component{

        state= {
            loading: true,
        }

        async componentDidMount() {
            const url = `${api.base}weather?q=London&appid=${api.key}`;
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
        }


    render(){
        return(
            <div className='home-main'>
               <main>
                   <div className='home-search-row'>
                       <input className='search-bar' type='text' placeholder='Search...'/>
                   </div>
               </main>
            </div>
        );
    }
}
