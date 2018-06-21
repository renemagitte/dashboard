import React, { Component } from 'react';
import Widget from './Widget'
import Icon from './Icon'

class Weather extends Component {
    
    state = {
        weatherData: ''
      }

      componentDidMount() {
          this.fetchWeather();

      }

      

     fetchWeather = () => {
            fetch('http://api.openweathermap.org/data/2.5/forecast?q=Stockholm&units=metric&id=2673722&APPID=8244bd30246e88c12211bc724930e918')
            .then(response => response.json())
            .then((data) => {
                this.setState({ weatherData: data.list["0"].weather["0"].description })
            },
            (error) => {
                this.setState({ error })
            });
        }

  render() {
      //forecast?q=' + city + '&units=metric
      
      console.log(this.state.weatherData)
      
    
    return (
        <Widget widgetStyling="weatherContainer">

        
                <Icon icon="cloud" />
        
        {this.state.weatherData}
        
    
        

  

        
        </Widget>


        
    );
  }
}

export default Weather;
