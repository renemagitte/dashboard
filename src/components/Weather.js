import React, { Component } from 'react';
import Widget from './Widget'
import Icon from './Icon'
import Heading from './Heading'

class Weather extends Component {
    
    state = {
        weather: '',
        weatherDescription: '',
        weatherTemp: '',
        weaterIcon: ''
      }

      componentDidMount() {
          this.fetchWeather();

      }

      

     fetchWeather = () => {
            fetch('http://api.openweathermap.org/data/2.5/forecast?q=Stockholm&units=metric&id=2673722&APPID=8244bd30246e88c12211bc724930e918')
            .then(response => response.json())
            .then((data) => {
                this.setState({ weather: data.list["0"], 
                               weatherDescription: data.list["0"].weather["0"].description, 
                               weatherTemp: data.list["0"].main.temp,
                               weatherIcon: 'http://openweathermap.org/img/w/' + data.list["0"].weather["0"].icon + '.png'
                              })
            },
            (error) => {
                this.setState({ error })
            });
        }

  render() {
      //forecast?q=' + city + '&units=metric
      
      console.log(this.state.weaterIcon)
      
    
    return (
        <Widget widgetStyling="weatherContainer">

        
                <Icon icon="cloud" />
                <Heading heading="Weather" />
       The weather could be describled as {this.state.weatherDescription} with a temerature of {this.state.weatherTemp}
        
        
        <img src={this.state.weatherDescription} />
        
    
        

  

        
        </Widget>


        
    );
  }
}

export default Weather;
